import { FeaturesSection, HeroSection } from "@/sections";

const featuresData = [
  {
    icon: "./images/features/icon-01.svg",
    title: "Precise Personalization",
    description:
      "Experience a news feed uniquely tailored to your preferences with our advanced AI-driven personalization algorithm.",
  },
  {
    icon: "./images/features/icon-02.svg",
    title: "Save Your Time",
    description:
      "Sweenk allows you to engage in news conversations, acquiring the essence without reading full articles.",
  },
  {
    icon: "./images/features/icon-03.svg",
    title: "Interactive News Conversations",
    description:
      "Explore news interactively and dive deep into stories with engaging, active news conversations.",
  },
  {
    icon: "./images/features/icon-04.svg",
    title: "Uncover Pre-History and Context",
    description:
      "Go beyond the headlines and understand the 'why' with insightful backstories and contextual information.",
  },
  {
    icon: "./images/features/icon-05.svg",
    title: "Your Personal News Assistant",
    description:
      "Ask Sweenk about specific events or topics, making it your go-to personal news assistant.",
  },
  {
    icon: "./images/features/icon-06.svg",
    title: "Receive News That Matters",
    description:
      "Stay informed with a feed that's not just news, but a curated selection resonating with your interests.",
  },
];

export default function IndexPage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection
        subtitle="The Power of GPT"
        title="Key Features Unveiled"
        description="Experience Innovation in News Consumption and Publishing"
        features={featuresData}
      />
    </main>
  );
}
