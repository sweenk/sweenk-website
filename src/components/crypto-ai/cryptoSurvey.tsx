import { firebasePromise } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import React, { FC, useMemo, useState } from "react";

interface CryptoSurveyProps {
  email: string;
  waitlistId?: string;
}

export const CryptoSurvey: FC<CryptoSurveyProps> = ({ email, waitlistId }) => {
  const [formData, setFormData] = useState({
    // Preferred name
    preferredName: "",
    // Q1: Trading experience
    tradingExperience: "",
    // Q2: Paid tools (checkboxes with product names)
    paidTools: {
      tradingBots: { checked: false, products: "" },
      premiumSignals: { checked: false, products: "" },
      analyticsPlatforms: { checked: false, products: "" },
      newsSubscriptions: { checked: false, products: "" },
      other: { checked: false, products: "" },
      nothing: false,
    },
    // Q3: Monthly budget
    monthlyBudget: "",
    // Q4: Stay updated frequency
    stayUpdatedRanking: {
      twitter: "",
      discordTelegram: "",
      reddit: "",
      newsSites: "",
      podcastsYouTube: "",
      tradingPlatformFeeds: "",
    },
    // Q5: Frustrations (checkboxes)
    frustrations: {
      tooMuchNoise: false,
      infoTooLate: false,
      cantVerify: false,
      dontUnderstand: false,
      missWhenAway: false,
      other: "",
    },
    // Q6: Perfect assistant
    perfectAssistant: "",
    // Q7: When need news (checkboxes)
    whenNeedNews: {
      discoverNewProjects: false,
      specificCoinsMentioned: false,
      beforeMarketEvents: false,
      duringVolatility: false,
      other: false,
      otherDetails: "",
    },
    // Q8: Alert speed
    alertSpeed: "",
    // Q9: Feature ranking (1-6)
    featureRanking: {
      instantAlerts: "",
      aiSummary: "",
      priceImpact: "",
      fakeNewsDetection: "",
      sourceCredibility: "",
      sentimentAnalysis: "",
    },
    // Q10: Would pay $50 for (checkboxes)
    wouldPay50: {
      alertsFaster: false,
      summarizeTrends: false,
      aiExplainsPortfolio: false,
      filtersNoise: false,
      verifiedSources: false,
      none: false,
    },
    // Q11: Would buy at $29/mo
    buyAt29: "",
    // Q12: Right price
    rightPrice: "",
    // Q13: Pay $99 today
    pay99Today: "",
    // Q14: Follow-up interview
    followUpInterview: "",
    recommendedTraders: [{ name: "", contact: "" }],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const paidToolOptions = [
    { key: "tradingBots", label: "Trading bots" },
    { key: "premiumSignals", label: "Premium signals or alerts" },
    { key: "analyticsPlatforms", label: "Analytics platforms" },
    { key: "newsSubscriptions", label: "News subscriptions" },
    { key: "other", label: "Other tools" },
  ] as const;

  const hasCoreWhenNeedNewsSelection = useMemo(() => {
    const selection = formData.whenNeedNews;
    return (
      selection.discoverNewProjects ||
      selection.specificCoinsMentioned ||
      selection.beforeMarketEvents ||
      selection.duringVolatility
    );
  }, [formData.whenNeedNews]);

  const handleRecommendedChange = (
    index: number,
    field: "name" | "contact",
    value: string
  ) => {
    setFormData((prev) => {
      const updated = [...prev.recommendedTraders];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };

      const isLast = index === updated.length - 1;
      const hasContent =
        updated[index].name.trim() !== "" || updated[index].contact.trim() !== "";
      if (isLast && hasContent && updated.length < 5) {
        updated.push({ name: "", contact: "" });
      }

      // remove trailing empty entries beyond first
      let cleaned = updated;
      for (let i = cleaned.length - 1; i > 0; i--) {
        if (
          cleaned[i].name.trim() === "" &&
          cleaned[i].contact.trim() === "" &&
          (cleaned[i - 1].name.trim() === "" &&
            cleaned[i - 1].contact.trim() === "")
        ) {
          cleaned = cleaned.slice(0, i);
        } else {
          break;
        }
      }

      return {
        ...prev,
        recommendedTraders: cleaned,
      };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (name.startsWith("stayUpdatedRanking.")) {
      const source = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        stayUpdatedRanking: {
          ...prev.stayUpdatedRanking,
          [source]: value,
        },
      }));
    } else if (name.startsWith("whenNeedNews.")) {
      const when = name.split(".")[1];
      if (when === "otherDetails") {
        setFormData((prev) => ({
          ...prev,
          whenNeedNews: {
            ...prev.whenNeedNews,
            otherDetails: value,
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          whenNeedNews: {
            ...prev.whenNeedNews,
            [when]: checked,
            ...(when === "other" && !checked ? { otherDetails: "" } : {}),
          },
        }));
      }
    } else if (name.startsWith("featureRanking.")) {
      const feature = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        featureRanking: {
          ...prev.featureRanking,
          [feature]: value,
        },
      }));
    } else if (name.startsWith("wouldPay50.")) {
      const option = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        wouldPay50: {
          ...prev.wouldPay50,
          [option]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Preferred name
    if (!formData.preferredName.trim()) {
      newErrors.preferredName = "Required";
    }

    // Q1: Required
    if (!formData.tradingExperience) newErrors.tradingExperience = "Required";

    const otherDetailsValue = formData.whenNeedNews.otherDetails.trim();
    if (
      !hasCoreWhenNeedNewsSelection &&
      !formData.whenNeedNews.other &&
      !otherDetailsValue
    ) {
      newErrors.whenNeedNews =
        "Choose at least one scenario or describe your own.";
    }
    if (formData.whenNeedNews.other && !otherDetailsValue) {
      newErrors.whenNeedNews = "Tell us what other situations you have in mind.";
    }

    // Q9: Feature ranking validation (1-6, duplicates allowed)
    const featureRankings = Object.values(formData.featureRanking).filter(
      (v) => v
    );
    const invalidFeatureRankings = featureRankings.filter(
      (r) => !["1", "2", "3", "4", "5", "6"].includes(r)
    );
    if (invalidFeatureRankings.length > 0) {
      newErrors.featureRanking = "Rankings must be between 1-6";
    }

    

    const invalidRecommendations = formData.recommendedTraders.some((entry) => {
      const nameFilled = entry.name.trim() !== "";
      const contactFilled = entry.contact.trim() !== "";
      return (nameFilled && !contactFilled) || (!nameFilled && contactFilled);
    });
    if (invalidRecommendations) {
      newErrors.recommendedTraders =
        "Please provide both name and contact for each recommended trader.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors in the form.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const normalizedEmail = email.trim().toLowerCase();
      const { firestore } = await firebasePromise;

      let waitlistDocRef =
        waitlistId && waitlistId.length > 0
          ? doc(firestore, "crypto-waitlist", waitlistId)
          : null;

      if (waitlistDocRef) {
        const existing = await getDoc(waitlistDocRef);
        if (!existing.exists()) {
          waitlistDocRef = null;
        }
      }

      if (!waitlistDocRef) {
        const waitlistQuery = query(
          collection(firestore, "crypto-waitlist"),
          where("email", "==", normalizedEmail),
          limit(1)
        );
        const snapshot = await getDocs(waitlistQuery);
        if (!snapshot.empty) {
          waitlistDocRef = snapshot.docs[0].ref;
        }
      }

      if (!waitlistDocRef) {
        throw new Error(
          "We couldn't find your waitlist entry. Please rejoin the waitlist and try again."
        );
      }

      const {
        preferredName,
        recommendedTraders,
        ...surveyResponsesRest
      } = formData;
      const sanitizedSurvey = {
        ...surveyResponsesRest,
        perfectAssistant: surveyResponsesRest.perfectAssistant.trim(),
        frustrations: {
          ...surveyResponsesRest.frustrations,
          other: surveyResponsesRest.frustrations.other.trim(),
        },
        whenNeedNews: {
          ...surveyResponsesRest.whenNeedNews,
          otherDetails: surveyResponsesRest.whenNeedNews.otherDetails.trim(),
        },
        recommendedTraders: recommendedTraders
          .map((entry) => ({
            name: entry.name.trim(),
            contact: entry.contact.trim(),
          }))
          .filter((entry) => entry.name !== "" && entry.contact !== ""),
      };

      await setDoc(
        waitlistDocRef,
        {
          email: normalizedEmail,
          preferredName: preferredName.trim(),
          surveyResponses: sanitizedSurvey,
          surveySubmittedAt: serverTimestamp(),
          surveySubmitted: true,
        },
        { merge: true }
      );

      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your responses have been recorded. We'll be in touch soon about your $100 credit.",
      });
    } catch (error: any) {
      console.error("Survey Error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error?.message ||
          "Unable to submit your survey at the moment. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-11 pb-17.5 bg-gray-50 relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h2 className="font-bold text-3xl text-gray-900 mb-4">
            Claim Your $100 Launch Credit
          </h2>
          <p className="text-gray-600 mb-8">
            Complete this 10-minute survey to help us build the perfect crypto
            news copilot and lock in $100 toward your premium plan.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                How may we call you? *
              </label>
              <input
                type="text"
                name="preferredName"
                value={formData.preferredName}
                onChange={handleChange}
                placeholder="Preferred name or nickname"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
              {errors.preferredName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.preferredName}
                </p>
              )}
            </div>

            {/* Q1: Trading Experience */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                1. How long trading crypto? *
              </label>
              <div className="space-y-2">
                {[
                  { value: "less-6-months", label: "Less than 6 months" },
                  { value: "6-to-24-months", label: "6 to 24 months" },
                  { value: "24-to-60-months", label: "24 to 60 months" },
                  { value: "60-plus-months", label: "More than 60 months" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="tradingExperience"
                      value={option.value}
                      checked={formData.tradingExperience === option.value}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.tradingExperience && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.tradingExperience}
                </p>
              )}
            </div>

            {/* Q2: Paid Tools */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                2. What tools do you PAY for right now? (check all that apply and list the products)
              </label>
              <div className="space-y-4">
                {paidToolOptions.map((tool) => {
                  const toolData =
                    formData.paidTools[
                      tool.key as keyof typeof formData.paidTools
                    ];
                  const isChecked =
                    typeof toolData === "object" && "checked" in toolData
                      ? toolData.checked
                      : false;
                  const products =
                    typeof toolData === "object" && "products" in toolData
                      ? toolData.products
                      : "";
                  const placeholder =
                    tool.key === "other"
                      ? "List additional tools (comma separated)"
                      : `List ${tool.label.toLowerCase()} (comma separated)`;

                  return (
                    <div key={tool.key} className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            setFormData((prev) => {
                              const prevTool =
                                prev.paidTools[
                                  tool.key as keyof typeof prev.paidTools
                                ];
                              const prevProducts =
                                typeof prevTool === "object" &&
                                "products" in prevTool
                                  ? prevTool.products
                                  : "";

                              return {
                                ...prev,
                                paidTools: {
                                  ...prev.paidTools,
                                  [tool.key]: {
                                    checked,
                                    products: checked ? prevProducts : "",
                                  },
                                  nothing: checked ? false : prev.paidTools.nothing,
                                },
                              };
                            });
                          }}
                          className="w-4 h-4"
                        />
                        <span>{tool.label}</span>
                      </label>
                      {isChecked && (
                        <input
                          type="text"
                          value={products}
                          onChange={(e) => {
                            const value = e.target.value;
                            setFormData((prev) => ({
                              ...prev,
                              paidTools: {
                                ...prev.paidTools,
                                [tool.key]: {
                                  checked: true,
                                  products: value,
                                },
                                nothing: false,
                              },
                            }));
                          }}
                          placeholder={placeholder}
                          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        />
                      )}
                    </div>
                  );
                })}

                <label className="flex items-center gap-2 cursor-pointer pt-2 border-t border-gray-100 mt-2">
                  <input
                    type="checkbox"
                    checked={formData.paidTools.nothing}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setFormData((prev) => {
                        if (!checked) {
                          return {
                            ...prev,
                            paidTools: {
                              ...prev.paidTools,
                              nothing: false,
                            },
                          };
                        }

                        return {
                          ...prev,
                          paidTools: {
                            tradingBots: { checked: false, products: "" },
                            premiumSignals: { checked: false, products: "" },
                            analyticsPlatforms: { checked: false, products: "" },
                            newsSubscriptions: { checked: false, products: "" },
                            other: { checked: false, products: "" },
                            nothing: true,
                          },
                        };
                      });
                    }}
                    className="w-4 h-4"
                  />
                  <span>Nothing – I use only free tools</span>
                </label>
              </div>
            </div>

            {/* Q3: Monthly Budget */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                3. What's your monthly budget for crypto tools?
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: "0", label: "$0 (free only)" },
                  { value: "10-50", label: "$10-50" },
                  { value: "50-100", label: "$50-100" },
                  { value: "100-300", label: "$100-300" },
                  { value: "300-plus", label: "$300+" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="monthlyBudget"
                      value={option.value}
                      checked={formData.monthlyBudget === option.value}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q4: Stay Updated Frequency */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                4. How often do you get updates from these channels?
              </label>
              <div className="space-y-4">
                {[
                  { key: "twitter", label: "Twitter/X" },
                  { key: "discordTelegram", label: "Discord/Telegram groups" },
                  { key: "reddit", label: "Reddit" },
                  { key: "newsSites", label: "News sites (CoinDesk, etc.)" },
                  { key: "podcastsYouTube", label: "Podcasts/YouTube" },
                  {
                    key: "tradingPlatformFeeds",
                    label: "Trading platform feeds",
                  },
                ].map((source) => (
                  <div
                    key={source.key}
                    className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <p className="text-sm font-medium text-gray-800 min-w-[160px]">
                      {source.label}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { value: "very-active", label: "Actively" },
                        { value: "sometimes", label: "Sometimes" },
                        { value: "rarely", label: "Not really" },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="inline-flex min-w-[140px] items-center gap-2 cursor-pointer text-sm text-gray-700"
                        >
                          <input
                            type="radio"
                            name={`stayUpdatedRanking.${source.key}`}
                            value={option.value}
                            checked={
                              formData.stayUpdatedRanking[
                                source.key as keyof typeof formData.stayUpdatedRanking
                              ] === option.value
                            }
                            onChange={handleChange}
                            className="w-4 h-4"
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Q5: Frustrations */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                5. What are your frustrations with staying on top of crypto news? (select all that apply)
              </label>
              <div className="space-y-3">
                {[
                  { key: "tooMuchNoise", label: "Too much noise or spam" },
                  { key: "infoTooLate", label: "Information arrives too late" },
                  { key: "cantVerify", label: "Hard to verify if news is real" },
                  {
                    key: "dontUnderstand",
                    label: "Not sure what the news means for prices",
                  },
                  {
                    key: "missWhenAway",
                    label: "Miss updates when I’m busy or sleeping",
                  },
                ].map((option) => (
                  <label
                    key={option.key}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={
                        formData.frustrations[
                          option.key as keyof typeof formData.frustrations
                        ] === true
                      }
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setFormData((prev) => ({
                          ...prev,
                          frustrations: {
                            ...prev.frustrations,
                            [option.key]: checked,
                            other:
                              option.key === "other" && !checked
                                ? ""
                                : prev.frustrations.other,
                          },
                        }));
                      }}
                      className="w-4 h-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
                <label className="flex flex-col gap-2">
                  <span className="text-sm text-gray-700">
                    Other frustrations?
                  </span>
                  <input
                    type="text"
                    value={formData.frustrations.other}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        frustrations: {
                          ...prev.frustrations,
                          other: value,
                        },
                      }));
                    }}
                    placeholder="Describe anything else that frustrates you"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                </label>
              </div>
            </div>

            {/* Q6: Perfect Assistant */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                6. Imagine your perfect AI crypto trading assistant. What does it do?
              </label>
              <textarea
                name="perfectAssistant"
                value={formData.perfectAssistant}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Describe your perfect news assistant..."
              />
            </div>

            {/* Q7: When Need News */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                7. When do you MOST need crypto news?
              </label>
              <div className="space-y-2">
                {[
                  {
                    key: "discoverNewProjects",
                    label: "Discover new blockchain projects",
                  },
                  {
                    key: "specificCoinsMentioned",
                    label: "Follow up on coins I'm interested in",
                  },
                  {
                    key: "beforeMarketEvents",
                    label: "Before market-moving events (Fed, regulations)",
                  },
                  { key: "duringVolatility", label: "During high volatility" },
                ].map((option) => (
                  <label
                    key={option.key}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name={`whenNeedNews.${option.key}`}
                      checked={
                        formData.whenNeedNews[
                          option.key as keyof typeof formData.whenNeedNews
                        ] === true
                      }
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
                <div className="pt-2 space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="whenNeedNews.other"
                      checked={formData.whenNeedNews.other === true}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span>Other (please specify)</span>
                  </label>
                  {(formData.whenNeedNews.other ||
                    !hasCoreWhenNeedNewsSelection) && (
                    <textarea
                      name="whenNeedNews.otherDetails"
                      value={formData.whenNeedNews.otherDetails}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Describe the situations when you most need crypto news."
                    />
                  )}
                  {!hasCoreWhenNeedNewsSelection && (
                    <p className="text-xs text-gray-500">
                      Tell us when you need updates if none of the options above fit.
                    </p>
                  )}
                </div>
                {errors.whenNeedNews && (
                  <p className="text-red-500 text-sm">
                    {errors.whenNeedNews}
                  </p>
                )}
              </div>
            </div>

            {/* Q8: Alert Speed */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                8. How fast is "fast enough" for alerts?
              </label>
              <div className="space-y-2">
                {[
                  { value: "realtime", label: "Real-time (seconds)" },
                  { value: "5min", label: "Within 5 minutes is fine" },
                  { value: "1hour", label: "Within an hour" },
                  { value: "daily", label: "Daily digest is enough" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="alertSpeed"
                      value={option.value}
                      checked={formData.alertSpeed === option.value}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q9: Feature Ranking */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                9. Rank these features (1=most valuable to 6=least)
              </label>
              <div className="space-y-3">
                {[
                  {
                    key: "instantAlerts",
                    label: "Instant alerts on breaking news",
                  },
                  { key: "aiSummary", label: "AI summary in plain English" },
                  { key: "priceImpact", label: "Price impact prediction" },
                  { key: "fakeNewsDetection", label: "Fake news detection" },
                  {
                    key: "sourceCredibility",
                    label: "Source credibility scoring",
                  },
                  {
                    key: "sentimentAnalysis",
                    label:
                      "Sentiment analysis (is crypto Twitter bullish/bearish?)",
                  },
                ].map((feature) => (
                  <div
                    key={feature.key}
                    className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-sm font-medium text-gray-800 min-w-[200px]">
                      {feature.label}
                    </span>
                    <div className="flex flex-wrap gap-3 justify-end">
                      {[1, 2, 3, 4, 5, 6].map((rank) => (
                        <label
                          key={rank}
                          className="inline-flex items-center gap-2 cursor-pointer text-sm text-gray-700 min-w-[48px] justify-center"
                        >
                          <input
                            type="radio"
                            name={`featureRanking.${feature.key}`}
                            value={rank}
                            checked={
                              formData.featureRanking[
                                feature.key as keyof typeof formData.featureRanking
                              ] === String(rank)
                            }
                            onChange={handleChange}
                            className="w-4 h-4"
                          />
                          <span>{rank}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {errors.featureRanking && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.featureRanking}
                </p>
              )}
            </div>

            {/* Q10: Would Pay $50 */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                10. Which would you pay $50/month for? (check all that apply)
              </label>
              <div className="space-y-2">
                {[
                  {
                    key: "alertsFaster",
                    label: "Alerts 5 minutes faster than free sources",
                  },
                  {
                    key: "summarizeTrends",
                    label: "Summarize Twitter, YouTube, and other trending updates",
                  },
                  {
                    key: "aiExplainsPortfolio",
                    label: "AI explains what news means for YOUR portfolio",
                  },
                  {
                    key: "filtersNoise",
                    label: "Filters out 90% of noise automatically",
                  },
                  {
                    key: "verifiedSources",
                    label: "Verified sources only (no scams)",
                  },
                  { key: "none", label: "None of these worth $50" },
                ].map((option) => (
                  <label
                    key={option.key}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name={`wouldPay50.${option.key}`}
                      checked={
                        formData.wouldPay50[
                          option.key as keyof typeof formData.wouldPay50
                        ]
                      }
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q11: Buy at $29 */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                11. If we launched next month at $29/month, would you:
              </label>
              <div className="space-y-2">
                {[
                  { value: "definitely", label: "Definitely buy" },
                  { value: "probably", label: "Probably buy" },
                  { value: "maybe", label: "Maybe, need to see it first" },
                  { value: "too-expensive", label: "No, too expensive" },
                  { value: "dont-need", label: "No, don't need it" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="buyAt29"
                      value={option.value}
                      checked={formData.buyAt29 === option.value}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q12: Right Price */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                12. What price feels RIGHT for this?
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: "free", label: "Free only" },
                  { value: "10", label: "$10/month" },
                  { value: "25", label: "$25/month" },
                  { value: "50", label: "$50/month" },
                  { value: "100", label: "$100/month" },
                  { value: "200-plus", label: "$200+/month" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="rightPrice"
                      value={option.value}
                      checked={formData.rightPrice === option.value}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q13: Pay $99 Today */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                13. Would you pay $99 TODAY for lifetime access?
              </label>
              <div className="space-y-2">
                {[
                  { value: "yes", label: "Yes, where do I pay?" },
                  { value: "maybe", label: "Maybe, depends on..." },
                  { value: "no", label: "No" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="pay99Today"
                      value={option.value}
                      checked={formData.pay99Today === option.value}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                14. Can we email you for a 15-minute follow-up interview?
              </label>
              <div className="space-y-2">
                {[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="followUpInterview"
                      value={option.value}
                      checked={formData.followUpInterview === option.value}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Would you recommend other crypto traders to try this? (optional)
              </label>
              <p className="text-sm text-gray-600 mb-4">
                Add their name and email or mobile number. We’ll reveal more rows
                automatically.
              </p>
              <div className="space-y-3">
                {formData.recommendedTraders.map((entry, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
                  >
                    <input
                      type="text"
                      value={entry.name}
                      onChange={(e) =>
                        handleRecommendedChange(index, "name", e.target.value)
                      }
                      placeholder="Trader name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      value={entry.contact}
                      onChange={(e) =>
                        handleRecommendedChange(index, "contact", e.target.value)
                      }
                      placeholder="Email or mobile number"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                ))}
              </div>
              {errors.recommendedTraders && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.recommendedTraders}
                </p>
              )}
            </div>

            {/* Submit Button */}
            {submitStatus && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-10 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting
                ? "Submitting..."
                : "Submit Survey & Claim $100 Credit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

