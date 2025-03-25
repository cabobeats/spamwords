import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Spam Words Detector',
  description: 'Terms and Conditions for using the Spam Words Detector tool. Review our usage policies for our free spam content analysis service.',
  keywords: 'terms and conditions, terms of service, usage terms, spam detector terms, service agreement',
  alternates: {
    canonical: 'https://spamwords.xyz/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="bg-white rounded-md p-6 border border-gray-200">
          <h1 className="text-xl font-medium mb-6 text-gray-800">Terms and Conditions</h1>
          
          <div className="space-y-6 text-sm text-gray-700">
            <p>
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">1. Introduction</h2>
            <p>
              Welcome to SpamDetector. These Terms and Conditions govern your use of our website and services provided by Blue Ocean Records LLC.
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">2. Acceptance of Terms</h2>
            <p>
              By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">3. Description of Service</h2>
            <p>
              SpamDetector provides tools to identify potential spam words and phrases in text content. The service is provided &quot;as is&quot; without warranties of any kind.
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">4. Limitations of Use</h2>
            <p>
              You may use our service for lawful purposes only. You may not use our service:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>In any way that violates any applicable national or international law or regulation</li>
              <li>To engage in any activity that could harm or disrupt our services</li>
              <li>To attempt to gain unauthorized access to our systems</li>
            </ul>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">5. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are owned by Blue Ocean Records LLC and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">6. Disclaimer</h2>
            <p>
              Our service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not warrant that the service will be uninterrupted, timely, secure, or error-free.
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">7. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <address className="not-italic mt-2">
              <div>Blue Ocean Records LLC</div>
              <div>30 N Gould St, STE 4000</div>
              <div>Sheridan, WY, 82801</div>
              <div className="mt-1">
                <a 
                  href="mailto:info@cabobeats.com"
                  className="text-blue-500 hover:underline"
                >
                  info@cabobeats.com
                </a>
              </div>
            </address>
          </div>
          
          <div className="mt-8">
            <Link href="/" className="text-blue-500 hover:underline text-sm">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 