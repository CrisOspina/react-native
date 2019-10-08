import React from 'react'

// Components
import { Container, Registro } from './src/components/index'

// Hooks
import { useFormInput, useAPIInsert } from './src/hooks/index'

export default function App() {
  const name = useFormInput('')
  const email = useFormInput('')
  const password = useFormInput('')

  const registrarUsuario = useAPIInsert(name.value, email.value, password.value)

  return (
    <Container>
      <Registro
        name={name}
        email={email}
        password={password}
        registrarUsuario={registrarUsuario}
      />
    </Container>
  )
}
