import { FormDetails } from '../ActionType'

export const Redcuer = (
  state = {
    name: 'Prasang',
    secondName: 'atre',
    email: '@gmail.com',
    number: 1111,
  },
  action,
) => {
  switch (action.type) {
    case FormDetails: {
      return action.payload
    }

    default:
      return state
  }
}
