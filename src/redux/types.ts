export type action = {
  type: string,
  payload: any,
}

export type userState = {
  currentUser: Object | null,
  isAuth: boolean,
}