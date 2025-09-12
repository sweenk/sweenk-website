'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import HandwrittenTitle from '@/components/HandwrittenTitle';

const ManifestoPageClient = () => {
  const { t } = useLanguage();

  const manifestoPoints = [
    {
      number: 1,
      title: {
        en: "We Create",
        ge: "ჩვენ ვქმნით"
      },
      description: {
        en: "We create because we love to create. We improve what can be improved. We invent, build, and nurture. We take on roles rather than wait for them to be assigned. Status and money are important to us as resources: they open up more opportunities to experiment and create.",
        ge: "ჩვენ ვქმნით, რადგან გვიყვარს შექმნა. ვაუმჯობესებთ იმას, რისი გაუმჯობესებაც შეიძლება. ვიგონებთ, ვაშენებთ და ვზრდით. ვიღებთ როლებს, ნაცვლად იმისა, რომ ველოდოთ მათ მინიჭებას. სტატუსი და ფული ჩვენთვის მნიშვნელოვანია როგორც რესურსი: ისინი ხსნიან მეტ შესაძლებლობებს ექსპერიმენტებისა და შექმნისთვის."
      }
    },
    {
      number: 2,
      title: {
        en: "We Help",
        ge: "ჩვენ ვეხმარებით"
      },
      description: {
        en: "When meeting a new person or hearing a new idea, the first question we ask is: 'How can I help you?' We don't trade help for help. We help because we want even more amazing things to happen in the world.",
        ge: "როდესაც ვხვდებით ახალ ადამიანს ან ვისმენთ ახალ იდეას, პირველი კითხვა, რომელსაც ვსვამთ არის: 'როგორ შემიძლია დაგეხმაროთ?' ჩვენ არ ვცვლით დახმარებას დახმარებაზე. ჩვენ ვეხმარებით, რადგან გვინდა, რომ მსოფლიოში კიდევ უფრო მეტი საოცარი რამ მოხდეს."
      }
    },
    {
      number: 3,
      title: {
        en: "We Trust",
        ge: "ჩვენ ვენდობით"
      },
      description: {
        en: "We don't have time to deceive or suspect. No time to prove to each other who's cooler. We're interested in creating, helping, and being part of something important. We trust people, assuming that by default everyone here has good intentions.",
        ge: "ჩვენ არ გვაქვს დრო მოტყუებისთვის ან ეჭვისთვის. არ გვაქვს დრო ერთმანეთისთვის დასამტკიცებლად, ვინ არის უფრო მაგარი. ჩვენ გვაინტერესებს შექმნა, დახმარება და მნიშვნელოვანი საქმის ნაწილად ყოფნა. ჩვენ ვენდობით ადამიანებს, ვვარაუდობთ, რომ ნაგულისხმევად ყველას აქ კარგი განზრახვები აქვს."
      }
    },
    {
      number: 4,
      title: {
        en: "We Share",
        ge: "ჩვენ ვიზიარებთ"
      },
      description: {
        en: "We openly share experiences and ideas. Without fear of appearing strange or unsuccessful, we talk not only about the beautiful parts of our stories. We always gratefully accept criticism and use it for improvement.",
        ge: "ჩვენ ღიად ვიზიარებთ გამოცდილებას და იდეებს. შიშის გარეშე, რომ უცნაურად ან წარუმატებლად გამოვიყურებოდეთ, ვსაუბრობთ არა მხოლოდ ჩვენი ისტორიების ლამაზ ნაწილებზე. ჩვენ ყოველთვის მადლიერებით ვიღებთ კრიტიკას და ვიყენებთ მას გასაუმჯობესებლად."
      }
    },
    {
      number: 5,
      title: {
        en: "We Care",
        ge: "ჩვენ ვზრუნავთ"
      },
      description: {
        en: "We put our whole heart into everything we do. We care deeply about each other's success and wellbeing. It's powerful when you care about someone, but the real magic happens when you feel that many people genuinely care about you. We create a space where everyone feels supported, valued, and never alone in their journey.",
        ge: "ჩვენ მთელ გულს ვდებთ ყველაფერში, რასაც ვაკეთებთ. ღრმად ვზრუნავთ ერთმანეთის წარმატებასა და კეთილდღეობაზე. ძლიერია, როდესაც ზრუნავ ვიღაცაზე, მაგრამ ნამდვილი ჯადოქრობა ხდება, როდესაც გრძნობ, რომ ბევრი ადამიანი გულწრფელად ზრუნავს შენზე. ჩვენ ვქმნით სივრცეს, სადაც ყველა გრძნობს მხარდაჭერას, დაფასებას და არასოდეს არის მარტო თავის გზაზე."
      }
    },
    {
      number: 6,
      title: {
        en: "We Stand for Light",
        ge: "ჩვენ ვდგავართ სინათლის მხარეს"
      },
      description: {
        en: "We recognize darkness exists in the world - injustice, oppression, and harm. We understand that darkness is the absence of light, so we actively choose to be that light. We don't hide behind 'staying out of politics' when human dignity is at stake. We use our platforms, our voices, and our creations to amplify positive change.",
        ge: "ჩვენ ვაღიარებთ, რომ სამყაროში არსებობს სიბნელე - უსამართლობა, ჩაგვრა და ზიანი. ჩვენ ვიცით, რომ სიბნელე არის სინათლის არარსებობა, ამიტომ აქტიურად ვირჩევთ ვიყოთ ეს სინათლე. ჩვენ არ ვიმალებით 'პოლიტიკისგან შორს დგომის' უკან, როდესაც ადამიანის ღირსება დგას საფრთხის წინაშე. ჩვენ ვიყენებთ ჩვენს პლატფორმებს, ხმებს და შემოქმედებას პოზიტიური ცვლილებების გასაძლიერებლად."
      }
    },
    {
      number: 7,
      title: {
        en: "We Persist",
        ge: "ჩვენ ვაგრძელებთ"
      },
      description: {
        en: "We know that meaningful change takes time. We don't give up when things get hard, when progress feels slow, or when we face rejection. We celebrate small wins, learn from failures, and keep moving forward. Success isn't about never falling - it's about always getting back up.",
        ge: "ჩვენ ვიცით, რომ მნიშვნელოვან ცვლილებას დრო სჭირდება. ჩვენ არ ვნებდებით, როდესაც საქმეები რთულდება, როდესაც პროგრესი ნელი გვეჩვენება ან როდესაც უარყოფას ვაწყდებით. ჩვენ ვზეიმობთ პატარა გამარჯვებებს, ვსწავლობთ მარცხისგან და ვაგრძელებთ წინსვლას. წარმატება არ არის იმაში, რომ არასოდეს დაეცე - ის იმაშია, რომ ყოველთვის ადგე."
      }
    },
    {
      number: 8,
      title: {
        en: "We Evolve",
        ge: "ჩვენ ვვითარდებით"
      },
      description: {
        en: "We're never finished learning. We challenge our own assumptions, update our beliefs when presented with evidence, and grow from every experience. We don't cling to outdated methods or ideas just because they're familiar. Yesterday's solution might not fit today's problem. We embrace change as the only constant.",
        ge: "ჩვენ არასოდეს ვწყვეტთ სწავლას. ჩვენ ვეჭვობთ საკუთარ ვარაუდებში, ვანახლებთ ჩვენს რწმენას მტკიცებულებების წინაშე და ვიზრდებით ყოველი გამოცდილებიდან. ჩვენ არ ვეჭიდებით მოძველებულ მეთოდებს ან იდეებს მხოლოდ იმიტომ, რომ ისინი ნაცნობია. გუშინდელი გამოსავალი შეიძლება არ ერგებოდეს დღევანდელ პრობლემას. ჩვენ ვიღებთ ცვლილებას, როგორც ერთადერთ მუდმივობას."
      }
    }
  ];

  const footerText = {
    en: "WE ORGANIZED A SPACE → WHERE PEOPLE TRUST → WHERE THE UNUSUAL AND NEW ARE ACCEPTED → WHERE PEOPLE SUPPORT EACH OTHER → WHERE PEOPLE MAKE MISTAKES AND GROW TOGETHER → WHERE PEOPLE SEEK LIKE-MINDED SOULS → WHERE SKILLED PEOPLE GATHER IN TEAMS AND BUILD PRODUCTS AND COMPANIES, AND PEOPLE WITH MONEY INVEST IN THEM.",
    ge: "ჩვენ შევქმენით სივრცე → სადაც ენდობიან → სადაც იღებენ უჩვეულოსა და ახალს → სადაც მხარს უჭერენ → სადაც შეცდომებს უშვებენ და ერთად იზრდებიან → სადაც ეძებენ მსგავსი აზროვნების ადამიანებს → სადაც უნარების მქონე ადამიანები იკრიბებიან გუნდებად და ქმნიან პროდუქტებსა და კომპანიებს, ხოლო ფულის მქონე ადამიანები ინვესტიციას აკეთებენ მათში."
  };

  return (
    <div className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-7">
          <div className="text-center mb-16">
            <HandwrittenTitle
              text={`${t('manifesto.title.primary')} ${t('manifesto.title.secondary')}`}
              fontSize="text-6xl"
              className="mb-6"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {manifestoPoints.map((point) => (
              <div key={point.number} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg h-full flex gap-4">
                <div 
                  className="text-base font-bold text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {point.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                    {point.title[useLanguage().language]}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {point.description[useLanguage().language]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-20 p-12">
            <p className="text-xl font-semibold text-gray-800 leading-relaxed">
              {footerText[useLanguage().language]}
            </p>
          </div>
      </div>
    </div>
  );
};

export default ManifestoPageClient;