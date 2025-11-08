import { Button } from "@/components/button/button";
import { Card } from "@/components/card/card";
import { CryptoSurvey } from "@/components/cryptoSurvey/cryptoSurvey";
import { CryptoWaitlist } from "@/components/cryptoWaitlist/cryptoWaitlist";
import { Header } from "@/components/header/header";
import { Input } from "@/components/input/input";
import { StepBadge } from "@/components/stepBadge/stepBadge";
import { useState } from "react";

export default function CryptoAIPage() {
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");

  const handleWaitlistSuccess = (email: string) => {
    setWaitlistEmail(email);
    setWaitlistSuccess(true);
  };

  const cryptoMenuItems = [
    { href: "/", label: "Home" },
    { href: "/crypto-ai", label: "Crypto AI" },
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
  ];

  const cryptoFeatures = [
    {
      icon: "/images/features/crypto-icon-01.svg",
      title: "Smart Summaries",
      description:
        "Get ultra-short summaries of your Twitter lists and favorite YouTube channels. What used to take 2 hours now takes 2 minutes.",
    },
    {
      icon: "/images/features/crypto-icon-02.svg",
      title: "Social Pulse Scanner",
      description:
        "See what Twitter, Reddit, and YouTube think about any coin—aggregated into one bullish/bearish score. No more scrolling for hours.",
    },
    {
      icon: "/images/features/crypto-icon-03.svg",
      title: "Smart Watchlist",
      description:
        "Track coins you own. Get instant notifications only when news affects YOUR holdings. Zero noise, pure signal.",
    },
    {
      icon: "/images/features/crypto-icon-04.svg",
      title: "Event Calendar",
      description:
        "Token unlocks, Fed meetings, protocol upgrades—with countdown timers and historical price impact predictions.",
    },
    {
      icon: "/images/features/crypto-icon-05.svg",
      title: "Fake News Detector",
      description:
        "AI verifies sources and flags pump-and-dump schemes, fake partnerships, and known scammer wallets before you fall for them.",
    },
    {
      icon: "/images/features/crypto-icon-06.svg",
      title: "AI Trading Assistant",
      description:
        'Ask "Why is ETH pumping?" or "Should I worry about this news?" Get instant answers with sources—like a Bloomberg terminal in your pocket.',
    },
  ];

  return (
    <main>
      <Header
        menuItems={cryptoMenuItems}
        transparentOnScroll={true}
        alwaysTransparent={false}
      />
      {/* HERO SECTION */}
      <section className="relative overflow-hidden z-10 pt-32 sm:pt-40 md:pt-45 lg:pt-50 xl:pt-55 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 xl:px-0 relative z-1">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 sm:mb-8 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">
              Your <span className="text-white">AI Crypto Copilot</span> for
              smarter, faster moves
            </h1>
            <p className="mb-8 sm:mb-10 text-xl md:text-2xl font-medium text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Personalized signals aligned to your playbook — entries, exits,
              and risk in one glance.
            </p>

            {/* Hero Email Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.currentTarget.email as HTMLInputElement).value;
                if (email) {
                  document
                    .getElementById("waitlist-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                  const waitlistEmailInput = document.getElementById(
                    "waitlist-email"
                  ) as HTMLInputElement;
                  if (waitlistEmailInput) {
                    waitlistEmailInput.value = email;
                    waitlistEmailInput.focus();
                  }
                }
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8"
            >
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                variant="secondary"
                className="flex-1 text-lg"
              />
              <Button type="submit" variant="secondary">
                Get Early Access
              </Button>
            </form>

            <p className="text-sm text-gray-900">
              Join the waitlist • Get early access
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Join{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                253 traders
              </span>{" "}
              already testing
            </p>
            <p className="text-lg text-gray-600">
              Only{" "}
              <span className="font-bold text-gray-900">47 spots left</span> out
              of 300
            </p>
          </div>
        </div>
      </section>

      {/* THE SOLUTION (Features as Benefits) */}
      <section className="py-20 lg:py-24 bg-gray-50 relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What you get
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Actionable intelligence, not noise.
            </p>
          </div>

          {/* Features Grid - Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cryptoFeatures.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (Simple 3-step) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to never miss another trade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200"></div>

            <div className="text-center relative">
              <StepBadge number={1} variant="primary" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                AI scans everything
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Monitors millions of sources 24/7: Twitter, Reddit, news sites,
                Discord channels, and more
              </p>
            </div>

            <div className="text-center relative">
              <StepBadge number={2} variant="secondary" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Analyzes market impact
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                AI determines what's signal vs noise and predicts price impact
                using advanced models
              </p>
            </div>

            <div className="text-center relative">
              <StepBadge number={3} variant="tertiary" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                You get instant alert
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Instant notification with plain English summary, trading impact,
                and suggested actions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY ADOPTER HOOK */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Early Adopter Perks
            </h2>
            <p className="text-xl text-gray-600">
              Complete the 10-minute survey and unlock exclusive rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl px-6 py-5 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-tertiary text-center">
                <span className="text-primary">30%</span> Lifetime Discount
              </h3>
              <p className="text-xs md:text-sm text-gray-600 text-center">
                Complete the survey, lock in forever
              </p>
            </div>
            <div className="bg-white rounded-xl px-6 py-5 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-tertiary text-center">
                <span className="text-primary">$100</span> Launch Credit
              </h3>
              <p className="text-xs md:text-sm text-gray-600 text-center">
                Just for joining the waitlist
              </p>
            </div>
            <div className="bg-white rounded-xl px-6 py-5 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-tertiary text-center">
                Shape the Product
              </h3>
              <p className="text-xs md:text-sm text-gray-600 text-center">
                Your feedback builds features
              </p>
            </div>
            <div className="bg-white rounded-xl px-6 py-5 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-tertiary text-center">
                Direct Team Access
              </h3>
              <p className="text-xs md:text-sm text-gray-600 text-center">
                Get answers in hours, not days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST FORM */}
      <div id="waitlist-form">
        <CryptoWaitlist onSuccess={handleWaitlistSuccess} />
      </div>

      {/* SURVEY FORM (Appears after waitlist success) */}
      {waitlistSuccess && <CryptoSurvey email={waitlistEmail} />}
    </main>
  );
}
