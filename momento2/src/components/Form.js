import React, { Fragment } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

export const Form = props => {
  const { tipo, nroplaca, marca, valor, registrarVehiculo, listar } = props

  return (
    <Fragment>
      <Text style={styles.title}>Registro de vehículos</Text>
      <TextInput
        {...tipo}
        placeholder="Tipo"
        underlineColorAndroid="transparent"
        style={styles.textInputStyleClass}
      />

      <TextInput
        {...nroplaca}
        placeholder="Número de placa"
        underlineColorAndroid="transparent"
        style={styles.textInputStyleClass}
      />

      <TextInput
        {...marca}
        placeholder="Marca"
        underlineColorAndroid="transparent"
        style={styles.textInputStyleClass}
      />

      <TextInput
        {...valor}
        placeholder="Valor"
        underlineColorAndroid="transparent"
        style={styles.textInputStyleClass}
      />
      <TouchableOpacity style={styles.button} {...registrarVehiculo}>
        <Text style={styles.text}>Guardar vehículo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} {...listar}>
        <Text style={styles.text}>Listar vehiculos</Text>
      </TouchableOpacity>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  textInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#DD2C00',
    borderRadius: 5,
  },
  button: {
    width: '80%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#DD2C00',
    borderRadius: 3,
    marginTop: 20,
  },

  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
  title: {
    fontSize: 20,
    color: '#DD2C00',
    textAlign: 'center',
    marginBottom: 15,
  },
})
