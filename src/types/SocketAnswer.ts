import {AnswerType} from './AnswerType';


export interface SocketAnswer<T> {
	type: AnswerType;
	data: T;
}