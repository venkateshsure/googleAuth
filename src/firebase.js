import { initializeApp } from "firebase/app";


import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAX9BitymESKbLIbO4ZFN8OQ48L-C69UcY",
  authDomain: "auth-eed95.firebaseapp.com",
  projectId: "auth-eed95",
  storageBucket: "auth-eed95.appspot.com",
  messagingSenderId: "732741154455",
  appId: "1:732741154455:web:b469f3aa737ce22b791bd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export {auth}
