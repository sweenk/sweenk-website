import React from 'react';
import Link from 'next/link';
import { ApplicationData } from '@/components/pages/ApplicationPageClient';

interface Step1WelcomeProps {
  formData: ApplicationData;
  updateFormData: (data: Partial<ApplicationData>) => void;
  nextStep: () => void;
  language: string;
}

const Step1Welcome: React.FC<Step1WelcomeProps> = ({
  formData,
  updateFormData,
  nextStep,
  language
}) => {
  const canProceed = formData.agreedToRules && formData.agreedToTerms;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
        Welcome to Our Community
      </h1>
      
      <div className="prose prose-lg text-gray-700 mb-8">
        <p className="mb-4">
          We're building a space where creators, builders, and dreamers unite to build 
          a new entrepreneurial culture. Before we begin, please review our core values:
        </p>
        
        <p className="font-bold text-xl my-6" style={{ color: 'var(--color-primary)' }}>
          We Create. We Help. We Trust. We Share. We Care. We Stand for Light.
        </p>
        
        <p>
          Our community thrives on genuine connections, open collaboration, and mutual support. 
          We're looking for people who want to give as much as they receive.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.agreedToRules}
            onChange={(e) => updateFormData({ agreedToRules: e.target.checked })}
            className="mt-1 w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500"
          />
          <span className="text-gray-700 group-hover:text-gray-900">
            I have read and agree to the{' '}
            <Link 
              href={`/${language}/rules`}
              className="underline hover:no-underline"
              style={{ color: 'var(--color-primary)' }}
              target="_blank"
            >
              Community Rules
            </Link>
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.agreedToTerms}
            onChange={(e) => updateFormData({ agreedToTerms: e.target.checked })}
            className="mt-1 w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500"
          />
          <span className="text-gray-700 group-hover:text-gray-900">
            I have read and agree to the{' '}
            <Link 
              href={`/${language}/terms`}
              className="underline hover:no-underline"
              style={{ color: 'var(--color-primary)' }}
              target="_blank"
            >
              Terms & Conditions
            </Link>
          </span>
        </label>
      </div>

      <div className="flex justify-end">
        <button
          onClick={nextStep}
          disabled={!canProceed}
          className={`px-8 py-3 rounded-full font-semibold text-white transition-all ${
            canProceed 
              ? 'hover:shadow-lg transform hover:-translate-y-0.5' 
              : 'opacity-50 cursor-not-allowed'
          }`}
          style={{ backgroundColor: canProceed ? 'var(--color-primary)' : '#9CA3AF' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1Welcome;