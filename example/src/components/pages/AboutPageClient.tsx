'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import HandwrittenTitle from '@/components/HandwrittenTitle';
import CheckmarkList from '@/components/CheckmarkList';

const AboutPageClient = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-7">
        <div className="text-center mb-16">
          <HandwrittenTitle
            text={`${t('about.title.primary')} ${t('about.title.secondary')}`}
            fontSize="text-6xl"
            className="mb-6"
          />
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mt-8">
            Our space was created with a mission to unite people to build a new entrepreneurial culture and empower a generation of creators for the new era.
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe the future belongs to those who create, not just consume. In a world of endless possibilities, 
              we're bringing together builders, dreamers, and makers who refuse to wait for change – they create it themselves.
            </p>
          </div>
        </div>

        {/* Who We Are */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
            Who We Are
          </h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              We're a global community of entrepreneurs, developers, designers, mentors, and investors who share a common belief: 
              that building something meaningful requires more than just skills and capital – it requires a community that 
              genuinely cares about each other's success.
            </p>
          </div>
        </div>

        {/* Why We Exist */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
            Why We Exist
          </h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Traditional business culture often celebrates competition over collaboration, secrecy over transparency, 
              and individual success over collective growth. We're here to change that. We're building a space where:
            </p>
            <CheckmarkList 
              items={[
                "Ideas are shared openly without fear of judgment or theft",
                "Failures are celebrated as stepping stones to success",
                "Help is given freely without keeping score",
                "Success is measured by impact, not just profit",
                "Everyone has something to teach and something to learn"
              ]}
              className="text-lg"
            />
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
            What Makes Us Different
          </h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              We don't just connect people – we unite them around shared values. Our manifesto isn't just words on a page; 
              it's a living commitment we make to each other. When you join us, you're not just accessing a network; 
              you're becoming part of a movement to reshape how business is done.
            </p>
          </div>
        </div>

        {/* How to Join */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
            How to Join
          </h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We're a closed community that values quality over quantity. Every new member needs to be approved by our community managers 
              to ensure we maintain the supportive, collaborative culture we've built together.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This selective approach helps us create a trusted environment where members feel safe to share ideas, ask for help, 
              and build meaningful connections. When you join, you're not just entering a network – you're being welcomed into a 
              carefully curated family of innovators.
            </p>
          </div>
        </div>

        {/* Our Promise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
            Our Promise
          </h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're launching your first startup, scaling your tenth, or anywhere in between – you belong here. 
              We promise to provide the connections, knowledge, and support you need to turn your vision into reality. 
              More importantly, we promise you'll never walk this journey alone.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-8">
            Join us in building the entrepreneurial culture of tomorrow – one where we create, help, trust, share, care, and stand for light.
          </p>
          <button 
            className="px-8 py-3 text-white font-semibold rounded-full hover:shadow-xl transform hover:-translate-y-1 duration-300 transition-all"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPageClient;