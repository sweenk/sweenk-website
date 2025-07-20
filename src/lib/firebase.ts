import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"; // <-- add this
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const firebaseConfig = {
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "sweenk-production-cloud",
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
    "sweenk-production-cloud.firebaseapp.com",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
    "sweenk-production-cloud.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app, "us-west1");

if (typeof window !== "undefined") {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(
      "6LdyiokrAAAAAAgeau1_Hm1YW1bact4CAS3TV_Yx"
    ),
    isTokenAutoRefreshEnabled: true,
  });
}
// Connect to emulator in development
if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
  try {
    connectFunctionsEmulator(functions, "localhost", 5001);
  } catch (error) {
    // Emulator already connected or not available
    console.log("Functions emulator connection skipped");
  }
}

export { functions };
