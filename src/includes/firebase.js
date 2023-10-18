import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDpYo8W-_7kIKGssdQNsLzSZIJDoYglWIg',
  authDomain: 'music-25d91.firebaseapp.com',
  projectId: 'music-25d91',
  storageBucket: 'music-25d91.appspot.com',
  messagingSenderId: '571748658020',
  appId: '1:571748658020:web:5b10ca0ef00cc934062871'
}

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistance error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, storage, songsCollection, commentsCollection }
