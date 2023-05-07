/** @format */
import React from 'react'

import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { utils } from '51cloudclass-utilities/dist';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { navigate } from 'gatsby';
import { globalContext } from '../../wrap-with-provider';
import NeedLogin from '../pages/need-login';

const { getAxios } = utils;
const axiosInstance = getAxios()

export const patchDataByType = async (type, data) => {
	const response = await axiosInstance.patch(
		`${process.env.REACT_APP_API_SERVER}/${type}/${data.id}`,
		data
	);
	return response;
};

export const postDataByType = async (type, data) => {
	const response = await axiosInstance.post(
		`${process.env.REACT_APP_API_SERVER}/${type}`,
		data
	);
	return response;
};

const fetchDataByType = async (type, id, sortField, order = 'asc') => {
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

export const useCourse = (id, sortField, order) => {
	return useQuery(['fetch-courses'], () =>
		fetchDataByType('courses', id, sortField, order)
	);
};

export const useCategory = (id, sortField, order) => {
	return useQuery(['fetch-categories'], () =>
		fetchDataByType('categories', id, sortField, order)
	);
};

export const useChapter = (id, sortField, order) => {
	return useQuery(['fetch-chapters'], () =>
		fetchDataByType('chapters', id, sortField, order)
	);
};

export const useMessage = (id, sortField, order) => {
	return useQuery(['fetch-site-messages'], () =>
		fetchDataByType('messages', id, sortField, order)
	);
};

export const useDatabaseBackup = (id, sortField, order) => {
	return useQuery(['fetch-database-backup'], () =>
		fetchDataByType('databases', id, sortField, order)
	);
};

export const useAuthenticate = () => {
	const [state, setState] = useState(null);

	const fetchPolicies = async () => {
		const axiosInstance = getAxios();
		await axiosInstance
			.get(`${process.env.REACT_APP_API_SERVER}/api/policies/`)
			.then((response) => response.data)
			.then((data) => setState(data));
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
	type,
	method,
	onMutateCallback,
	onSuccessCallback
) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data) => {
			const url = `${process.env.REACT_APP_API_SERVER}/api/${type}/${data.ID ? data.ID : ''
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

export const needLoginWrapper = (WrappedComponent) => {
	return (props) => {
		const { isExpired, isLogin } = useContext(globalContext);
		if (!isExpired && isLogin) {
			return <div><WrappedComponent  {...props} /></div>
		} else {
			// navigate('/');
			return <NeedLogin />;
		}
	}
};


// TODO:
export const subscibeWrapper = () => (WrappedComponent) => {
	return (props) => {
		const { isVip } = useContext(globalContext);
		if (isVip) {
			return <div><WrappedComponent {...props} /></div>
		} else {
			return <div>扫码支付仅需51元包月学习</div>
		}
	}
}


export const Warning = ({ component }) => {
	return (
		{ component }
	)
}

Warning.propTypes = {
	component: PropTypes.objectOf(React.Component),
}
