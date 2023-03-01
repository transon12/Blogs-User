import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`,
    measurementId: `${process.env.REACT_APP_MESUREMENT_ID}`,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const messaging = firebase.messaging();
export default firebase;

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
        });
    });

export const onGetToken = () =>
    new Promise((resolve) => {
        messaging
        .getToken({
            vapidKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
        })
        .then((currentToken) => {
            resolve(currentToken)
        })
    });
