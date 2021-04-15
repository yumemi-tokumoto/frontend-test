import { Reducer } from 'redux'

export type UserInputFieldState = {
  name: string
  age: number | null
}

const initialState: UserInputFieldState = {
  name: '',
  age: null,
}

type UserInputFieldActionType = 'userRegist/updateName' | 'userRegist/updateAge'

type UserInputFieldAction = {
  type: UserInputFieldActionType
  payload: UserInputFieldState
}

export const userInputFieldReducer: Reducer<
  UserInputFieldState,
  UserInputFieldAction
> = (
  state: UserInputFieldState = initialState,
  action: UserInputFieldAction,
) => {
  switch (action.type) {
    case 'userRegist/updateName':
      return action.payload
    case 'userRegist/updateAge':
      return action.payload
    default:
      return state
  }
}
