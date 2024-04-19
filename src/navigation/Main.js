import React, { createContext, useContext, useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from '../screens/signup'
import Login from '../screens/login'

import Home from '../screens/home'
import Chat from '../screens/chat'
import { onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH, auth } from '../../config/firebase'
import { ActivityIndicator, View } from 'react-native'

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const AuthenticatedUserContext = createContext({})

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  )
}

const MainNavigation = () => {
  const auth = FIREBASE_AUTH
  const Stack = createNativeStackNavigator()
  const AuthenticatedUserContext = createContext({})
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user), setLoading(false), console.log(user, 'user')
    })
  }, [user])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <AuthenticatedUserProvider>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Chat' component={Chat} />
          </>
        ) : (
          <>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </AuthenticatedUserProvider>
  )
}

export default MainNavigation
