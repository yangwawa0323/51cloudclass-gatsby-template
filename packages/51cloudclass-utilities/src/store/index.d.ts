/** @format */
export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
    auth: import("./reducers/authSlice").IState;
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<import("redux").CombinedState<{
    auth: import("./reducers/authSlice").IState;
}>, import("redux").AnyAction>]>;
declare const _default: {
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<import("redux").CombinedState<{
        auth: import("./reducers/authSlice").IState;
    }>, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
    store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
        auth: import("./reducers/authSlice").IState;
    }, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<import("redux").CombinedState<{
        auth: import("./reducers/authSlice").IState;
    }>, import("redux").AnyAction>]>;
};
export default _default;
