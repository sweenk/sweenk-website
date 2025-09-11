'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import HandwrittenTitle from '@/components/HandwrittenTitle';

const RulesPageClient = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-7">
        {/* Community Rules Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <HandwrittenTitle
              text={`${t('rules.title.primary')} ${t('rules.title.secondary')}`}
              fontSize="text-6xl"
              className="mb-6"
            />
          </div>

          {/* The Golden Rules */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
              The Golden Rules
            </h2>

            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="bi bi-heart-fill text-red-500 text-lg"></i>
                  <span>1. Be Helpful First</span>
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>When meeting someone new, ask "How can I help?" before asking for help</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>Share knowledge, connections, and resources generously</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>Your success is the community's success</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="bi bi-heart-fill text-red-500 text-lg"></i>
                  <span>2. Build in the Open</span>
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>Share your progress, struggles, and learnings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>Celebrate failures as learning opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>No project is too small or too early to share</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="bi bi-heart-fill text-red-500 text-lg"></i>
                  <span>3. Respect Everyone's Journey</span>
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>We're all at different stages - from idea to IPO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>No gatekeeping or dismissing "beginner" questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>Judge ideas by their potential, not their polish</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="bi bi-heart-fill text-red-500 text-lg"></i>
                  <span>4. Keep it Real</span>
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>No spam, fake metrics, or misleading claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>Promote your work when it adds value to discussions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>One genuine connection beats 100 cold pitches</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="bi bi-heart-fill text-red-500 text-lg"></i>
                  <span>5. Stand for Something</span>
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>We don't tolerate discrimination, harassment, or hate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>Use your platform to amplify positive change</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-lg text-green-500 mt-1"></i>
                    <span>If you see something wrong, speak up</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The No-Go Zone */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
              The No-Go Zone
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="bi bi-x-lg text-red-500 mt-1"></i>
                  <span>Hate speech, discrimination, or harassment</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-x-lg text-red-500 mt-1"></i>
                  <span>Spam, scams, or misleading information</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-x-lg text-red-500 mt-1"></i>
                  <span>Stealing ideas or taking credit for others' work</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-x-lg text-red-500 mt-1"></i>
                  <span>Using the community solely for self-promotion</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="bi bi-x-lg text-red-500 mt-1"></i>
                  <span>Violating anyone's privacy or sharing private conversations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Consequences */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
              Consequences
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <i className="bi bi-exclamation-triangle-fill text-yellow-500 text-lg"></i>
                  <span><strong>First violation:</strong> Warning and conversation</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="bi bi-pause-circle-fill text-orange-500 text-lg"></i>
                  <span><strong>Second violation:</strong> Temporary suspension</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="bi bi-slash-circle-fill text-red-500 text-lg"></i>
                  <span><strong>Severe/repeated violations:</strong> Permanent removal</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Spirit Behind the Rules */}
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
              The Spirit Behind the Rules
            </h2>
            <div className="max-w-3xl mx-auto relative">
              <i className="bi bi-quote text-6xl opacity-20 absolute -top-4 -left-8" style={{ color: 'var(--color-primary)' }}></i>
              <p className="text-lg text-gray-700 italic leading-relaxed relative z-10">
                We're building something special here - a place where creators, builders, and dreamers support each other genuinely. 
                These aren't just rules; they're promises we make to each other. Treat others as you'd want to be treated when 
                you're struggling with your first startup at 2 AM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesPageClient;