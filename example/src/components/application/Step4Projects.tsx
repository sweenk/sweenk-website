import React from 'react';
import { ApplicationData } from '@/components/pages/ApplicationPageClient';

interface Step4ProjectsProps {
  formData: ApplicationData;
  updateFormData: (data: Partial<ApplicationData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  language: string;
}

const lookingForOptions = [
  'Co-founders or team members',
  'Mentorship and guidance',
  'Investment opportunities',
  'Technical expertise',
  'Design collaboration',
  'Business development',
  'Learning and skill development',
  'Networking and connections',
  'Feedback on ideas',
  'Just good people to vibe with'
];

const canOfferOptions = [
  'Technical skills (coding, architecture, etc.)',
  'Design expertise',
  'Business/Marketing knowledge',
  'Mentorship and experience',
  'Investment/Funding',
  'Industry connections',
  'Time and enthusiasm',
  'Fresh perspectives'
];

const Step4Projects: React.FC<Step4ProjectsProps> = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
  language
}) => {
  const validateForm = () => {
    return (
      formData.hasProject &&
      formData.lookingFor.length > 0 &&
      formData.canOffer.length > 0
    );
  };

  const handleLookingForChange = (option: string) => {
    const updated = formData.lookingFor.includes(option)
      ? formData.lookingFor.filter(item => item !== option)
      : [...formData.lookingFor, option];
    updateFormData({ lookingFor: updated });
  };

  const handleCanOfferChange = (option: string) => {
    const updated = formData.canOffer.includes(option)
      ? formData.canOffer.filter(item => item !== option)
      : [...formData.canOffer, option];
    updateFormData({ canOffer: updated });
  };

  const canProceed = validateForm();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
        Your Projects & Interests
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Do you currently have an active project? <span className="text-red-500">*</span>
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="hasProject"
                value="yes"
                checked={formData.hasProject === 'yes'}
                onChange={(e) => updateFormData({ hasProject: e.target.value as ApplicationData['hasProject'] })}
                className="w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-purple-500"
              />
              <span className="text-gray-700">Yes, I'm working on something</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="hasProject"
                value="ideas"
                checked={formData.hasProject === 'ideas'}
                onChange={(e) => updateFormData({ hasProject: e.target.value as ApplicationData['hasProject'] })}
                className="w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-purple-500"
              />
              <span className="text-gray-700">No, but I have ideas</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="hasProject"
                value="learning"
                checked={formData.hasProject === 'learning'}
                onChange={(e) => updateFormData({ hasProject: e.target.value as ApplicationData['hasProject'] })}
                className="w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-purple-500"
              />
              <span className="text-gray-700">No, I'm here to learn and connect</span>
            </label>
          </div>
        </div>

        {formData.hasProject === 'yes' && (
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Tell us about it <span className="text-gray-400">(optional)</span>
            </label>
            <textarea
              value={formData.projectDescription}
              onChange={(e) => updateFormData({ projectDescription: e.target.value.slice(0, 300) })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows={3}
              placeholder="Brief description of your project..."
            />
            <span className="text-sm text-gray-500">
              {formData.projectDescription?.length || 0}/300
            </span>
          </div>
        )}

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            What are you looking for in our community? <span className="text-red-500">*</span>
            <span className="text-sm font-normal text-gray-600 ml-2">(select all that apply)</span>
          </label>
          <div className="space-y-2">
            {lookingForOptions.map((option) => (
              <label key={option} className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.lookingFor.includes(option)}
                  onChange={() => handleLookingForChange(option)}
                  className="mt-1 w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="text-gray-700 group-hover:text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            What can you offer to the community? <span className="text-red-500">*</span>
            <span className="text-sm font-normal text-gray-600 ml-2">(select all that apply)</span>
          </label>
          <div className="space-y-2">
            {canOfferOptions.map((option) => (
              <label key={option} className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.canOffer.includes(option)}
                  onChange={() => handleCanOfferChange(option)}
                  className="mt-1 w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="text-gray-700 group-hover:text-gray-900">{option}</span>
              </label>
            ))}
          </div>
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

export default Step4Projects;