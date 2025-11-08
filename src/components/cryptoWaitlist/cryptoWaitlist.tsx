import { Input } from "@/components/input/input";
import React, { FC, useState } from "react";

interface CryptoWaitlistProps {
  onSuccess: (email: string) => void;
}

export const CryptoWaitlist: FC<CryptoWaitlistProps> = ({ onSuccess }) => {
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
      // TODO: Replace with actual API endpoint
      const response = await fetch("/api/crypto-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail.toLowerCase(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add to waitlist");
      }

      setMessage({
        type: "success",
        text: "Congratulations, you've been added to the early waitlist! If you want to secure a $100 credit for the premium account at launch, please take 10 minutes to complete the survey below.",
      });

      // Call parent callback to show survey
      onSuccess(trimmedEmail.toLowerCase());

      // Clear form
      setEmail("");
    } catch (error: any) {
      console.error("Waitlist Error:", error);
      setMessage({
        type: "error",
        text: "Unable to add you to the waitlist at the moment. Please try again later.",
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

          {message && (
            <div
              className={`mt-6 p-4 rounded-xl text-center font-medium ${
                message.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {message.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
