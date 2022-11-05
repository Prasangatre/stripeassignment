import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileView from '../components/ProfileView'
import Transaction from '../components/Transaction'
import Saving from '../components/Saving'
import LotteryBox from '../components/LotteryBox'
import Footer from '../components/Footer'

const DashBoardScreen = () => {
  return (
    <ScrollView>
      <View style={{ flexGrow: 1 }}>
        <ProfileView />
        <Transaction />
        <Saving />
        <LotteryBox />
        <Footer />
      </View>
    </ScrollView>
  )
}

export default DashBoardScreen
