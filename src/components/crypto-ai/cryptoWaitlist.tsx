import { Input } from "@/components/input/input";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";

import { saveWaitlistEmail } from "./utils/waitlist";

export const CryptoWaitlist: FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setMessage(null);

    try {
      const { email: savedEmail, id: waitlistId } = await saveWaitlistEmail(
        email
      );
      setEmail("");
      router.push({
        pathname: "/crypto-ai/apply",
        query: { email: savedEmail, waitlistId },
      });
    } catch (error: any) {
      console.error("Waitlist Error:", error);
      setMessage({
        type: "error",
        text:
          error?.message ||
          "Unable to add you to the waitlist at the moment. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Ready to Trade Smarter?
          </h2>
          <p className="text-lg text-gray-600">
            Join the waitlist and get exclusive early access
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              id="waitlist-email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={isLoading}
              variant="default"
              className="flex-1 text-lg disabled:opacity-50"
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg whitespace-nowrap"
            >
              {isLoading ? "Adding..." : "Get Early Access"}
            </button>
          </div>

          {message && message.type === "error" && (
            <div className="mt-6 p-4 rounded-xl text-center font-medium bg-red-50 text-red-700 border border-red-200">
              {message.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
