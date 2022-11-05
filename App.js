import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DashBoardScreen from './screens/DashBoardScreen'
import HomeScreen from './screens/HomeScreen'
import { Provider } from 'react-redux'
import { myStore } from './redux/store/store'
export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={myStore} >
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="DashBoard"
            options={{ headerShown: false }}
            component={DashBoardScreen}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
