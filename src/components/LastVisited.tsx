/** @format */

import React, { useEffect } from 'react';
import { getAxios } from '51cloudclass-utilities/src/utils';
import { AxiosInstance, AxiosResponse } from 'axios';

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

const LastVisited = ({ children }: LastVisitedProps) => {
	useEffect(() => {
		logVisitedPageInfo().then((response) => {});
	}, []);

	return <div>LastVisited</div>;
};

export default LastVisited;
