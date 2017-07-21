import { Value } from '@/public'
/*
 * action 类型
 */
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';


export function login(auth) {
	Value.session.add("auth", auth)
  	return { type: LOG_IN, auth }
}

export function logout(auth) {
	Value.session.add("auth", auth)
  	return { type: LOG_OUT, auth }
}