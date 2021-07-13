import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("todos/callBegan");
export const apiCallSuccess = createAction("todos/callSuccess");
export const apiCallFailed = createAction("todos/callFailed");
