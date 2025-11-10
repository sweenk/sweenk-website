import React, { FC, useState } from "react";

interface CryptoSurveyProps {
  email: string;
}

export const CryptoSurvey: FC<CryptoSurveyProps> = ({ email }) => {
  const [formData, setFormData] = useState({
    // Q1: Trading style
    tradingStyle: "",
    // Q2: Trading experience
    tradingExperience: "",
    // Q3: Paid tools (checkboxes with amounts)
    paidTools: {
      tradingBots: { checked: false, amount: "" },
      premiumSignals: { checked: false, amount: "" },
      analyticsPlatforms: { checked: false, amount: "" },
      newsSubscriptions: { checked: false, amount: "" },
      other: { checked: false, text: "" },
      nothing: false,
    },
    // Q4: Monthly budget
    monthlyBudget: "",
    // Q5: Cancel reason
    cancelReason: "",
    // Q6: Lost money story
    lostMoneyStory: "",
    // Q7: Stay updated ranking (1-5 for each)
    stayUpdatedRanking: {
      twitter: "",
      discordTelegram: "",
      reddit: "",
      newsSites: "",
      podcastsYouTube: "",
      tradingPlatformFeeds: "",
    },
    // Q8: Biggest frustration
    biggestFrustration: "",
    biggestFrustrationOther: "",
    // Q9: Perfect assistant
    perfectAssistant: "",
    // Q10: When need news (checkboxes)
    whenNeedNews: {
      beforeMarketEvents: false,
      duringVolatility: false,
      specificCoinsMentioned: false,
      technicalUpdates: false,
      macroEconomic: false,
      always24_7: false,
    },
    // Q11: Alert speed
    alertSpeed: "",
    // Q12: Feature ranking (1-6)
    featureRanking: {
      instantAlerts: "",
      aiSummary: "",
      priceImpact: "",
      fakeNewsDetection: "",
      sourceCredibility: "",
      sentimentAnalysis: "",
    },
    // Q13: Would pay $50 for (checkboxes)
    wouldPay50: {
      alertsFaster: false,
      aiExplainsPortfolio: false,
      filtersNoise: false,
      verifiedSources: false,
      none: false,
    },
    // Q14: Would buy at $29/mo
    buyAt29: "",
    // Q15: Right price
    rightPrice: "",
    // Q16: Pay $99 today
    pay99Today: "",
    pay99Email: "",
    // Q17: Follow-up interview
    followUpInterview: "",
    followUpEmail: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (name.startsWith("paidTools.")) {
      const toolKey = name.split(".")[1];
      if (toolKey === "amount" || toolKey === "text") {
        const parentKey = name.split(".")[0] + "." + name.split(".")[1];
        setFormData((prev) => ({
          ...prev,
          paidTools: {
            ...prev.paidTools,
            [parentKey.split(".")[1]]: {
              ...(prev.paidTools[
                parentKey.split(".")[1] as keyof typeof prev.paidTools
              ] as any),
              [toolKey]: value,
            },
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          paidTools: {
            ...prev.paidTools,
            [toolKey]:
              toolKey === "nothing"
                ? checked
                : {
                    checked,
                    amount:
                      toolKey === "other"
                        ? prev.paidTools.other?.text || ""
                        : "",
                  },
          },
        }));
      }
    } else if (name.startsWith("stayUpdatedRanking.")) {
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
      setFormData((prev) => ({
        ...prev,
        whenNeedNews: {
          ...prev.whenNeedNews,
          [when]: checked,
        },
      }));
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

    // Q1 & Q2: Required
    if (!formData.tradingStyle) newErrors.tradingStyle = "Required";
    if (!formData.tradingExperience) newErrors.tradingExperience = "Required";

    // Q7: Ranking validation (1-5, no duplicates)
    const rankings = Object.values(formData.stayUpdatedRanking).filter(
      (v) => v
    );
    const rankingSet = new Set(rankings);
    if (rankings.length > 0 && rankings.length !== rankingSet.size) {
      newErrors.stayUpdatedRanking = "Each ranking must be unique";
    }
    const invalidRankings = rankings.filter(
      (r) => !["1", "2", "3", "4", "5", "6"].includes(r)
    );
    if (invalidRankings.length > 0) {
      newErrors.stayUpdatedRanking = "Rankings must be between 1-6";
    }

    // Q12: Feature ranking validation (1-6, no duplicates)
    const featureRankings = Object.values(formData.featureRanking).filter(
      (v) => v
    );
    const featureRankingSet = new Set(featureRankings);
    if (
      featureRankings.length > 0 &&
      featureRankings.length !== featureRankingSet.size
    ) {
      newErrors.featureRanking = "Each ranking must be unique";
    }
    const invalidFeatureRankings = featureRankings.filter(
      (r) => !["1", "2", "3", "4", "5", "6"].includes(r)
    );
    if (invalidFeatureRankings.length > 0) {
      newErrors.featureRanking = "Rankings must be between 1-6";
    }

    // Q16 & Q17: Email if "Yes" selected
    if (formData.pay99Today === "yes" && !formData.pay99Email) {
      newErrors.pay99Email = "Email required";
    }
    if (
      formData.followUpInterview === "yes" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.followUpEmail)
    ) {
      newErrors.followUpEmail = "Valid email required";
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
      // TODO: Replace with actual API endpoint
      const response = await fetch("/api/crypto-survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          surveyData: formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit survey");
      }

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
            {/* Q1: Trading Style */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                1. How do you currently trade/invest in crypto? *
              </label>
              <div className="space-y-2">
                {[
                  {
                    value: "day-trader",
                    label: "Day trader (multiple trades/day)",
                  },
                  {
                    value: "swing-trader",
                    label: "Swing trader (hold days/weeks)",
                  },
                  { value: "long-term", label: "Long-term holder" },
                  { value: "researching", label: "Just researching/learning" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="tradingStyle"
                      value={option.value}
                      checked={formData.tradingStyle === option.value}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.tradingStyle && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.tradingStyle}
                </p>
              )}
            </div>

            {/* Q2: Trading Experience */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                2. How long trading crypto? *
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: "less-6mo", label: "< 6 months" },
                  { value: "6mo-2yr", label: "6mo-2yr" },
                  { value: "2-5yr", label: "2-5yr" },
                  { value: "5yr-plus", label: "5yr+" },
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

            {/* Q3: Paid Tools */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                3. What tools do you PAY for right now? (check all)
              </label>
              <div className="space-y-3">
                {[
                  { key: "tradingBots", label: "Trading bots" },
                  { key: "premiumSignals", label: "Premium signals/alerts" },
                  { key: "analyticsPlatforms", label: "Analytics platforms" },
                  { key: "newsSubscriptions", label: "News subscriptions" },
                ].map((tool) => {
                  const toolData =
                    formData.paidTools[
                      tool.key as keyof typeof formData.paidTools
                    ];
                  const isChecked =
                    typeof toolData === "object" && toolData.checked;
                  const amount =
                    typeof toolData === "object" && "amount" in toolData
                      ? toolData.amount
                      : "";

                  return (
                    <label
                      key={tool.key}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                          setFormData((prev) => ({
                            ...prev,
                            paidTools: {
                              ...prev.paidTools,
                              [tool.key]: {
                                checked: e.target.checked,
                                amount:
                                  typeof prev.paidTools[
                                    tool.key as keyof typeof prev.paidTools
                                  ] === "object"
                                    ? (
                                        prev.paidTools[
                                          tool.key as keyof typeof prev.paidTools
                                        ] as { amount: string }
                                      ).amount
                                    : "",
                              },
                            },
                          }));
                        }}
                        className="w-4 h-4"
                      />
                      <span>{tool.label} ($___/mo)</span>
                      {isChecked && (
                        <input
                          type="text"
                          value={amount}
                          onChange={(e) => {
                            setFormData((prev) => ({
                              ...prev,
                              paidTools: {
                                ...prev.paidTools,
                                [tool.key]: {
                                  checked: true,
                                  amount: e.target.value,
                                },
                              },
                            }));
                          }}
                          placeholder="Amount"
                          className="ml-2 px-3 py-1 border border-gray-300 rounded text-sm w-24"
                        />
                      )}
                    </label>
                  );
                })}

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.paidTools.other.checked}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        paidTools: {
                          ...prev.paidTools,
                          other: {
                            checked: e.target.checked,
                            text: prev.paidTools.other.text,
                          },
                        },
                      }));
                    }}
                    className="w-4 h-4"
                  />
                  <span>Other: </span>
                  <input
                    type="text"
                    value={formData.paidTools.other.text}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        paidTools: {
                          ...prev.paidTools,
                          other: {
                            checked: true,
                            text: e.target.value,
                          },
                        },
                      }));
                    }}
                    placeholder="Specify"
                    className="ml-2 px-3 py-1 border border-gray-300 rounded text-sm flex-1"
                  />
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="paidTools.nothing"
                    checked={formData.paidTools.nothing}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span>Nothing - I use only free tools</span>
                </label>
              </div>
            </div>

            {/* Q4: Monthly Budget */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                4. What's your monthly budget for crypto tools?
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

            {/* Q5: Cancel Reason */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                5. What would make you CANCEL a paid tool immediately?
              </label>
              <textarea
                name="cancelReason"
                value={formData.cancelReason}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell us what would make you cancel..."
              />
            </div>

            {/* Q6: Lost Money Story */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                6. Tell me about a time you LOST MONEY because you:
              </label>
              <div className="text-sm text-gray-600 mb-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>Missed important news</li>
                  <li>Got info too late</li>
                  <li>Made decision on incomplete info</li>
                </ul>
              </div>
              <textarea
                name="lostMoneyStory"
                value={formData.lostMoneyStory}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Share your story..."
              />
            </div>

            {/* Q7: Stay Updated Ranking */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                7. How do you stay updated? (rank 1-6, 1=most used)
              </label>
              <div className="space-y-3">
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
                  <div key={source.key} className="flex items-center gap-3">
                    <span className="w-48 text-sm">{source.label}</span>
                    <select
                      name={`stayUpdatedRanking.${source.key}`}
                      value={
                        formData.stayUpdatedRanking[
                          source.key as keyof typeof formData.stayUpdatedRanking
                        ]
                      }
                      onChange={handleChange}
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                    >
                      <option value="">-</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                ))}
              </div>
              {errors.stayUpdatedRanking && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.stayUpdatedRanking}
                </p>
              )}
            </div>

            {/* Q8: Biggest Frustration */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                8. Biggest frustration with current approach?
              </label>
              <div className="space-y-2">
                {[
                  { value: "too-much-noise", label: "Too much noise/spam" },
                  {
                    value: "info-too-late",
                    label: "Information comes too late",
                  },
                  {
                    value: "cant-verify",
                    label: "Can't verify if news is real",
                  },
                  {
                    value: "dont-understand",
                    label: "Don't understand what news means for prices",
                  },
                  {
                    value: "miss-when-sleeping",
                    label: "Miss news when sleeping/busy",
                  },
                  { value: "other", label: "Other" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="biggestFrustration"
                      value={option.value}
                      checked={formData.biggestFrustration === option.value}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
              {formData.biggestFrustration === "other" && (
                <input
                  type="text"
                  name="biggestFrustrationOther"
                  value={formData.biggestFrustrationOther}
                  onChange={handleChange}
                  placeholder="Please specify"
                  className="mt-3 w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              )}
            </div>

            {/* Q9: Perfect Assistant */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                9. Imagine your PERFECT news assistant. What does it do?
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

            {/* Q10: When Need News */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                10. When do you MOST need crypto news?
              </label>
              <div className="space-y-2">
                {[
                  {
                    key: "beforeMarketEvents",
                    label: "Before market-moving events (Fed, regulations)",
                  },
                  { key: "duringVolatility", label: "During high volatility" },
                  {
                    key: "specificCoinsMentioned",
                    label: "When specific coins I hold are mentioned",
                  },
                  {
                    key: "technicalUpdates",
                    label: "Technical updates (protocol changes)",
                  },
                  { key: "macroEconomic", label: "Macro economic news" },
                  {
                    key: "always24_7",
                    label: "24/7, I never want to miss anything",
                  },
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

            {/* Q11: Alert Speed */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                11. How fast is "fast enough" for alerts?
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

            {/* Q12: Feature Ranking */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                12. Rank these features (1=most valuable to 6=least)
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
                  <div key={feature.key} className="flex items-center gap-3">
                    <span className="w-64 text-sm">{feature.label}</span>
                    <select
                      name={`featureRanking.${feature.key}`}
                      value={
                        formData.featureRanking[
                          feature.key as keyof typeof formData.featureRanking
                        ]
                      }
                      onChange={handleChange}
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                    >
                      <option value="">-</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                ))}
              </div>
              {errors.featureRanking && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.featureRanking}
                </p>
              )}
            </div>

            {/* Q13: Would Pay $50 */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                13. Which would you pay $50/month for? (check all)
              </label>
              <div className="space-y-2">
                {[
                  {
                    key: "alertsFaster",
                    label: "Alerts 5 minutes faster than free sources",
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

            {/* Q14: Buy at $29 */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                14. If we launched next month at $29/mo, would you:
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

            {/* Q15: Right Price */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                15. What price feels RIGHT for this?
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: "free", label: "Free only" },
                  { value: "10", label: "$10/mo" },
                  { value: "25", label: "$25/mo" },
                  { value: "50", label: "$50/mo" },
                  { value: "100", label: "$100/mo" },
                  { value: "200-plus", label: "$200+/mo" },
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

            {/* Q16: Pay $99 Today */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                16. Would you pay $99 TODAY for lifetime access?
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
              {formData.pay99Today === "yes" && (
                <div className="mt-3">
                  <input
                    type="email"
                    name="pay99Email"
                    value={formData.pay99Email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                  {errors.pay99Email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.pay99Email}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Q17: Follow-up Interview */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                17. Can we email you for 15-min follow-up interview?
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
              {formData.followUpInterview === "yes" && (
                <div className="mt-3">
                  <input
                    type="email"
                    name="followUpEmail"
                    value={formData.followUpEmail}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                  {errors.followUpEmail && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.followUpEmail}
                    </p>
                  )}
                </div>
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
