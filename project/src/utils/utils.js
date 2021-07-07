import {AuthorizationStatus} from '../consts';

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
