/** @format */
import React, { ReactElement, ReactNode } from 'react';

import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { utils } from '51cloudclass-utilities/src/';
import { useContext } from 'react';
import { globalContext } from '../../wrap-with-provider';
import NeedLogin from '../pages/need-login';
import { AxiosResponse } from 'axios';
import { useSelect } from '@mui/base';
import { useSelector } from 'react-redux';
import { IState } from '51cloudclass-utilities/src/store/reducers/authSlice';

const { getAxios } = utils;
const axiosInstance = getAxios();

export const patchDataByType = async (
	type: string,
	data: any & { id: number }
) => {
	const response = await axiosInstance.patch(
		`${process.env.REACT_APP_API_SERVER}/${type}/${data.id}`,
		data
	);
	return response;
};

export const postDataByType = async (
	type: string,
	data: any & { id: number }
) => {
	const response = await axiosInstance.post(
		`${process.env.REACT_APP_API_SERVER}/${type}`,
		data
	);
	return response;
};

const fetchDataByType = async (
	type: string,
	id: number,
	sortField: string,
	order = 'asc'
) => {
	let response;
	let url = `${process.env.REACT_APP_API_SERVER}/api/${type}/`;

	if (
		sortField !== undefined &&
		typeof sortField === 'string' &&
		sortField !== ''
	) {
		url = url + `?order=${sortField}%20${order}`;
	}

	if (id) {
		url = `${url}${id}`;
	}

	response = await axiosInstance.get(url);

	return await response.data;
};

export const useCourse = (id: number, sortField: string, order: string) => {
	return useQuery(['fetch-courses'], () =>
		fetchDataByType('courses', id, sortField, order)
	);
};

export const useCategory = (id: number, sortField: string, order: string) => {
	return useQuery(['fetch-categories'], () =>
		fetchDataByType('categories', id, sortField, order)
	);
};

export const useChapter = (id: number, sortField: string, order: string) => {
	return useQuery(['fetch-chapters'], () =>
		fetchDataByType('chapters', id, sortField, order)
	);
};

export const useMessage = (id: number, sortField: string, order: string) => {
	return useQuery(['fetch-site-messages'], () =>
		fetchDataByType('messages', id, sortField, order)
	);
};

export const useDatabaseBackup = (
	id: number,
	sortField: string,
	order: string
) => {
	return useQuery(['fetch-database-backup'], () =>
		fetchDataByType('databases', id, sortField, order)
	);
};

type Policy = {
	type: 'p' | 'g';
	sub: string;
	obj: string;
	act: string;
};

type PoliciesResponse = {
	result: Array<Policy>;
};

export const useAuthenticate = () => {
	const [state, setState] = useState<unknown | null>(null);

	const fetchPolicies = async () => {
		const axiosInstance = getAxios();
		await axiosInstance
			.get(`${process.env.REACT_APP_API_SERVER}/api/policies/`)
			.then((response: AxiosResponse<PoliciesResponse>) => response.data)
			.then((data: PoliciesResponse) => setState(data));
	};

	useEffect(() => {
		fetchPolicies();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return state;
};

// type: is model
// method:  "add" | "modify"
export const useTypeMutation = (
	type: string,
	method: string,
	onMutateCallback: Function,
	onSuccessCallback: Function
) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data: any & { ID: number }) => {
			const url = `${process.env.REACT_APP_API_SERVER}/api/${type}/${
				data.ID ? data.ID : ''
			}`;
			const request =
				method === 'add' ? axiosInstance.post : axiosInstance.patch;
			return request(url, data);
		},
		onMutate: () => {
			onMutateCallback !== undefined && onMutateCallback();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [`fetch-${type}`] });
			onSuccessCallback !== undefined && onSuccessCallback();
		},
	});
};

interface WrappedComponent {
	WrappedComponent: ReactNode | ReactElement | React.FC<any>;
}

export const needLoginWrapper = (
	WrappedComponent: React.FC<any> | React.ComponentClass
) => {
	return (props: React.PropsWithoutRef<any>) => {
		const { isExpired, isLogin } = useContext(globalContext);
		if (!isExpired && isLogin) {
			return (
				<div>
					<WrappedComponent {...props} />
				</div>
			);
		} else {
			// navigate('/');
			return <NeedLogin />;
		}
	};
};

export const useAccount = () => {
	const [account, setAccount] = useState();

	const { isLogin, isExpired } = useContext(globalContext);

	const reduxAccount = useSelector(
		(state: { auth: IState }) => state.auth.account
	);
	/**
	 * if user has been login, return the localStorage account info
	 */
	const syncAccount = () => {
		if (isExpired || !reduxAccount) {
		}
	};

	return [account, syncAccount];
};

// TODO:
export const subscibeWrapper =
	() => (WrappedComponent: React.FunctionComponent) => {
		return (props: React.PropsWithoutRef<any>) => {
			const { isVip } = useContext(globalContext);
			if (isVip) {
				return (
					<div>
						<WrappedComponent {...props} />
					</div>
				);
			} else {
				return <div>扫码支付仅需51元包月学习</div>;
			}
		};
	};
