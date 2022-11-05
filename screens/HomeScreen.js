import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React from 'react'
import vector from '../assets/Vector.png'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormDetails } from '../redux/ActionType'
import { addFormData } from '../redux/action/Action'
const HomeScreen = () => {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [number, setNumber] = useState(0)
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const items = useSelector((state) => state)
  const handleSubmit = () => {
    const objectData = {
      name,
      secondName,
      number,
      email,
    }
    console.log(objectData)
    dispatch(addFormData(objectData))
    navigation.navigate('DashBoard')
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.profile}>Profile</Text>
          </View>
          <View style={styles.button}>
            <View>
              <Image source={vector} />
            </View>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.desctext}>
            Enter your details so we can get to know you better.
          </Text>
        </View>
        <View style={styles.horizontal}>
          <View style={styles.horizontaline} />
        </View>
        <View style={styles.form}>
          <View style={{ marginTop: 21 }}>
            <View style={{ marginLeft: 18.5 }}>
              <Text style={styles.text}>First Name</Text>
            </View>
            <View style={{ marginTop: 12 }}>
              <TextInput
                placeholder="John"
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
              />
            </View>
          </View>
          <View style={{ marginTop: 21 }}>
            <View style={{ marginLeft: 18.5 }}>
              <Text style={styles.text}>Second Name</Text>
            </View>
            <View style={{ marginTop: 12 }}>
              <TextInput
                placeholder="Doe"
                style={styles.input}
                onChangeText={(text) => setSecondName(text)}
                value={secondName}
              />
            </View>
          </View>
          <View style={{ marginTop: 21 }}>
            <View style={{ marginLeft: 18.5 }}>
              <Text style={styles.text}>Phone</Text>
            </View>
            <View style={{ marginTop: 12 }}>
              <TextInput
                placeholder="98231221"
                style={styles.input}
                onChangeText={(num) => setNumber(num)}
                value={number}
              />
            </View>
          </View>
          <View style={{ marginTop: 21 }}>
            <View style={{ marginLeft: 18.5 }}>
              <Text style={styles.text}>Email</Text>
            </View>
            <View style={{ marginTop: 12 }}>
              <TextInput
                placeholder="JohnDoe@gmail.com"
                style={styles.input}
                onChangeText={(email) => setEmail(email)}
                value={email}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.otptext}>OTP verification in next step</Text>
        </View>
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View style={styles.profileButton}>
            <View>
              <Text style={styles.profileText}>Create Profile</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 64,
    paddingLeft: 21,
    paddingRight: 21,
  },
  profile: {
    fontSize: 22,
    fontWeight: '600',
    color: '#500061',
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00000005',
    boxShadow: '4px -5px 5px 0px #00000040 inset',
  },
  description: {
    marginTop: 20.8,
    paddingLeft: 23,
    width: 219,
    height: 40,
  },
  desctext: { fontSize: 16, fontWeight: '600', color: '#646464' },
  horizontal: {
    marginTop: 31.76,
    alignSelf: 'center',
  },
  horizontaline: {
    width: 340,
    opacity: 0.25,
    height: 1,
    backgroundColor: '#500061',
  },
  form: {
    marginTop: 9,
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: '#646464',
  },
  input: {
    height: 50,
    width: Dimensions.get('window').width / 1.09,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#EEEEEE',
    fontSize: 18,
    borderRadius: 5,
    paddingLeft: 19,
  },
  otptext: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#646464',
    marginTop: 18,
  },
  profileButton: {
    marginTop: 90,
    backgroundColor: '#500061',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.09,
    alignSelf: 'center',
    height: Dimensions.get('window').height / 17,
    borderRadius: 5,
    borderBottomEndRadius: 5,
    bottom: 17,
  },
  profileText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
})

export default HomeScreen
