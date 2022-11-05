import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native'
import React from 'react'
import eye from '../assets/eye.png'
import tiles from '../assets/tiles.png'
import plus from '../assets/plus.png'
import arrow from '../assets/arrow.png'
import more from '../assets/more.png'
const IncomeBox = () => {
  return (
    <View>
      <View style={styles.container}>
        <ImageBackground source={tiles}>
          <View style={styles.ammount}>
            <View>
              <Text style={styles.balanceText}>Balance</Text>
            </View>
            <View style={styles.imageView}>
              <View>
                <Image source={eye} />
              </View>
            </View>
          </View>
          <View style={styles.ammoutView}>
            <Text style={styles.ammountText}>₹12,000</Text>
          </View>
        </ImageBackground>
        <View style={styles.saving}>
          <View>
            <Text style={styles.savingText}>Savings</Text>
          </View>
          <View style={styles.savedAmmount}>
            <Text style={styles.savedAmmountText}>₹36,800</Text>

            <View style={styles.saveButton}>
              <Text style={styles.saveText}>Save More</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.navigation}>
        <View style={styles.scanCode}>
          <View>
            <Text style={styles.scanText}>Scan Code</Text>
          </View>
          <View style={styles.plusImage}>
            <Image source={plus} />
          </View>
        </View>
        <View style={styles.arrow}>
          <Image source={arrow} />
        </View>
        <View style={styles.more}>
          <Image source={more} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.09,
    height: Dimensions.get('window').height / 3.09,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
  },
  ammount: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 19,
    paddingRight: 19,
  },
  ammoutView: {
    marginTop: 8,
    paddingLeft: 19,
  },
  balanceText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#9B9B9B',
  },
  ammountText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#252525',
  },
  imageView: {
    height: 43,
    width: 43,
    backgroundColor: 'rgba(155, 151, 182, 0.5)',
    boxShadow: '4px -5px 5px 0px #00000040 inset',
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saving: {
    backgroundColor: '#940B9A20',
    // opacity: 0.47,
    flex: 1,
    justifyContent: 'space-around',
  },
  savingText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#681A60',
    paddingLeft: 19,
  },
  savedAmmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 19,
    paddingRight: 19,
  },
  savedAmmountText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#681A60',
    marginTop: 8,
  },
  saveButton: {
    height: 32,
    width: 98,
    borderRadius: 20,
    backgroundColor: '#40014220',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#400142',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },
  scanCode: {
    height: 56,
    width: 195,
    backgroundColor: '#650F5C',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  scanText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  arrow: {
    height: 56,
    width: 73,
    backgroundColor: '#650F5C30',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  more: {
    height: 56,
    width: 73,
    backgroundColor: '#650F5C30',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusImage: {
    width: 35,
    height: 35,
    borderRadius: 16,
    backgroundColor: '#FFFFFF20',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default IncomeBox
