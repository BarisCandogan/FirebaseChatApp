import { View, Image, TouchableOpacity, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'
import { FIREBASE_AUTH } from '../../../config/firebase'

const Home = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Chat App !</Text>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <View style={styles.position}>
          <Text
            style={{ color: 'red' }}
            onPress={() => FIREBASE_AUTH.signOut()}
          >
            LogOut
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Chat')}
          >
            <Image
              style={styles.image}
              source={require('../../../assets/chatIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Home
