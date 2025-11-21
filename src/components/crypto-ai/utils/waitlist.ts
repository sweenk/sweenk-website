import { firebasePromise } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const withTimeout = <T>(promise: Promise<T>, ms: number, message: string): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(message)), ms)
    ),
  ]);
};

export const saveWaitlistEmail = async (rawEmail: string) => {
  const trimmedEmail = rawEmail.trim().toLowerCase();

  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    throw new Error("Please enter a valid email address.");
  }

  console.log("[waitlist] Starting save for:", trimmedEmail);

  console.log("[waitlist] Awaiting firebasePromise...");
  const { firestore } = await firebasePromise;
  console.log("[waitlist] Firebase initialized, firestore:", firestore);

  const collectionRef = collection(firestore, "crypto-waitlist");
  console.log("[waitlist] Collection ref created:", collectionRef.path);

  console.log("[waitlist] Calling addDoc...");
  try {
    const docRef = await withTimeout(
      addDoc(collectionRef, {
        email: trimmedEmail,
        createdAt: serverTimestamp(),
        surveySubmitted: false,
      }),
      15000,
      "Firestore addDoc timed out after 15 seconds. Please check if Firestore is enabled in your Firebase project."
    );

    console.log("[waitlist] Saved successfully, docId:", docRef.id);

    return {
      email: trimmedEmail,
      id: docRef.id,
    };
  } catch (error: any) {
    console.error("[waitlist] addDoc error:", error);
    console.error("[waitlist] Error code:", error?.code);
    console.error("[waitlist] Error message:", error?.message);
    throw error;
  }
};
