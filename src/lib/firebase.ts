import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import {
  connectFirestoreEmulator,
  Firestore,
  getFirestore,
} from "firebase/firestore";
import {
  connectFunctionsEmulator,
  Functions,
  getFunctions,
} from "firebase/functions";

let app: FirebaseApp;
let functions: Functions;
let firestore: Firestore;

const getFirebaseConfig = async () => {
  if (typeof window !== "undefined" && window.fetch) {
    try {
      const response = await fetch("/__/firebase/init.json");
      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      console.error(
        "Could not fetch Firebase config from hosting, falling back to environment variables.",
        e
      );
    }
  }

  return {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
};

const initializeFirebase = async () => {
  const firebaseConfig = await getFirebaseConfig();

  // Initialize the app (or get the existing one)
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  functions = getFunctions(app, "us-west1");
  firestore = getFirestore(app);

  const isClient = typeof window !== "undefined";
  const isDevelopment = process.env.NODE_ENV === "development";
  const shouldInitAppCheck =
    process.env.NEXT_PUBLIC_ENABLE_APPCHECK === "true";

  if (isClient) {
    if (shouldInitAppCheck) {
      try {
        initializeAppCheck(app, {
          provider: new ReCaptchaV3Provider(
            "6LdyiokrAAAAAAgeau1_Hm1YW1bact4CAS3TV_Yx"
          ),
          isTokenAutoRefreshEnabled: true,
        });
      } catch (error) {
        console.warn("Firebase App Check initialization skipped:", error);
      }
    }

    if (isDevelopment) {
      try {
        connectFunctionsEmulator(functions, "localhost", 5001);
      } catch (error) {
        console.log("Functions emulator connection skipped: ", error);
      }

      try {
        connectFirestoreEmulator(firestore, "localhost", 8080);
      } catch (error) {
        console.log("Firestore emulator connection skipped: ", error);
      }
    }
  }

  return { app, functions, firestore };
};

// To use in your components, you'll need to handle the promise.
// We export the promise itself to be awaited in other modules.
const firebasePromise = initializeFirebase();

export { firebasePromise, firestore, functions };
