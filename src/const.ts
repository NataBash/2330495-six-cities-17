export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum Town {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = ' Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
 './public/img/pin.svg';

export const URL_MARKER_CURRENT =
 './public/img/pin-active.svg';

export enum ActionType {
  ChangeCity = 'CHANGE_CITY',
  LoadOffers = 'LOAD_OFFERS',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}
