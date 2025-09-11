"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "ge";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "hero.title.primary": "Online",
    "hero.title.secondary": "Community",
    "hero.subtitle":
      "for Entrepreneurs, Engineers, Investors, Designers and for everyone who",
    "hero.subtitle.love": "love",
    "hero.subtitle.tech": "tech and innovations",
    "hero.cta": "Join now",
    "nav.overview": "Overview",
    "nav.about": "About Us",
    "nav.rules": "Rules",
    "nav.resources": "Resources",
    "nav.calendar": "Calendar",
    "nav.projects": "Projects",
    "nav.signup": "Join",
    "nav.joinnow": "Join Now",
    "nav.applicationform": "Application Form",
    "nav.terms": "Terms & Conditions",
    "nav.faq": "FAQ",
    "nav.manifesto": "Manifesto",
    "about.title.primary": "About",
    "about.title.secondary": "Us",
    "about.description":
      "dots.ge is an online community that brings together people connected to Georgia in any form, who wish to help each other in creating and developing innovative and useful products",
    "about.mission": "Our space was created with a mission to unite people to build a new entrepreneurial culture and empower a generation of creators for the new era.",
    "about.mission.highlight": "unite people to build a new entrepreneurial culture and empower a generation of creators for the new era",
    "about.belief": "We believe the future belongs to those who create, not just consume. In a world of endless possibilities, we're bringing together builders, dreamers, and makers who refuse to wait for change – they create it themselves.",
    "about.readmore": "Read more",
    "manifesto.title.primary": "Our",
    "manifesto.title.secondary": "Manifesto",
    "why.title.primary": "Why to",
    "why.title.secondary": "join",
    "why.subtitle": "Join a vibrant community of innovators and creators building the future of technology",
    "rules.title.primary": "Community",
    "rules.title.secondary": "Rules",
    "values.title.primary": "Our",
    "values.title.secondary": "Values",
    "why.network.title": "Powerful Network",
    "why.network.description": "Your network is your net worth. Connect with founders, developers, designers, and investors who are building the future alongside you.",
    "why.feedback.title": "Expert Feedback",
    "why.feedback.description": "Get honest validation from people who've been there. Test ideas, refine products, and perfect your pitch with seasoned entrepreneurs.",
    "why.adopters.title": "Early Adopters",
    "why.adopters.description": "Access tech enthusiasts eager to test your MVP. Get real feedback from people who love trying new products before anyone else.",
    "why.exchange.title": "Skill Exchange",
    "why.exchange.description": "Save months and thousands of dollars. Trade expertise with members who've solved the problems you're facing right now.",
    "why.support.title": "Emotional Support",
    "why.support.description": "Startups are lonely. Find your tribe of people who understand the 2 AM doubts, the pivot pain, and celebrate your wins.",
    "why.cofounders.title": "Find Co-founders",
    "why.cofounders.description": "The best partnerships start with shared values. Meet your technical co-founder, design partner, or business counterpart organically.",
    "why.knowledge.title": "Insider Knowledge",
    "why.knowledge.description": "Learn what's actually working now. Get unfiltered insights about tools, strategies, and shortcuts that aren't in any blog post.",
    "why.build.title": "Build Together",
    "why.build.description": "Create community-powered tools and growth hacks. From shared promotion engines to collaborative market research, we build resources that benefit everyone.",
    "calendar.title": "Upcoming Events",
    "calendar.subtitle": "Join us for online meetups, product launches, and in-person gatherings.",
  },
  ge: {
    "hero.title.primary": "ონლაინ",
    "hero.title.secondary": "ერთობა",
    "hero.subtitle":
      "სტარტაპერებისთვის, ინჟინრებისთვის, დიზაინერებისთვის, ინვესტორებისთვის და ზოგადად - ადამიანებისთვის ვისაც",
    "hero.subtitle.love": "",
    "hero.subtitle.tech": "ტექი და ინოვაცია",
    "hero.cta": "შემოგვიერთდი",
    "nav.overview": "მთავარი",
    "nav.about": "ჩვენზე",
    "nav.rules": "წესები",
    "nav.resources": "რესურსები",
    "nav.calendar": "კალენდარი",
    "nav.projects": "პროექტები",
    "nav.signup": "შემოგვიერთდი",
    "nav.joinnow": "შემოგვიერთდი ახლავე",
    "nav.applicationform": "განაცხადის ფორმა",
    "nav.terms": "წესები და პირობები",
    "nav.faq": "ხშირად დასმული კითხვები",
    "nav.manifesto": "მანიფესტი",
    "about.title.primary": "ჩვენს",
    "about.title.secondary": "შესახებ",
    "about.description":
      "dots.ge არის ონლაინ-სივრცე, რომელიც აერთიანებს ადამიანებს, რომლებსაც სურვილი აქვთ დაეხმარნონ ერთმანეთს ინოვაციური და სასარგებლო პროდუქტების შექმნასა და განვითარებაში",
    "about.mission": "ჩვენი მისიაა შევკრიბოთ ადამიანები თანამედროვე სამეწარმეო კულტურის ჩამოსაყალიბებლად და ხელი შევუწყოთ ახალი თაობის შემოქმედებს.",
    "about.mission.highlight": "შევკრიბოთ ადამიანები თანამედროვე სამეწარმეო კულტურის ჩამოსაყალიბებლად და ხელი შევუწყოთ ახალი თაობის შემოქმედებს",
    "about.belief": "ჩვენ გვჯერა, რომ მომავალი ეკუთვნის მათ, ვინც ქმნის და არა მხოლოდ მოიხმარს. უსასრულო შესაძლებლობების ეპოქაში, ჩვენ ვაერთიანებთ მეწარმეებს, მეოცნებეებს და შემოქმედებს, რომლებიც არ ელოდებიან მომავალს, არამედ თავად ქმნიან მას.",
    "about.readmore": "ვრცლად",
    "manifesto.title.primary": "ჩვენი",
    "manifesto.title.secondary": "მანიფესტი",
    "why.title.primary": "რატომ",
    "why.title.secondary": "გავწევრიანდე",
    "why.subtitle": "შემოუერთდით ინოვატორებისა და შემოქმედების აქტიურ საზოგადოებას, რომლებიც ქმნიან ტექნო-მომავალს",
    "rules.title.primary": "ჯგუფის",
    "rules.title.secondary": "წესები",
    "values.title.primary": "ჩვენი",
    "values.title.secondary": "ღირებულებები",
    "why.network.title": "ნაცნობობა",
    "why.network.description": "სანაცნობო წრე არის ფასდაუდებელი კაპიტალი. დაუკავშირდი დამფუძნებლებს, დეველოპერებს, დიზაინერებს და ინვესტორებს და შექმენი მომავალი მათთან ერთად.",
    "why.feedback.title": "ექსპერტიზა",
    "why.feedback.description": "მიიღეთ გულწრფელი შეფასება ადამიანებისგან, ვინც უკვე გაიარა ეს გზა. შეაფასე იდეები, დახვეწე და გააუმჯობესე პროდუქტი გამოცდილ ხალხთან ერთად.",
    "why.adopters.title": "პირველი მერცხლები",
    "why.adopters.description": "მიეცი ადრეული წვდომა პროდუქტზე ადამიანებს, რომლებსაც უყვართ და ერკვევიან ტექნოლოგიებში. რომლებსაც უყვართ სიახლის ყველაზე ადრე გამოცდა.",
    "why.exchange.title": "უნარების გაცვლა",
    "why.exchange.description": "დაზოგე დრო და ფული. მიიღე რჩევები წევრებისგან, რომლებმაც უკვე გადაჭრეს პრობლემები, რომლის წინაშეც ახლა შენ დგახარ.",
    "why.support.title": "მხარდაჭერა",
    "why.support.description": "ყინული პირველად გაჭრა რთულია. ძალიან მნიშვნელოვანია იმ ადამიანის გამხნევება, ვისაც ესმის რას ნიშნავს ღამე გაათონ პროდუქტზე და მომდევნო დღეს მთლიანად მოგიწიოს შეცვლა.",
    "why.cofounders.title": "თანაგუნდელი",
    "why.cofounders.description": "სწორი პარტნიორობა უპირველესად ნიშნავს საერთო ღირებულებების გაზიარებას. იპოვე ტექნიკური თანადამფუძნებელი, ბიზნეს გენიოსი ანდაც დიზაინის ჯადოქარი.",
    "why.knowledge.title": "ინსაიდერული ცოდნა",
    "why.knowledge.description": "გაიგე რა მუშაობს ახლა, მიიღეთ გაუფილტრავი ინფორმაცია ინსტრუმენტების, სტრატეგიებისა და \"შორთქათების\" შესახებ, რაც არცერთ ბლოგში არ წერია.",
    "why.build.title": "ერთობლივი შექმნა",
    "why.build.description": "ხშირად ჩვენ საერთოდ ინსტრუმენტები ანდ პროგრამები გვჭირდება პროდუქტის გასაპიარებლად, მომხმარებელთა მოსაზიდად თუ სხვა მიზნებისთვის. ერთად შევქმნათ ისინი.",
    "calendar.title": "მომავალი ივენთები",
    "calendar.subtitle": "დავეხმაროთ ერთმანეთს პროდუქტის გაშვებაში, შევხვდეთ ონლაინ და ოფლაინ.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ 
  children, 
  initialLocale = "ge" 
}: { 
  children: React.ReactNode;
  initialLocale?: Language;
}) {
  const [language, setLanguage] = useState<Language>(initialLocale);

  useEffect(() => {
    // Update body class when language changes
    if (language === "ge") {
      document.body.classList.add("geo");
    } else {
      document.body.classList.remove("geo");
    }
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
