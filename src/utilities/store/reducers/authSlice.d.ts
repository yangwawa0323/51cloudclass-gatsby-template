export interface Account {
    avatar: string;
}
export interface IState {
    hasBeenLogin: boolean;
    account: Account | null;
}
declare const _default: import("redux").Reducer<IState>;
export default _default;
export declare const login: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "auth/login">, logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/logout">, getAvatar: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/getAvatar">, updateAvatar: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string, "auth/updateAvatar">;
