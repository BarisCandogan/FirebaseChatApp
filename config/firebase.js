import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDGmowBzbGP1G5n6qk2xwy50f_mhxfydTA',
  authDomain: 'realtimechatapp',
  projectId: 'realtimechatapp-f5087',
  storageBucket: 'realtimechatapp-f5087.appspot.com',
  messagingSenderId: '24997609545',
  appId: '1:24997609545:web:361b3fd76b9b9fbb98bf98',
  // databaseURL: Constants.extra.databaseURL,
}

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const database = getFirestore(FIREBASE_APP)
