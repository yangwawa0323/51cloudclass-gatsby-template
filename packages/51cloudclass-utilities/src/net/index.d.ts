import type { AxiosInstance } from 'axios';
/** @format */
export declare const isBrowser: boolean;
export declare const withTokenHeader: (axiosInstance: AxiosInstance) => void;
export declare const cors: (axiosInstance: AxiosInstance) => void;
export declare const corsConfig: (method: string | null) => {
    method: string;
    mode: string;
    headers: {
        'Access-Control-Allow-Origin': string;
        'Content-Type': string;
    };
    withCredentials: boolean;
    credentials: string;
};
declare const defaults: {
    withTokenHeader: (axiosInstance: AxiosInstance) => void;
    cors: (axiosInstance: AxiosInstance) => void;
    corsConfig: (method: string | null) => {
        method: string;
        mode: string;
        headers: {
            'Access-Control-Allow-Origin': string;
            'Content-Type': string;
        };
        withCredentials: boolean;
        credentials: string;
    };
    isBrowser: boolean;
};
export default defaults;
