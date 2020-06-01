import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


let _messagesDb = null;

class Firebase {
  constructor() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAMnfrJs1bFQqOArOzpWrewmbfn8V0nFkc',
        authDomain: 'tripineree.firebaseapp.com',
        databaseURL: 'https://tripineree.firebaseio.com',
        projectId: 'tripineree',
        storageBucket: 'tripineree.appspot.com',
        messagingSenderId: '148872339734',
    });

    // initialize Firestore through Firebase
    _messagesDb = firebase.firestore();

    // disable deprecated features
    _messagesDb.settings({
      timestampsInSnapshots: true
    });
  }

  async addMessage(message) {
    const createdAt = new Date();
    const author = firebase.auth().currentUser.displayName;
    return await _messagesDb.collection('messages').add({
      author,
      createdAt,
      message,
    });
  }

  getCurrentUser() {
    return firebase.auth().currentUser;
  }

  

  setAuthStateListener(listener) {
    firebase.auth().onAuthStateChanged(listener);
  }

  setMessagesListener(listener) {
    _messagesDb.collection('messages').orderBy('createdAt', 'desc').limit(10).onSnapshot(listener);
  }

  async setToken(token) {
    await firebase.auth().signInWithCustomToken(token);
  }
}

const firebaseClient = new Firebase();

export default Firebase;