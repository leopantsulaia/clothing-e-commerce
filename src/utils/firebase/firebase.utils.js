// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//myCode bellow
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
//myCode Up
const firebaseConfig = {
	apiKey: "AIzaSyCXpr1e6Z8lie99AD6omq9Rna9oFWc7-4g",
	authDomain: "clothing-e-commerce-f5210.firebaseapp.com",
	projectId: "clothing-e-commerce-f5210",
	storageBucket: "clothing-e-commerce-f5210.appspot.com",
	messagingSenderId: "309982821417",
	appId: "1:309982821417:web:b8de38c65b68fb37993038",
	measurementId: "G-DEXKXLYRF9",
};

// Initialize Firebase
//firebaseApp is my name, app was default
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

//myCode Bellow
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);

	// console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	// console.log(userSnapshot);
	// console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		// this says that the if user data does not exist its true 
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}
	return userDocRef;

	// if user data exist
	// create / set the document with the data from userAuth in my collection
};

//myCode Up
