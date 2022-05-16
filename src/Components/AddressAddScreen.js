import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
  TextInput
} from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const AddressAddScreen = props => {
  const onSave = () => {
    navigation.navigate('AddressScreen')
  }
  const { navigation } = props
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [address1, setAddress1] = useState()
  const [address2, setAddress2] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>First Name</Text>
        <View style={styles.cardview}>
          <View style={styles.startView}>
            {/* <AntDesign style={styles.icons} name="lock" size={26} color="#20B3F0" /> */}
            <TextInput
              style={styles.input}
              onChangeText={setFirstName}
              value={firstName}
              placeholder='First Name'
              maxLength={24}
              // secureTextEntry={true}
            />
          </View>
        </View>
        <Text style={styles.text}>Last Name</Text>
        <View style={styles.cardview}>
          <View style={styles.startView}>
            {/* <AntDesign style={styles.icons} name="lock" size={26} color="#20B3F0" /> */}
            <TextInput
              style={styles.input}
              onChangeText={setLastName}
              value={lastName}
              placeholder='Last Name'
              maxLength={24}
              // secureTextEntry={true}
            />
          </View>
        </View>
        <Text style={styles.text}>Street Address</Text>
        <View style={styles.cardview}>
          <View style={styles.startView}>
            {/* <AntDesign style={styles.icons} name="lock" size={26} color="#20B3F0" /> */}
            <TextInput
              style={styles.input}
              onChangeText={setAddress1}
              value={address1}
              placeholder='Street Address'
              // secureTextEntry={true}
            />
          </View>
        </View>
        <Text style={styles.text}>Street Address 2</Text>
        <View style={styles.cardview}>
          <View style={styles.startView}>
            {/* <AntDesign style={styles.icons} name="lock" size={26} color="#20B3F0" /> */}
            <TextInput
              style={styles.input}
              onChangeText={setAddress2}
              value={address2}
              placeholder='Street Address 2'
              // secureTextEntry={true}
            />
          </View>
        </View>
        <Text style={styles.text}>New Password Again</Text>
        <View style={styles.cardview}>
          <View style={styles.startView}>
            {/* <AntDesign style={styles.icons} name="lock" size={26} color="#20B3F0" /> */}
            <TextInput
              style={styles.input}
              onChangeText={setPhoneNumber}
              value={phoneNumber}
              placeholder='Phone Number'
              maxLength={12}
              keyboardType="numeric"            
              // secureTextEntry={true}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
            <TouchableOpacity style={styles.buttons}
                onPress={onSave}
            >
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default AddressAddScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: 10,
    justifyContent: 'space-between',
  },
  top: {
    width: windowWidth,
    height: windowHeight * 0.6,
    justifyContent: 'center',

    padding: 10,
    // borderWidth: 1
  },
  text: {
    color: 'darkblue',
    fontWeight: 'bold',
    fontSize: 16
  },
  text2: {
    color: '#20B3F0',
    fontSize: 14
  },
  bottom: {
    width: windowWidth,
    height: windowHeight * 0.08,
    // borderWidth: 1,
    padding: 10,
    // alignItems:'center',
    // justifyContent: 'flex-start',
    // backgroundColor:'black',
    justifyContent: 'center'
    // justifyContent:"flex-end",
  },
  buttons: {
    height: windowHeight * 0.075,

    backgroundColor: '#20B3F0',
    borderRadius: 6,
    // padding: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  cardview: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#20B3F0',
    marginVertical: 8

    // padding: 22,
  },
  startView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  icons: {
    marginRight: 10
  },
  input: {
    //   borderWidth:1,
    width: windowWidth / 1.13,
    fontSize: 15
    //   height: windowHeight/25,
  }
})
