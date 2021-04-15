import { Reducer } from 'redux'

export type UserInputFieldState = {
  name: string
  age: number | null
}

const initialState: UserInputFieldState = {
  name: '',
  age: null,
}

type UserInputFieldActionType =
  | 'userRegist/updateName'
  | 'userRegist/updateNumber'

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
      return {
        ...state,
        name: action.payload.name,
      }
    case 'userRegist/updateNumber':
      return {
        ...state,
        age: action.payload.age,
      }
    default:
      return state
  }
}
