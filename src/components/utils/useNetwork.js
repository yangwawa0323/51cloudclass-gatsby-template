import { useEffect, useState } from 'react';
import { getAxios } from './tools';

const useNetwork = (url) => {
    const axiosInstance = getAxios();
    let [state, setState] = useState({ loading: true });

    useEffect(() => {
        setState({ loading: true });

        const makeRequest = async () => {
            try {
                let response = await axiosInstance.get(url);
                let data = await response.data;

                setState({ data, loading: false });
            } catch (error) {
                setState({ error, loading: false });
            }
        };

        makeRequest();
    }, [url]);

    return state;
};
