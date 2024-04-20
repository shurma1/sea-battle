import {Answer} from './Answer';


export interface SocketAnswer<T> {
	type: Answer;
	data: T;
}