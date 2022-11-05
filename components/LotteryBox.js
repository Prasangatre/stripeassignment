import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LotteryBox = () => {
  const [number, SetNumber] = useState([])
  useEffect(() => {
    const getData = async () => {
      const URL =
        'https://raw.githubusercontent.com/Streak-Tech/assigment/main/data.json'
      await axios.get(URL).then((response) => SetNumber(response.data.numbers))
    }

    getData()
  }, [])
  console.log(number)
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.headingText}>Game of the day</Text>
        </View>
        <View style={styles.lotteryContainer}>
          {number?.map((data, id) => (
            <View key={id} style={styles.box}>
              <View style={styles.linear}>
                <Text style={styles.number}>{data}</Text>
              </View>
            </View>
          ))}
        </View>
        <View>
          <Text style={styles.prizeText}>Win prizes worth ₹4000 or more. </Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.textButton}>Try your luck</Text>
        </View>
        <View style={styles.games}>
          <Text style={styles.gameText}>View all games</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: Dimensions.get('window').width / 1.09,
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#FBF7F5',
  },
  headingText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#631E00',
    padding: 20,
  },
  lotteryContainer: {
    backgroundColor: '#631E0015',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#631E0055',
    width: Dimensions.get('window').width / 1.19,
    height: Dimensions.get('window').height / 5.5,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#DA9B7C60',
    height: 95,
    width: 67,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  linear: {
    height: 75,
    width: 62,
    backgroundColor: '#925A2540',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  number: {
    color: '#631E00',
    textAlign: 'center',
    fontSize: 42,
    fontWeight: '900',
  },
  prizeText: {
    color: '#AB604F',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 18,
  },
  button: {
    width: 160,
    height: 49,
    backgroundColor: '#AB604F',
    borderRadius: 28,
    alignSelf: 'center',
    marginTop: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#ffffff',

    fontSize: 18,
    fontWeight: '600',
  },
  games: {
    backgroundColor: '#F2E9E170',
    marginTop: 20,
    borderRadius: 10,
  },
  gameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#A3503E',
    padding: 20,
  },
})
export default LotteryBox
