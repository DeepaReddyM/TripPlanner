import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
let _messagesDb=null;
const config = {
  apiKey: 'AIzaSyAMnfrJs1bFQqOArOzpWrewmbfn8V0nFkc',
  authDomain: 'tripineree.firebaseapp.com',
  databaseURL: 'https://tripineree.firebaseio.com',
  projectId: 'tripineree',
  storageBucket: 'tripineree.appspot.com',
  messagingSenderId: '148872339734',
};

    firebase.initializeApp(config);
    firebase.firestore().settings({timestampsInSnapshots:true})
   export const auth = firebase.auth();
    const db = firebase.firestore();
    export const provider = new firebase.auth.GoogleAuthProvider();
     const tripById = (id) => db.collection('trips').doc(id);
     _messagesDb = firebase.firestore();
     

export default firebase;

