import { FormDetails } from '../ActionType'

export const addFormData = (data) => ({
  type: FormDetails,
  payload: data,
})
