import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-md p-6 border border-gray-200">
          <h1 className="text-xl font-medium mb-6 text-gray-800">Privacy Policy</h1>
          
          <div className="space-y-6 text-sm text-gray-700">
            <p>
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">1. Introduction</h2>
            <p>
              Blue Ocean Records LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the SpamDetector website. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our service.
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">2. Data Collection and Use</h2>
            <p>
              When you use our service, we may collect certain information, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Usage Data: We may collect information on how you access and use our service</li>
              <li>Text Data: Any text you enter into the tool for analysis is processed only for the purpose of identifying spam content</li>
            </ul>
            <p className="mt-2">
              We do not store the text you analyze on our servers beyond the session in which it&apos;s analyzed.
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">3. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">5. Security</h2>
            <p>
              We value your trust in providing us your personal information, thus we strive to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">6. Children&apos;s Privacy</h2>
            <p>
              Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2 className="text-lg font-medium text-gray-800 mt-6">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <address className="not-italic mt-2">
              <div>Blue Ocean Records LLC</div>
              <div>30 N Gould St, STE 4000</div>
              <div>Sheridan, WY, 82801</div>
              <div className="mt-1">
                <a 
                  href="mailto:info@prodbycabo.com" 
                  className="text-blue-500 hover:underline"
                >
                  info@prodbycabo.com
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
    </>
  );
} 