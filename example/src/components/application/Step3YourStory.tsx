import React from 'react';
import { ApplicationData } from '@/components/pages/ApplicationPageClient';

interface Step3YourStoryProps {
  formData: ApplicationData;
  updateFormData: (data: Partial<ApplicationData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  language: string;
}

const groups = [
  { value: 'builder', label: 'Builder (Developer, Engineer, Technical Creator)' },
  { value: 'designer', label: 'Designer (UI/UX, Product, Visual, Creative)' },
  { value: 'business', label: 'Business (Marketing, Sales, Operations, Growth)' },
  { value: 'founder', label: 'Founder/Entrepreneur (Running or starting a business)' },
  { value: 'investor', label: 'Investor/Advisor (Angel, VC, Mentor)' },
  { value: 'student', label: 'Student/Learner (Exploring and growing)' },
  { value: 'other', label: 'Other' }
];

const Step3YourStory: React.FC<Step3YourStoryProps> = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
  language
}) => {
  const validateForm = () => {
    return (
      formData.story.length >= 100 &&
      formData.profession.length >= 2 &&
      formData.group
    );
  };

  const canProceed = validateForm();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
        Tell Us Your Story
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Share what drives you <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-gray-600 mb-2">
            Tell us about your life goals, what you're passionate about, what motivates 
            and inspires you, and where you want to grow. (Min 100 characters)
          </p>
          <textarea
            value={formData.story}
            onChange={(e) => updateFormData({ story: e.target.value.slice(0, 500) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            rows={5}
            placeholder="I'm passionate about..."
          />
          <div className="flex justify-between mt-1">
            <span className={`text-sm ${formData.story.length < 100 ? 'text-red-500' : 'text-gray-500'}`}>
              {formData.story.length < 100 && `${100 - formData.story.length} more characters needed`}
            </span>
            <span className="text-sm text-gray-500">
              {formData.story.length}/500
            </span>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Your Primary Profession <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.profession}
            onChange={(e) => updateFormData({ profession: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="e.g., Software Developer, Designer, Marketing Manager, Student, Founder"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Which group best describes you? <span className="text-red-500">*</span>
          </label>
          <div className="space-y-3">
            {groups.map((group) => (
              <label key={group.value} className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="group"
                  value={group.value}
                  checked={formData.group === group.value}
                  onChange={(e) => updateFormData({ group: e.target.value as ApplicationData['group'] })}
                  className="mt-1 w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-purple-500"
                />
                <span className="text-gray-700 group-hover:text-gray-900">
                  {group.label}
                </span>
              </label>
            ))}
            
            {formData.group === 'other' && (
              <input
                type="text"
                placeholder="Please specify"
                className="ml-7 px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            )}
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

export default Step3YourStory;