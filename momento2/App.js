import React from 'react'

// Components
import { Container, Form } from './src/components/index'

// Hooks
import { useFormInput, usePOST, useListar } from './src/hooks/index'

const App = () => {
  // States
  const tipo = useFormInput('insertar')
  const nroplaca = useFormInput('')
  const marca = useFormInput('')
  const valor = useFormInput('')

  const registrarVehiculo = usePOST(
    tipo.value,
    nroplaca.value,
    marca.value,
    valor.value
  )

  const listar = useListar(tipo.value)

  return (
    <Container>
      <Form
        tipo={tipo}
        nroplaca={nroplaca}
        marca={marca}
        valor={valor}
        registrarVehiculo={registrarVehiculo}
        listar={listar}
      />
    </Container>
  )
}

export default App
