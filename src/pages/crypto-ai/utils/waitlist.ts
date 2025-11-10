import { firebasePromise } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const saveWaitlistEmail = async (rawEmail: string) => {
  const trimmedEmail = rawEmail.trim().toLowerCase();

  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    throw new Error("Please enter a valid email address.");
  }

  const { firestore } = await firebasePromise;
  const docRef = await addDoc(collection(firestore, "crypto-waitlist"), {
    email: trimmedEmail,
    createdAt: serverTimestamp(),
  });

  if (process.env.NODE_ENV === "development") {
    console.info(
      "[crypto-waitlist] saved waitlist entry",
      docRef.id,
      trimmedEmail
    );
  }

  return trimmedEmail;
};
