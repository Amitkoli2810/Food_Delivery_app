import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBxJfT1oxM58mD0--kCqc_XRLUN1J6qON0",
    authDomain: "restaurantapp-497b8.firebaseapp.com",
    databaseURL: "https://restaurantapp-497b8-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-497b8",
    storageBucket: "restaurantapp-497b8.appspot.com",
    messagingSenderId: "202257853434",
    appId: "1:202257853434:web:31ac05fa2186f5ed9f5243"
  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)

  const storage = getStorage(app)

  export {app,firestore,storage}