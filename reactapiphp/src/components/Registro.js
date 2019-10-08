import React, { Fragment } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

export const Registro = props => {
  const { name, email, password, registrarUsuario } = props
  return (
    <Fragment>
      <Text style={styles.title}>Registro de Usuario</Text>
      <TextInput
        {...name}
        placeholder="Ingrese nombre de usuario"
        underlineColorAndroid="transparent"
        style={styles.textInputStyleClass}
      />

      <TextInput
        {...email}
        placeholder="Ingrese correo electrónico"
        underlineColorAndroid="transparent"
        style={styles.textInputStyleClass}
      />

      <TextInput
        {...password}
        placeholder="Ingrese contraseña"
        underlineColorAndroid="transparent"
        style={styles.textInputStyleClass}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} {...registrarUsuario}>
        <Text style={styles.text}>Clic aquí para registrarse</Text>
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
