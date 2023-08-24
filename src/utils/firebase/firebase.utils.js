// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//myCode bellow

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { getFirestore, doc, getDoc, getDocs, setDoc, collection, writeBatch, query } from "firebase/firestore";

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
//myCode Bellow
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const batch = writeBatch(db);
	const collectionRef = collection(db, collectionKey);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log("done");
};

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, "categories");
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data();
		acc[title.toLowerCase()] = items;
		return acc;
	}, {});

	return categoryMap;
};

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
	if (!userAuth) return;

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
				...additionalInformation,
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}

	return userDocRef;

	// if user data exist
	// create / set the document with the data from userAuth in my collection
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

//myCode Up
