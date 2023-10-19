import { Feedback } from "@/components/feedback/feedback";
import { User } from "@/components/feedback/feedback.type";
import { Subscribe } from "@/components/subscribe/subscribe";
import { FeaturesSection, HeroSection } from "@/sections";
import { Pricing } from "@/sections/pricing/pricing";

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

const userData: User[] = [
  {
    name: "Adison Dias",
    username: "adison",
    imageUrl: "./images/user/user-04.png",
    comments: [
      "Sweenk has completely revolutionized the way I consume news. It's like having a personal news assistant.",
      "The interactive news conversations are a game-changer! Saves so much of my time.",
    ],
  },
  {
    name: "Benjamin Hart",
    username: "benhart",
    imageUrl: "./images/user/user-05.png",
    comments: [
      "Never thought I'd actually enjoy reading news until Sweenk came along.",
      "The personalized feed based on my feedback is pure genius!",
    ],
  },
  {
    name: "Clara Oswald",
    username: "clara_o",
    imageUrl: "./images/user/user-06.png",
    comments: [
      "The user experience on Sweenk is unmatched. It truly understands my preferences.",
      "Being able to talk to my news feed? That's futuristic!",
    ],
  },
  {
    name: "David Moore",
    username: "davem",
    imageUrl: "./images/user/user-07.png",
    comments: [
      "I've ditched all other news apps after using Sweenk.",
      "It's AI-driven approach makes it stand out from the rest. Kudos to the team!",
    ],
  },
  {
    name: "Eva Green",
    username: "evagreen",
    imageUrl: "./images/user/user-08.png",
    comments: [
      "Sweenk offers the most engaging news consumption experience.",
      "The accuracy of the news content based on my interests is spot-on!",
    ],
  },
  {
    name: "Francis Lopez",
    username: "francis_lopez",
    imageUrl: "./images/user/user-09.png",
    comments: [
      "Sweenk is the future of news.",
      "Finally, a news app that doesn't overwhelm me with information, but gives me exactly what I want.",
    ],
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
      <Pricing />
      {/* <Feedback users={userData} /> */}
      <Subscribe />
    </main>
  );
}
