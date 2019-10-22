import { useState } from 'react'

export const useFormInput = initialState => {
  const [value, setValue] = useState(initialState)
  const handleChange = value => {
    setValue(value)
  }
  return {
    value,
    onChangeText: handleChange,
  }
}
