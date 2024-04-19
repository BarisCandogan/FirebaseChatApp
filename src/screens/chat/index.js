import { Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'
import { FIREBASE_AUTH, database } from '../../../config/firebase'

const Chat = () => {
  const [messages, setMessages] = useState([])

  useLayoutEffect(() => {
    const collectionRef = collection(database, 'chats')
    const q = query(collectionRef, orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log('dsa')
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      )
    })
    return () => unsubscribe()
  }, [])

  const onSend = (messages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    )
    const { _id, createdAt, text, user } = messages[0]
    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user,
    })
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: FIREBASE_AUTH?.currentUser?.email,
        avatar: 'https://i.pravatar.cc/300',
      }}
    />
  )
}

export default Chat
