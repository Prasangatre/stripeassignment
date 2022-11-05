import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import image from '../assets/Image.png'
import setting from '../assets/setting.png'
const Footer = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.images}>
          <Image source={image} />
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>Parental control</Text>
          <View>
            <Image source={setting} />
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  images: {},
  text: {
    color: '#8D8D8D',
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#E5E5E520',
    width: 140,
    height: 40,
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    right: 40,
    borderWidth: 2,
    borderColor: '#E5E5E5',
  },
})

export default Footer
