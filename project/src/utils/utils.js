import { AuthorizationStatus } from '../consts';

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;

export const timeFormating = (time) => {
  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = Math.round(time % 60);

  const minutes = `${m > 9 ? Math.max(m, 0) : `0${Math.max(0, m)}`}:${s > 9 ? Math.max(0, s) : `0${Math.max(0, s)}`}`;
  const hours = `${h > 9 ? Math.max(h, 0) : `0${Math.max(0, h)}`}:${minutes}`;

  if(h < 1) {
    return minutes;
  }

  return hours;
};
