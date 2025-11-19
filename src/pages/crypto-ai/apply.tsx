import { Header } from "@/components/header/header";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { CryptoSurvey } from "./cryptoSurvey";

export default function CryptoAIApplicationPage() {
  const router = useRouter();
  const [prefilledEmail, setPrefilledEmail] = useState("");
  const [waitlistId, setWaitlistId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const queryEmail = router.query.email;
    const queryWaitlistId = router.query.waitlistId;
    if (typeof queryEmail === "string") {
      setPrefilledEmail(queryEmail);
    }
    if (typeof queryWaitlistId === "string") {
      setWaitlistId(queryWaitlistId);
    }
  }, [router.isReady, router.query.email, router.query.waitlistId]);

  const cryptoMenuItems = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/crypto-ai", label: "Crypto AI" },
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
    ],
    []
  );

  return (
    <main>
      <Header
        menuItems={cryptoMenuItems}
        transparentOnScroll={true}
        alwaysTransparent={false}
      />

      <section className="relative overflow-hidden z-10 pt-32 sm:pt-40 md:pt-45 lg:pt-50 xl:pt-55 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 xl:px-0 text-center">
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Secure Your AI Crypto Copilot Perks
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Complete the 10-minute application and lock in your rewards. We’ll
            use this to tailor alerts and product access to your trading style.
          </p>
        </div>
      </section>

      <CryptoSurvey email={prefilledEmail} waitlistId={waitlistId} />
    </main>
  );
}
