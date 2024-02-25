// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnviroments } from '../helpers/getEnviroments';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
	VITE_APIKEY,
	VITE_AUTHDOMAIN,
	VITE_PROJECTID,
	VITE_STORAGEBUCKET,
	VITE_MESSAGINGSENDERID,
	VITE_APPID,
} = getEnviroments();

// Your web app's Firebase configuration
//Dev/Prod
const firebaseConfig = {
	apiKey: 'AIzaSyD8YKhjyOrppfxIzVN7rmvQ6MJQHr9N0pM',
	authDomain: 'react-cursos-1fd8e.firebaseapp.com',
	projectId: 'react-cursos-1fd8e',
	storageBucket: 'react-cursos-1fd8e.appspot.com',
	messagingSenderId: '656372645624',
	appId: '1:656372645624:web:54fc390754e5941004450d',
};

// console.log(import.meta.env);
// console.log(process.env);
//Testing

// const firebaseConfig = {
// 	apiKey: 'AIzaSyDGhyYfHvfPECJW6uBGNcJGmJdNdL0n9w8',
// 	authDomain: 'testing-journal-4d5e5.firebaseapp.com',
// 	projectId: 'testing-journal-4d5e5',
// 	storageBucket: 'testing-journal-4d5e5.appspot.com',
// 	messagingSenderId: '880291186487',
// 	appId: '1:880291186487:web:c9d91a7e5a4a270c957cb2',
// };

// const firebaseConfig = {
// 	apiKey: VITE_APIKEY,
// 	authDomain: VITE_AUTHDOMAIN,
// 	projectId: VITE_PROJECTID,
// 	storageBucket: VITE_STORAGEBUCKET,
// 	messagingSenderId: VITE_MESSAGINGSENDERID,
// 	appId: VITE_APPID,
// };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
