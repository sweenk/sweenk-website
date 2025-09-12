'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';

const TermsPageClient = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-7">
        {/* Terms & Conditions */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <SectionTitle
              primary="Terms &"
              secondary="Conditions"
              primaryColor="var(--color-primary)"
              fontSize="text-6xl"
              className="mb-6"
            />
          </div>

          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                1. Acceptance
              </h3>
              <p className="text-gray-700">
                By joining our community, you agree to these rules and commit to contributing positively.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                2. Content Ownership
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>You own what you create</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>You grant us license to display your content on the platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>You're responsible for what you post</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                3. Privacy & Respect
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>Don't share others' private information</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>Respect confidential discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>What's shared in private stays private</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                4. No Warranties
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>Connections and advice are peer-to-peer</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>We're a platform, not responsible for outcomes</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>Do your own due diligence</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                5. Changes
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>We may update these rules as the community evolves</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>Major changes will be announced</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>Continued participation means acceptance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                6. Enforcement
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>Admins have final say on rule interpretation</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>We aim for fairness but reserve the right to protect the community</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-check-lg text-green-500 mt-1"></i>
                  <span>Appeals can be made through contact@dots.ge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPageClient;