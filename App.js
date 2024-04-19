import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './src/navigation/Main'

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
