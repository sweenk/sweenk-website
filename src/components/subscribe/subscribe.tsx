import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import React, { FC, useState } from "react";
import { db, functions } from "../../lib/firebase";

export const Subscribe: FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const subscribeToNewsletter = httpsCallable(
        functions,
        "subscribe_to_newsletter"
      );

      await subscribeToNewsletter({ email });

      const dupSnap = await getDocs(
        query(
          collection(db, "subscribers"),
          where("email", "==", email),
          limit(1)
        )
      );
      if (!dupSnap.empty) {
        setMessage({ type: "error", text: "Already subscribed" });
        return;
      }

      setMessage({
        type: "success",
        text: "Successfully subscribed! Thank you for joining us.",
      });
      setEmail("");
    } catch (error: any) {
      console.error("Subscription Error:", error);
      // Handle Firebase Functions specific errors
      if (error.code === "functions/already-exists") {
        setMessage({
          type: "error",
          text: "This email is already subscribed to our newsletter.",
        });
      } else if (error.code === "functions/invalid-argument") {
        setMessage({
          type: "error",
          text: "Please enter a valid email address.",
        });
      } else {
        setMessage({
          type: "error",
          text: "Unable to subscribe at the moment. Please try again later.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pt-17.5 sm:pt-22.5 xl:pt-27.5 pb-11">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div className="max-w-[352px] w-full">
            <h3 className="font-semibold text-heading-5 text-white mb-2">
              Stay Connected
            </h3>
            <p className="font-medium">Early updates and exclusive content</p>
          </div>
          <div className="max-w-[534px] w-full">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center gap-4">
                <div className="max-w-[395px] w-full">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    disabled={isLoading}
                    className="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-3.5 px-7 shadow-button hover:button-gradient-hover hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              {message && (
                <div
                  className={`mt-4 text-sm ${
                    message.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
