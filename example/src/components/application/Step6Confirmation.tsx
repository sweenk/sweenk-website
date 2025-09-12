import React from 'react';

interface Step6ConfirmationProps {
  language: string;
}

const Step6Confirmation: React.FC<Step6ConfirmationProps> = ({ language }) => {
  return (
    <div className="text-center py-8">
      <div className="mb-8">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
          <i className="bi bi-check-lg text-white text-4xl"></i>
        </div>
        
        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
          Almost There!
        </h2>
        
        <p className="text-xl text-gray-700 mb-2">
          ✓ Your application has been completed
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-8 text-left">
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          What happens next?
        </h3>
        <ol className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="font-bold text-purple-600">1.</span>
            <span>We'll review your application within 24-48 hours</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-purple-600">2.</span>
            <span>You'll receive an email with the decision</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-purple-600">3.</span>
            <span>If approved, you'll get a Discord invite link</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-purple-600">4.</span>
            <span>Join our onboarding session for new members</span>
          </li>
        </ol>
      </div>

      <div className="border-t pt-8">
        <p className="text-lg font-semibold text-gray-800 mb-4">
          Remember our core values:
        </p>
        <p className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
          We Create. We Help. We Trust. We Share. We Care. We Stand for Light.
        </p>
      </div>

      <div className="mt-8">
        <a
          href={`/${language}`}
          className="inline-block px-8 py-3 rounded-full font-semibold text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default Step6Confirmation;