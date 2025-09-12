import { Layout } from "@/components";
import { useState } from "react";

export default function EnterprisePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    employees: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

    // Validate required fields
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.employees) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields"
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

    try {
      // TODO: Implement actual form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        type: "success",
        message: "Thank you for your interest! Our enterprise team will contact you within 24 hours."
      });
      setFormData({ 
        companyName: "", 
        contactName: "", 
        email: "", 
        phone: "",
        employees: "",
        message: "" 
      });
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
    <Layout title="For Enterprise">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Build Custom Applications with Sweenk
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Transform your business with custom AI-powered applications built on the Sweenk platform. 
          Our enterprise solutions help you leverage the power of conversational AI to streamline operations, 
          enhance customer experiences, and drive innovation.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Enterprise Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="text-gray-700">Custom AI applications tailored to your business needs</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="text-gray-700">Dedicated support and onboarding</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="text-gray-700">Advanced security and compliance features</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="text-gray-700">Scalable infrastructure for growing teams</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="text-gray-700">API access and integration capabilities</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="text-gray-700">Priority feature development</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Get Started with Enterprise
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your Company"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                disabled={isSubmitting}
                required
              />
            </div>

            <div>
              <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Name *
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                disabled={isSubmitting}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Business Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                disabled={isSubmitting}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="employees" className="block text-sm font-semibold text-gray-700 mb-2">
              Company Size *
            </label>
            <select
              id="employees"
              name="employees"
              value={formData.employees}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
              disabled={isSubmitting}
              required
            >
              <option value="">Select company size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501-1000">501-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your use case, requirements, or any specific needs..."
              rows={6}
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
            className="w-full md:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </Layout>
  );
}