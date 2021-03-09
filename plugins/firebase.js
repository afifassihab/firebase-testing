import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

if (!firebase.apps.length) {
	const config = {
		apiKey: "AIzaSyC616ZFHatJT4xHudJPODSTVLVCDZbXEZc",
		authDomain: "verdant-victory-233115.firebaseapp.com",
		databaseURL: "https://verdant-victory-233115.firebaseio.com",
		projectId: "verdant-victory-233115",
		storageBucket: "verdant-victory-233115.appspot.com",
		messagingSenderId: "132581880671"
	};

	firebase.initializeApp(config);

	firebase.firestore().settings({ timestampsInSnapshots: true });
}

const provider = new firebase.auth.GoogleAuthProvider();
const fireDb = firebase.firestore();
const fireAuth = firebase.auth();

export { fireDb, fireAuth, provider, firebase };
