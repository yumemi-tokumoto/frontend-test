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
      payload: string
    }
  | {
      type: 'userRegist/updateNumber'
      payload: number
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
        name: action.payload,
      }
    case 'userRegist/updateNumber':
      return {
        ...state,
        age: action.payload,
      }
    default:
      return state
  }
}
