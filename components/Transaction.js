import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import burger from '../assets/burger.png'
import book from '../assets/book.png'
import money from '../assets/money.png'
const Transaction = () => {
  const transactionData = [
    {
      icon: burger,
      description: 'Food & Drink',
      time: '02:30pm',
      money: '-₹50',
      id: 1,
      type: 'minus',
    },

    {
      icon: book,
      description: 'Store sale',
      time: 'Jun-04:30pm',
      money: '-₹140',
      id: 2,
      type: 'minus',
    },

    {
      icon: money,
      description: 'Money credited',
      time: 'Jun-12:30pm',
      money: '+₹4500',
      id: 3,
      type: 'add',
    },
  ]

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.recentText}>Recent transactions</Text>
      </View>
      <View style={styles.detail}>
        {transactionData?.map((data) => (
          <View key={data.id} style={{ marginTop: 2 }}>
            <View style={styles.viewDetail}>
              <View style={styles.left}>
                <View style={styles.icon}>
                  <Image source={data.icon} />
                </View>
                <View>
                  <View style={styles.description}>
                    <Text style={styles.descriptionText}>
                      {data.description}
                    </Text>
                    <Text style={styles.time}>{data.time}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.right}>
                <View>
                  <Text
                    style={
                      data.type == 'minus'
                        ? styles.moneyMinusText
                        : styles.moneyAddText
                    }
                  >
                    {data.money}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.line} />
          </View>
        ))}
      </View>
      <View style={styles.allTransaction}>
        <Text style={styles.transactionText}>All transactions </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.09,
    flex: 1,
    backgroundColor: '#CCAACF20',
    marginTop: 30,
    alignSelf: 'center',
    borderRadius: 10,
  },
  recentText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#600063',
    padding: 20,
  },
  detail: {
    marginTop: 21,
  },
  viewDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  left: {
    flexDirection: 'row',
  },
  icon: {},
  description: {
    marginLeft: 10,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: '600',
  },
  time: {
    fontSize: 16,
    color: '#00000040',
  },
  right: {},
  moneyMinusText: { fontSize: 18, fontWeight: '600', color: '#000000' },
  moneyAddText: { fontSize: 18, fontWeight: '600', color: 'green' },
  line: {
    width: Dimensions.get('window').width / 1.09,
    backgroundColor: '#00000030',
    height: 0.5,
    marginTop: 10,
  },
  allTransaction: {
    backgroundColor: '#EAE1F2',
  },
  transactionText: {
    padding: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#A655A8',
  },
})
export default Transaction
