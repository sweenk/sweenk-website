import { httpsCallable } from "firebase/functions";
import React, { FC, useState } from "react";
import { firebasePromise } from "../../lib/firebase";

export const Subscribe: FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const { functions } = await firebasePromise;
      const subscribeToNewsletter = httpsCallable(
        functions,
        "subscribe_to_newsletter"
      );

      await subscribeToNewsletter({ email: trimmedEmail.toLowerCase() });

      setMessage({
        type: "success",
        text: "Successfully subscribed! Thank you for joining us.",
      });
      setEmail("");
    } catch (error: any) {
      console.error("Subscription Error:", error);

      if (error.code === "functions/already-exists") {
        setMessage({
          type: "error",
          text: "This email is already subscribed to our newsletter.",
        });
      } else if (error.code === "functions/invalid-argument") {
        const errorDetails = error.details;
        if (errorDetails?.code === "MISSING_EMAIL") {
          setMessage({
            type: "error",
            text: "Email address is required.",
          });
        } else if (errorDetails?.code === "INVALID_EMAIL_FORMAT") {
          setMessage({
            type: "error",
            text: "Please enter a valid email address.",
          });
        } else {
          setMessage({
            type: "error",
            text: "Please enter a valid email address.",
          });
        }
      } else if (error.code === "functions/internal") {
        setMessage({
          type: "error",
          text: "Unable to subscribe at the moment. Please try again later.",
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
    <section className="pt-17.5 sm:pt-22.5 xl:pt-27.5 pb-11 bg-gray-50 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-6 sm:gap-10">
          <div className="w-full sm:max-w-[352px]">
            <h3 className="font-semibold text-heading-5 text-gray-900 mb-2">
              Stay Connected
            </h3>
            <p className="font-medium">Early updates and exclusive content</p>
          </div>
          <div className="w-full sm:max-w-[534px]">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="w-full sm:flex-1">
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
                  className="button-border-gradient relative rounded-lg text-white text-sm flex items-center justify-center gap-1.5 py-3.5 px-7 w-full sm:w-auto sm:flex-shrink-0 shadow-button hover:button-gradient-hover hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
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
