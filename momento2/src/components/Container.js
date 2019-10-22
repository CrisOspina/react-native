import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Container = ({ children }) => {
  return <View style={styles.mainContainer}>{children}</View>
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  title: {
    fontSize: 20,
    color: '#DD2C00',
    textAlign: 'center',
    marginBottom: 15,
  },
})
