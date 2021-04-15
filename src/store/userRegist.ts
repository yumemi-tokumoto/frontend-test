import { Reducer } from 'redux'

export type UserInputFieldState = {
  name: string
  age: number | null
}

const initialState: UserInputFieldState = {
  name: '',
  age: null,
}

type UserInputFieldAction =
  | {
      type: 'userRegist/updateName'
      payload: { name: string }
    }
  | {
      type: 'userRegist/updateAge'
      payload: { age: number }
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
        ...action.payload,
      }
    case 'userRegist/updateAge':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
