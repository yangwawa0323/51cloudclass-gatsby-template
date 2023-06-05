/** @format */

import React, { useContext, useEffect, useState } from 'react';
import { getAxios, debugLog } from '51cloudclass-utilities/src/utils';
import { AxiosInstance, AxiosResponse } from 'axios';
import type { PageProps } from 'gatsby';
import { globalContext } from '../../wrap-with-provider';
import type { tokenExample, User } from '.';

const axiosInstance: AxiosInstance = getAxios();

interface LastVisitedProps {
	children: React.ReactNode;
}

interface VisitedData {}

const logVisitedPageInfo = (): Promise<unknown> => {
	let saveToDb = new Promise((resolve, reject) => {
		// TODO: use axios save visited page to DB
		let url: string = '';
		let saveToDbResponse = axiosInstance
			.post(url)
			.then((response: AxiosResponse<any>) => {
				switch (response.status) {
					case 200:
						return resolve(response.data);
					default:
						reject(response.data);
				}
			});
		return saveToDbResponse;
	});
	return saveToDb;
};

interface LogStatus {
	name: string;
	isLogin: boolean;
}

const fakeLogVisitedPageInfo = (
	status: LogStatus,
	path: string
): Promise<boolean> => {
	return new Promise((resolve, _) => {
		setTimeout(() => {
			if (status.isLogin) {
				debugLog(`${status.name} you are visited page`, path);
			} else {
				debugLog("you haven't login, so you have no history records");
			}
		}, 1000);
		resolve(true);
	});
};

const LastVisitedWrapper = ({
	children,
	path,
}: Omit<PageProps, 'children'> & { children: React.ReactNode }) => {
	const { isLogin, decodedToken } = useContext(globalContext) as {
		isLogin: boolean;
		decodedToken: typeof tokenExample;
	};

	useEffect(() => {
		debugLog('decodedToken :', decodedToken, 'isLogin :', isLogin);
		if (decodedToken != null && isLogin) {
			let status = {
				isLogin,
				name: decodedToken?.username as string | 'guest',
			};
			fakeLogVisitedPageInfo(status, path).then((succeed) => {
				if (succeed) {
					debugLog('has been log');
				}
			});
		}
	}, [decodedToken, isLogin]);

	return <div>{children}</div>;
};

export default LastVisitedWrapper;
