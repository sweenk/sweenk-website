'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import HandwrittenTitle from '@/components/HandwrittenTitle';

interface Event {
  id: string;
  title: {
    en: string;
    ge: string;
  };
  description: {
    en: string;
    ge: string;
  };
  date: string;
  time: string;
  type: 'online' | 'product-launch' | 'offline';
  location?: {
    en: string;
    ge: string;
  };
  link?: string;
}

const CalendarPageClient = () => {
  const { t, language } = useLanguage();

  // Sample events - in production, these would come from a database
  const events: Event[] = [
    {
      id: '1',
      title: {
        en: 'Weekly Online Meetup',
        ge: 'ყოველკვირეული ონლაინ შეხვედრა'
      },
      description: {
        en: 'Join us for our weekly community sync where we share updates, discuss projects, and help each other.',
        ge: 'შემოგვიერთდით ყოველკვირეულ სინქრონიზაციაზე, სადაც ვიზიარებთ სიახლეებს, განვიხილავთ პროექტებს და ვეხმარებით ერთმანეთს.'
      },
      date: '2025-01-15',
      time: '19:00',
      type: 'online',
      link: 'https://meet.google.com/dots-weekly'
    },
    {
      id: '2',
      title: {
        en: 'Product Launch: Community Tools v2.0',
        ge: 'პროდუქტის გაშვება: Community Tools v2.0'
      },
      description: {
        en: 'Launching our collaborative tools platform built by the community, for the community.',
        ge: 'ვუშვებთ ჩვენს კოლაბორაციულ ინსტრუმენტების პლატფორმას, რომელიც შექმნილია საზოგადოების მიერ, საზოგადოებისთვის.'
      },
      date: '2025-01-20',
      time: '18:00',
      type: 'product-launch',
      link: 'https://dots.ge/launch'
    },
    {
      id: '3',
      title: {
        en: 'Tbilisi Tech Meetup',
        ge: 'თბილისის ტექ შეხვედრა'
      },
      description: {
        en: 'In-person networking event with demos, lightning talks, and lots of great conversations.',
        ge: 'პირადი ნეთვორქინგ ივენთი დემოებით, მოკლე პრეზენტაციებით და ბევრი საინტერესო საუბრით.'
      },
      date: '2025-01-25',
      time: '19:00',
      type: 'offline',
      location: {
        en: 'Fabrika Tbilisi',
        ge: 'ფაბრიკა თბილისი'
      }
    },
    {
      id: '4',
      title: {
        en: 'Founders Friday Online',
        ge: 'დამფუძნებლების პარასკევი ონლაინ'
      },
      description: {
        en: 'Monthly session where founders share their journey, challenges, and lessons learned.',
        ge: 'ყოველთვიური სესია, სადაც დამფუძნებლები იზიარებენ თავიანთ გზას, გამოწვევებს და მიღებულ გაკვეთილებს.'
      },
      date: '2025-02-01',
      time: '20:00',
      type: 'online',
      link: 'https://meet.google.com/dots-founders'
    },
    {
      id: '5',
      title: {
        en: 'Product Launch: Georgian Startup Directory',
        ge: 'პროდუქტის გაშვება: ქართული სტარტაპების დირექტორია'
      },
      description: {
        en: 'Unveiling the most comprehensive directory of Georgian startups and tech companies.',
        ge: 'ვწარმოგიდგენთ ქართული სტარტაპებისა და ტექ კომპანიების ყველაზე სრულ დირექტორიას.'
      },
      date: '2025-02-10',
      time: '17:00',
      type: 'product-launch'
    },
    {
      id: '6',
      title: {
        en: 'Batumi Tech Weekend',
        ge: 'ბათუმის ტექ უიქენდი'
      },
      description: {
        en: 'Two-day hackathon and networking event by the Black Sea.',
        ge: 'ორდღიანი ჰაკათონი და ნეთვორქინგ ივენთი შავი ზღვის პირას.'
      },
      date: '2025-02-15',
      time: '10:00',
      type: 'offline',
      location: {
        en: 'TechPark Batumi',
        ge: 'ტექპარკი ბათუმი'
      }
    }
  ];

  const getEventIcon = (type: Event['type']) => {
    switch (type) {
      case 'online':
        return 'bi-camera-video-fill';
      case 'product-launch':
        return 'bi-rocket-takeoff-fill';
      case 'offline':
        return 'bi-people-fill';
      default:
        return 'bi-calendar-event';
    }
  };

  const getEventTypeLabel = (type: Event['type']) => {
    switch (type) {
      case 'online':
        return language === 'en' ? 'Online Meetup' : 'ონლაინ შეხვედრა';
      case 'product-launch':
        return language === 'en' ? 'Product Launch' : 'პროდუქტის გაშვება';
      case 'offline':
        return language === 'en' ? 'Offline Meetup' : 'ოფლაინ შეხვედრა';
      default:
        return '';
    }
  };

  const getMonthName = (date: Date) => {
    const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
    const monthsGe = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი',
                      'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
    
    const monthIndex = date.getMonth();
    return language === 'ge' ? monthsGe[monthIndex] : monthsEn[monthIndex];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = getMonthName(date);
    const year = date.getFullYear();
    
    if (language === 'ge') {
      return `${day} ${month}, ${year}`;
    }
    return `${month} ${day}, ${year}`;
  };

  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Group events by month
  const eventsByMonth = sortedEvents.reduce((acc, event) => {
    const date = new Date(event.date);
    const monthYear = `${getMonthName(date)} ${date.getFullYear()}`;
    
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  return (
    <div className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-7">
        <div className="text-center mb-16">
          <HandwrittenTitle
            text={t('calendar.title')}
            fontSize="text-6xl"
            className="mb-6"
          />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('calendar.subtitle')}
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-12">
          {Object.entries(eventsByMonth).map(([month, monthEvents]) => (
            <div key={month}>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {month}
              </h2>
              
              <div className="space-y-4">
                {monthEvents.map((event) => (
                  <div 
                    key={event.id}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      {/* Date Badge */}
                      <div className="flex-shrink-0">
                        <div className="bg-purple-50 rounded-xl p-4 text-center" style={{ borderColor: 'var(--color-primary)', borderWidth: '2px', borderStyle: 'solid' }}>
                          <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
                            {new Date(event.date).getDate()}
                          </div>
                          <div className="text-sm text-gray-600">
                            {getMonthName(new Date(event.date)).slice(0, 3)}
                          </div>
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="flex-grow">
                        <div className="flex items-start justify-between flex-wrap gap-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                                event.type === 'online' ? 'bg-blue-100 text-blue-700' :
                                event.type === 'product-launch' ? 'bg-green-100 text-green-700' :
                                'bg-orange-100 text-orange-700'
                              }`}>
                                <i className={`bi ${getEventIcon(event.type)}`}></i>
                                {getEventTypeLabel(event.type)}
                              </span>
                              <span className="text-gray-500 text-sm">
                                {event.time}
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2 text-gray-900">
                              {event.title[language as 'en' | 'ge']}
                            </h3>
                            
                            <p className="text-gray-600 mb-3">
                              {event.description[language as 'en' | 'ge']}
                            </p>

                            {event.location && (
                              <p className="text-sm text-gray-500 mb-2">
                                <i className="bi bi-geo-alt-fill mr-2"></i>
                                {event.location[language as 'en' | 'ge']}
                              </p>
                            )}
                          </div>

                          {/* Action Button */}
                          <div>
                            {event.link ? (
                              <a
                                href={event.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                                style={{ backgroundColor: 'var(--color-primary)' }}
                              >
                                {event.type === 'online' ? (
                                  <>
                                    <i className="bi bi-box-arrow-up-right"></i>
                                    {language === 'en' ? 'Join Online' : 'შემოუერთდი'}
                                  </>
                                ) : event.type === 'product-launch' ? (
                                  <>
                                    <i className="bi bi-eye-fill"></i>
                                    {language === 'en' ? 'Learn More' : 'გაიგე მეტი'}
                                  </>
                                ) : (
                                  <>
                                    <i className="bi bi-calendar-check"></i>
                                    {language === 'en' ? 'RSVP' : 'დარეგისტრირდი'}
                                  </>
                                )}
                              </a>
                            ) : (
                              <button
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold border-2 hover:bg-gray-50 transition-colors"
                                style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
                              >
                                <i className="bi bi-bell"></i>
                                {language === 'en' ? 'Get Reminder' : 'შეხსენება'}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {events.length === 0 && (
          <div className="text-center py-16">
            <i className="bi bi-calendar-x text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              {language === 'en' ? 'No upcoming events' : 'არ არის დაგეგმილი ივენთები'}
            </h3>
            <p className="text-gray-500">
              {language === 'en' 
                ? 'Check back soon for new events!' 
                : 'მალე დაემატება ახალი ივენთები!'}
            </p>
          </div>
        )}

        {/* Subscribe Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            {language === 'en' ? 'Never Miss an Event' : 'არ გამოტოვო ივენთები'}
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Join our community to get notified about upcoming events, product launches, and meetups.'
              : 'შემოუერთდი ჩვენს საზოგადოებას და მიიღე შეტყობინებები ივენთების, პროდუქტების გაშვებისა და შეხვედრების შესახებ.'}
          </p>
          <a
            href={`/${language}/apply`}
            className="inline-block px-8 py-3 rounded-full font-semibold text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CalendarPageClient;