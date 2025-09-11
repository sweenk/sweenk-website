import React from "react";
import { AnimatedBackground } from "@/components/animatedBackground/animatedBackground";

interface PricingProps {}

export const Pricing: React.FC<PricingProps> = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden py-20 lg:py-24 bg-gray-50"
    >
      {/* Animated Background - Full Width */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main gray background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-50/80 to-gray-50"></div>
        
        {/* Large animated gradient orbs using brand colors - Much larger sizes */}
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-primary/40 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-secondary/40 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-48 left-0 w-[700px] h-[700px] bg-tertiary/40 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
        
        {/* Additional massive orbs for more movement */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/30 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-0 w-[750px] h-[750px] bg-secondary/25 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-tertiary/30 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
        
        {/* Extra large orbs */}
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-primary/25 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 -left-24 w-[500px] h-[500px] bg-secondary/30 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 via-transparent to-gray-50/50"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#A371F7' }}>
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From personal news consumption to powering your AI agents with real-time news data
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Perfect for getting started</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">5 topics to follow</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">10 questions per day</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Basic personalization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-400">Customizable delivery styles</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-400">Daily/weekly podcast</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-400">Social media trends</span>
              </li>
            </ul>
            
            <button className="w-full py-3 px-6 rounded-lg border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Premium Plan - Larger */}
          <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow relative border-2 border-purple-600 transform scale-105 md:-mt-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$20</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">For power users</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Unlimited</strong> topics to follow</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Unlimited</strong> questions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Customizable delivery styles</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Daily/weekly podcast</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Social media trend analysis</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Early access to new features</span>
              </li>
            </ul>
            
            <button className="w-full py-3 px-6 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors">
              Get Premium
            </button>
          </div>

          {/* MCP Server Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Enterprise</h3>
              <p className="text-gray-600">First news MCP server for AI agents</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Stream of latest articles</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Breaking news alerts</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Sentiment analysis</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Semantic search</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Trends & analytics</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">API access & integration</span>
              </li>
            </ul>
            
            <button className="w-full py-3 px-6 rounded-lg border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            All plans include basic features. Upgrade anytime. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};