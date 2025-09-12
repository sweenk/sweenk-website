import React from 'react';
import { ApplicationData } from '@/components/pages/ApplicationPageClient';

interface Step5ParticipationProps {
  formData: ApplicationData;
  updateFormData: (data: Partial<ApplicationData>) => void;
  submitApplication: () => void;
  prevStep: () => void;
  language: string;
}

const Step5Participation: React.FC<Step5ParticipationProps> = ({
  formData,
  updateFormData,
  submitApplication,
  prevStep,
  language
}) => {
  const validateForm = () => {
    return (
      formData.discordUsername &&
      formData.communicationStyle &&
      formData.timeCommitment
    );
  };

  const canSubmit = validateForm();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
        How You'll Participate
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Discord Username <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-gray-600 mb-2">
            We use Discord for daily community interaction
          </p>
          <input
            type="text"
            value={formData.discordUsername}
            onChange={(e) => updateFormData({ discordUsername: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="@username or username#0000"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Preferred Communication Style <span className="text-red-500">*</span>
          </label>
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="communicationStyle"
                value="active"
                checked={formData.communicationStyle === 'active'}
                onChange={(e) => updateFormData({ communicationStyle: e.target.value as ApplicationData['communicationStyle'] })}
                className="mt-1 w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-purple-500"
              />
              <span className="text-gray-700">I love active daily discussions</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="communicationStyle"
                value="weekly"
                checked={formData.communicationStyle === 'weekly'}
                onChange={(e) => updateFormData({ communicationStyle: e.target.value as ApplicationData['communicationStyle'] })}
                className="mt-1 w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-purple-500"
              />
              <span className="text-gray-700">I prefer weekly check-ins</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="communicationStyle"
                value="lurker"
                checked={formData.communicationStyle === 'lurker'}
                onChange={(e) => updateFormData({ communicationStyle: e.target.value as ApplicationData['communicationStyle'] })}
                className="mt-1 w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-purple-500"
              />
              <span className="text-gray-700">I'll lurk and jump in when relevant</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="communicationStyle"
                value="events"
                checked={formData.communicationStyle === 'events'}
                onChange={(e) => updateFormData({ communicationStyle: e.target.value as ApplicationData['communicationStyle'] })}
                className="mt-1 w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-purple-500"
              />
              <span className="text-gray-700">I'm here for specific events/occasions</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Time Commitment <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-gray-600 mb-2">
            How much time can you dedicate to the community per week?
          </p>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="timeCommitment"
                value="1-2"
                checked={formData.timeCommitment === '1-2'}
                onChange={(e) => updateFormData({ timeCommitment: e.target.value as ApplicationData['timeCommitment'] })}
                className="w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-purple-500"
              />
              <span className="text-gray-700">1-2 hours</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="timeCommitment"
                value="3-5"
                checked={formData.timeCommitment === '3-5'}
                onChange={(e) => updateFormData({ timeCommitment: e.target.value as ApplicationData['timeCommitment'] })}
                className="w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-purple-500"
              />
              <span className="text-gray-700">3-5 hours</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="timeCommitment"
                value="5-10"
                checked={formData.timeCommitment === '5-10'}
                onChange={(e) => updateFormData({ timeCommitment: e.target.value as ApplicationData['timeCommitment'] })}
                className="w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-purple-500"
              />
              <span className="text-gray-700">5-10 hours</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="timeCommitment"
                value="10+"
                checked={formData.timeCommitment === '10+'}
                onChange={(e) => updateFormData({ timeCommitment: e.target.value as ApplicationData['timeCommitment'] })}
                className="w-4 h-4 text-purple-600 bg-white border-gray-300 focus:ring-purple-500"
              />
              <span className="text-gray-700">More than 10 hours</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Anything else you'd like us to know? <span className="text-gray-400">(optional)</span>
          </label>
          <textarea
            value={formData.additionalInfo}
            onChange={(e) => updateFormData({ additionalInfo: e.target.value.slice(0, 200) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            rows={3}
            placeholder="Any additional information..."
          />
          <span className="text-sm text-gray-500">
            {formData.additionalInfo?.length || 0}/200
          </span>
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
          onClick={submitApplication}
          disabled={!canSubmit}
          className={`px-8 py-3 rounded-full font-semibold text-white transition-all ${
            canSubmit 
              ? 'hover:shadow-lg transform hover:-translate-y-0.5' 
              : 'opacity-50 cursor-not-allowed'
          }`}
          style={{ backgroundColor: canSubmit ? 'var(--color-primary)' : '#9CA3AF' }}
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default Step5Participation;