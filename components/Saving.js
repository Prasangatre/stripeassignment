import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Saving = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state)
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.nameText}>{items.name}'s Savings</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            Saved a total of <Text style={styles.black}>₹6,480</Text> this month
            and is close to achieving one goal
          </Text>
        </View>

        <View style={styles.goalView}>
          <View>
            <View style={styles.verticalLine} />
          </View>
          <View style={{ paddingLeft: 10 }}>
            <Text style={styles.textGoal}> Playstation 5 </Text>

            <Text style={styles.black}>
              ₹36,480 saved
              <Text style={styles.descriptionText}> of ₹40,000 goal</Text>
            </Text>
          </View>
        </View>

        <View style={styles.add}>
          <Text style={styles.addText}>Add and view goals</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 31,
    backgroundColor: '#F5F7FB',
    flex: 1,
    width: Dimensions.get('window').width / 1.09,
    alignSelf: 'center',
    border: 10,
  },
  nameText: {
    fontSize: 18,
    padding: 20,
    fontWeight: '600',
    color: '#112854',
  },
  description: {},
  descriptionText: {
    fontSize: 18,
    padding: 20,
    fontWeight: '600',
    color: '#5682AB',
  },
  black: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  goalView: {
    width: Dimensions.get('window').width / 1.29,
    height: 110,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  verticalLine: {
    flex: 1,
    width: 0.5,
    backgroundColor: '#000000',
    marginLeft: 5,
  },
  textGoal: {
    fontSize: 18,
    fontWeight: '600',
    color: '#31446B',
  },
  add: {
    backgroundColor: '#EEF1F3',
    marginTop: 40,
  },
  addText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#5770A4',
    padding: 20,
    borderRadius: 10,
  },
})

export default Saving
