import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const subscribeToNewsletter = functions.https.onCall(async (data, context) => {
  const email = data.email;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "The function must be called with a valid email address."
    );
  }

  try {
    await admin.firestore().collection("subscribers").add({
      email: email,
      subscribedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error saving subscriber to Firestore:", error);
    throw new functions.https.HttpsError(
      "internal",
      "An error occurred while subscribing. Please try again later."
    );
  }
});
