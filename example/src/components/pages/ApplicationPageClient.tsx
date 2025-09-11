'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Step1Welcome from '@/components/application/Step1Welcome';
import Step2BasicInfo from '@/components/application/Step2BasicInfo';
import Step3YourStory from '@/components/application/Step3YourStory';
import Step4Projects from '@/components/application/Step4Projects';
import Step5Participation from '@/components/application/Step5Participation';
import Step6Confirmation from '@/components/application/Step6Confirmation';

export interface ApplicationData {
  // Step 1
  agreedToRules: boolean;
  agreedToTerms: boolean;
  
  // Step 2
  fullName: string;
  dateOfBirth: string;
  country: string;
  city: string;
  socialLink: string;
  
  // Step 3
  story: string;
  profession: string;
  group: 'builder' | 'designer' | 'business' | 'founder' | 'investor' | 'student' | 'other' | '';
  
  // Step 4
  hasProject: 'yes' | 'ideas' | 'learning' | '';
  projectDescription: string;
  lookingFor: string[];
  canOffer: string[];
  
  // Step 5
  discordUsername: string;
  communicationStyle: 'active' | 'weekly' | 'lurker' | 'events' | '';
  timeCommitment: '1-2' | '3-5' | '5-10' | '10+' | '';
  additionalInfo: string;
}

const ApplicationPageClient = () => {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ApplicationData>({
    agreedToRules: false,
    agreedToTerms: false,
    fullName: '',
    dateOfBirth: '',
    country: '',
    city: '',
    socialLink: '',
    story: '',
    profession: '',
    group: '',
    hasProject: '',
    projectDescription: '',
    lookingFor: [],
    canOffer: [],
    discordUsername: '',
    communicationStyle: '',
    timeCommitment: '',
    additionalInfo: ''
  });

  const updateFormData = (data: Partial<ApplicationData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    // TODO: Submit to Firebase
    // const application = {
    //   name: formData.fullName,
    //   date_of_birth: formData.dateOfBirth,
    //   country: formData.country,
    //   city: formData.city,
    //   social_link: formData.socialLink,
    //   story: formData.story,
    //   profession: formData.profession,
    //   group_type: formData.group,
    //   has_project: formData.hasProject,
    //   project_description: formData.projectDescription,
    //   looking_for: formData.lookingFor,
    //   can_offer: formData.canOffer,
    //   discord_username: formData.discordUsername,
    //   communication_style: formData.communicationStyle,
    //   time_commitment: formData.timeCommitment,
    //   additional_notes: formData.additionalInfo,
    //   status: 'pending',
    //   submitted_at: new Date().toISOString()
    // };
    // await saveToFirebase(application);
    
    nextStep();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Welcome
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            language={language}
          />
        );
      case 2:
        return (
          <Step2BasicInfo
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            language={language}
          />
        );
      case 3:
        return (
          <Step3YourStory
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            language={language}
          />
        );
      case 4:
        return (
          <Step4Projects
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            language={language}
          />
        );
      case 5:
        return (
          <Step5Participation
            formData={formData}
            updateFormData={updateFormData}
            submitApplication={handleSubmit}
            prevStep={prevStep}
            language={language}
          />
        );
      case 6:
        return <Step6Confirmation language={language} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-7">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep} of 6
            </span>
            <span className="text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
              {Math.round((currentStep / 6) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${(currentStep / 6) * 100}%`,
                backgroundColor: 'var(--color-primary)'
              }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default ApplicationPageClient;