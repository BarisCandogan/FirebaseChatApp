import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { FIREBASE_AUTH, auth } from '../../../config/firebase'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  const onHandleLogin = () => {
    if (email !== '' && password !== '') {
      signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then(() => console.log('Login success'))
        .catch((err) => Alert.alert('Login Error', err.message))
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Email'
        keyboardType='email-address'
        placeholderTextColor={'gray'}
        autoCapitalize='none'
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

      <TouchableOpacity onPress={onHandleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={[styles.buttonText, { color: 'grey' }]}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={[styles.buttonText, { color: 'orange' }]}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login
