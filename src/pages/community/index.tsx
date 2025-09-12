import { Layout } from "@/components";
import { useState } from "react";

export default function CommunityPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    socialUrl: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate form
    if (!formData.email || !formData.name || !formData.socialUrl || !formData.reason) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address"
      });
      setIsSubmitting(false);
      return;
    }

    // URL validation (basic)
    try {
      new URL(formData.socialUrl);
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid URL for your social media profile"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: Implement actual form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        type: "success",
        message: "Thank you for applying! We'll review your application and get back to you soon."
      });
      setFormData({ email: "", name: "", socialUrl: "", reason: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to submit application. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="Join Our Community">
      <div className="mb-8">
        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Do you love testing cutting-edge features before anyone else? Are you passionate about shaping the future of AI-powered conversations? Then <span className="font-bold">be at the edge of innovation</span> with Sweenk.
          </p>
          <p className="text-gray-700">
            Join our exclusive community of early adopters and be part of Sweenk's development journey. Get early access to new features, 
            provide valuable feedback directly to our team, and connect with like-minded innovators who are pushing the boundaries of what's possible with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border-2 border-gray-100 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">What You'll Get</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Early access to beta features</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Free credits and discounts</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Direct line to the development team</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Exclusive community events and AMAs</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Shape the product roadmap with your feedback</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-100 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Who We're Looking For</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Tech enthusiasts and early adopters</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Active community contributors</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Developers and creators</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Anyone passionate about AI innovation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Apply to Join
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="socialUrl" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Most Active Social Media Profile
            </label>
            <input
              type="url"
              id="socialUrl"
              name="socialUrl"
              value={formData.socialUrl}
              onChange={handleChange}
              placeholder="https://twitter.com/yourhandle"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
              Why do you want to join our community?
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Tell us about your interest in Sweenk, what excites you about AI, and how you'd like to contribute to our community..."
              rows={5}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
              disabled={isSubmitting}
            />
          </div>

          {submitStatus && (
            <div className={`p-4 rounded-lg ${
              submitStatus.type === "success" 
                ? "bg-green-100 text-green-700" 
                : "bg-red-100 text-red-700"
            }`}>
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </Layout>
  );
}