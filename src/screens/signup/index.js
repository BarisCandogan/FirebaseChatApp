import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../../config/firebase'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onHandleSignup = () => {
    if (email !== '' && password !== '') {
      createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then(() => console.log('Signup success'))
        .catch((err) => Alert.alert('Signup Error', err.message))
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Email'
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor={'gray'}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'gray'}
        placeholder='Enter Password'
        keyboardType='default'
        secureTextEntry={true}
        autoCapitalize='none'
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signup
