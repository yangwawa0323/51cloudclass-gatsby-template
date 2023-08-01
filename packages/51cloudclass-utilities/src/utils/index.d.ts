import { AxiosInstance } from 'axios';
export declare const debugLog: (...args: Array<unknown>) => void;
export declare const getAxios: () => AxiosInstance;
export declare const debounce: (fn: Function, threshold: number) => () => void;
export declare const random: (max: number) => number;
export declare const formatDate: (date: Date, format?: string) => string;
export declare const gradientColor: {
    backgroundImage: string;
    display: string;
    backgroundClip: string;
    WebkitBackgroundClip: string;
    WebkitTextFillColor: string;
};
export declare const getRidOfDomain: (url: string) => string;
export declare const getUrlParameter: (search: string) => string;
declare const defaults: {
    getAxios: () => AxiosInstance;
    debugLog: (...args: Array<unknown>) => void;
    debounce: (fn: Function, threshold: number) => () => void;
    random: (max: number) => number;
    formatDate: (date: Date, format?: string) => string;
    getRidOfDomain: (url: string) => string;
    getUrlParameter: (search: string) => string;
};
export default defaults;
