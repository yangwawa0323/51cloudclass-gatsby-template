interface TokenEtagAccount {
    token: string;
    etag: string;
    account: string;
}
export declare const getTokenEtagAccount: () => TokenEtagAccount;
export interface Storage {
    token: string;
    etag: string;
    account: string;
}
export declare const saveToLocalStorage: (data: Storage) => void;
export declare const cleanTokenEtag: () => void;
export declare const getAccount: () => any;
declare const defaults: {
    getTokenEtagAccount: () => TokenEtagAccount;
    saveToLocalStorage: (data: Storage) => void;
    cleanTokenEtag: () => void;
};
export default defaults;
