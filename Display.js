import React from 'react'
import {View,Text} from "react-native"

const Display = (props) => {
     const {name}=props
  return (
     <view>
        <Text style={{fontSize:20}}>Content {name} </Text>
     </view>
  )
}

export default Display