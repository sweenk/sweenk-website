import React, { FC, useState } from "react";
import { httpsCallable } from "firebase/functions";
import { firebasePromise } from "../../lib/firebase";

const navLinks = {
  // products: [
  //   { text: "Features", href: "/features" },
  //   { text: "Integrations", href: "/integrations" },
  //   { text: "Pricing", href: "/pricing" },
  //   { text: "Changelog", href: "/changelog" },
  //   { text: "Roadmap", href: "/roadmap" },
  // ],
  policies: [
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Terms And Conditions", href: "/terms-and-conditions" },
    { text: "Support", href: "/support" },
    // { text: "Community", href: "/community" },
  ],
  more: [
    { text: "Contact Us", href: "/support" },
    { text: "Join community", href: "/community" },
    { text: "Pricing", href: "/#pricing" },
    { text: "For Enterprise", href: "/enterprise" },
    { text: "Github", href: "https://github.com/sweenk", external: true },
  ],
};

const renderNavLinks = (links: { text: string; href: string; external?: boolean }[]) => {
  return links.map((link, index) => (
    <li key={index}>
      <a
        href={link.href}
        target={link.external ? "_blank" : undefined}
        rel={link.external ? "noopener noreferrer" : undefined}
        className="font-medium ease-in duration-300 text-white/80 hover:text-white"
      >
        {link.text}
      </a>
    </li>
  ));
};

const NewsletterForm: FC = () => {
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
        text: "Please enter a valid email address",
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
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        <div className="w-full sm:flex-1 md:w-[280px] md:flex-none">
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            disabled={isLoading}
            className="rounded-lg border-2 border-white bg-white/10 text-white placeholder-white/60 focus:border-white w-full h-full py-3 px-4 outline-none disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-lg bg-white text-black text-sm font-semibold py-3 px-6 w-full sm:w-auto hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {message && (
        <div className="mt-2">
          <span
            className={`inline-block text-sm px-3 py-1 rounded-lg ${
              message.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-400 text-white"
            }`}
          >
            {message.text}
          </span>
        </div>
      )}
    </form>
  );
};

export const Footer: FC = () => {
  return (
    <footer className="relative z-10 pb-8 lg:pb-12 xl:pb-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0 relative pt-17.5">
        <div className="w-full h-[1px] footer-divider-gradient absolute top-0 left-0"></div>

        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-[400px]">
                <h3 className="font-semibold text-xl text-gray-900 mb-2">
                  Stay Connected
                </h3>
                <p className="text-gray-700">Early updates and exclusive content</p>
              </div>
              <div className="flex-1 flex justify-start md:justify-end">
                <div className="w-full md:w-auto">
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 mb-12">
          {/* Logo and Feedback Column */}
          <div className="flex-1 min-w-[300px]">
            <a className="inline-block mb-4" href="/">
              <img src="/images/logo/sweenk_logo_horizontal_monochrome.svg" alt="Logo" className="h-8" />
            </a>
            <p className="text-white/80 text-sm max-w-[280px]">
              We'd love if you chat with Sweenk for feedback, but hey,{" "}
              <a href="/support" className="text-white/80 hover:text-white underline">
                our support form
              </a>{" "}
              works too!
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            {/* Policies Column */}
            <div>
              <h5 className="font-semibold text-white mb-3 sm:mb-5">Policies</h5>
              <ul className="flex flex-col gap-3.5">
                {renderNavLinks(navLinks.policies)}
              </ul>
            </div>

            {/* More Column */}
            <div>
              <h5 className="font-semibold text-white mb-3 sm:mb-5">More</h5>
              <ul className="flex flex-col gap-3.5">
                {renderNavLinks(navLinks.more)}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8">
          <p className="font-medium text-white/70 text-center">
            © 2025 Sweenk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
