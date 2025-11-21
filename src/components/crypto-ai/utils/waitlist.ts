import { firebasePromise } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const saveWaitlistEmail = async (rawEmail: string) => {
  const trimmedEmail = rawEmail.trim().toLowerCase();

  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    throw new Error("Please enter a valid email address.");
  }

  console.log("[waitlist] Starting save for:", trimmedEmail);

  console.log("[waitlist] Awaiting firebasePromise...");
  const { firestore } = await firebasePromise;
  console.log("[waitlist] Firebase initialized, saving to Firestore...");

  const docRef = await addDoc(collection(firestore, "crypto-waitlist"), {
    email: trimmedEmail,
    createdAt: serverTimestamp(),
    surveySubmitted: false,
  });

  console.log("[waitlist] Saved successfully, docId:", docRef.id);

  return {
    email: trimmedEmail,
    id: docRef.id,
  };
};
