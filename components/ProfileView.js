import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Logo from '../assets/Logo2.png'
import profile from '../assets/Ellipse.png'
import arrow from '../assets/DownArrow.png'
import IncomeBox from './IncomeBox'
import { useDispatch, useSelector } from 'react-redux'
const ProfileView = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state)
  console.log(items, 'jwrwyriwq2rh')
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#6C0070', '#AD54AF', '#AB0CB040']}
        style={styles.linearInput}
      >
        <View style={styles.navbar}>
          <View>
            <Image source={Logo} style={{ height: 42, width: 42 }} />
          </View>
          <View style={styles.rightprofile}>
            <View>
              <Image source={profile} />
            </View>
            <View>
              <Text style={styles.nametext}>{items.name}</Text>
            </View>
            <View>
              <Image source={arrow} />
            </View>
          </View>
        </View>
        <View style={styles.income}>
          <IncomeBox />
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  linearInput: {
    height: Dimensions.get('window').height / 1.59,
    width: '100%',
  },
  navbar: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightprofile: {
    flexDirection: 'row',
    backgroundColor: '#43075495',
    width: 101,
    height: 37,
    borderRadius: 32,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  nametext: {
    color: 'white',
    fontSize: 16,
  },
  income: {
    marginTop: 30,
  },
})

export default ProfileView
