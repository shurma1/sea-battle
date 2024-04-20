export interface Action<K> {
	type: string;
	payload: K;
}