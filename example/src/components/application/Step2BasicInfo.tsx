import React from 'react';
import { ApplicationData } from '@/components/pages/ApplicationPageClient';
import { countries } from '@/utils/countries';

interface Step2BasicInfoProps {
  formData: ApplicationData;
  updateFormData: (data: Partial<ApplicationData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  language: string;
}

const Step2BasicInfo: React.FC<Step2BasicInfoProps> = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
  language
}) => {
  const validateForm = () => {
    return (
      formData.fullName.length >= 2 &&
      formData.dateOfBirth &&
      formData.country &&
      formData.socialLink &&
      isValidUrl(formData.socialLink) &&
      isOldEnough(formData.dateOfBirth)
    );
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const isOldEnough = (dateOfBirth: string) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1 >= 16;
    }
    return age >= 16;
  };

  const canProceed = validateForm();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
        Let's Get to Know You
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => updateFormData({ fullName: e.target.value })}
            className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => updateFormData({ dateOfBirth: e.target.value })}
            className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          {formData.dateOfBirth && !isOldEnough(formData.dateOfBirth) && (
            <p className="text-red-500 text-sm mt-1">You must be at least 16 years old</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.country}
            onChange={(e) => updateFormData({ country: e.target.value })}
            className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            City <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateFormData({ city: e.target.value })}
            className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="New York"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Active Social Media Link <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-gray-600 mb-2">
            Please share a link to your most active social profile (LinkedIn, Twitter, Instagram, etc.)
          </p>
          <input
            type="url"
            value={formData.socialLink}
            onChange={(e) => updateFormData({ socialLink: e.target.value })}
            className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="https://linkedin.com/in/yourprofile"
          />
          {formData.socialLink && !isValidUrl(formData.socialLink) && (
            <p className="text-red-500 text-sm mt-1">Please enter a valid URL</p>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          className="px-6 py-2 border-2 border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        
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

export default Step2BasicInfo;