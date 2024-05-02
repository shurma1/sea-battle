import {RequestType} from "./RequestType";


export interface SocketRequest<T> {
	type: RequestType;
	data: T;
}