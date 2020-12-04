// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/firestore";
import config from "./config";

export default firebase.initializeApp(config).firestore();
