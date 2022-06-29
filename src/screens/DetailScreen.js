import { View, Text } from 'react-native'
import React from 'react'

const DetailScreen = (props) => {
    const {route}=  props
    const barcodeText = route.params.barcodeText
  return (
    <View>
      <Text>DetailScreen about {barcodeText}</Text>
    </View>
  )
}

export default DetailScreen