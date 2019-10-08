import { useState } from 'react'

// De cada input captura su valor y cambia su state inicial
export const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue)
  const handleChangeText = value => setValue(value)

  return { value, onChangeText: handleChangeText }
}
