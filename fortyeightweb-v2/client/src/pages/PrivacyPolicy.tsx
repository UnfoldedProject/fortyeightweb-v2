import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy - FortyEightWeb"
        description="Privacy policy for FortyEightWeb website development and automation services"
        canonical="https://www.fortyeightweb.com/privacy-policy"
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-jakarta font-bold fw-text mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, such as when you contact us, request services, 
                  or subscribe to our newsletter. This includes name, email address, phone number, and project details.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">2. How We Use Information</h2>
                <p className="text-gray-700 mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about projects</li>
                  <li>Send newsletters and updates (with your consent)</li>
                  <li>Analyze usage patterns to improve our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">3. Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your information to third parties except:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>With your consent</li>
                  <li>To trusted service providers who assist in operations</li>
                  <li>When required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">4. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your information. However, no method of 
                  transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">5. Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  Our website uses cookies to enhance user experience and analytics. You can disable cookies in your 
                  browser settings, though this may affect site functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">6. Third-Party Services</h2>
                <p className="text-gray-700 mb-4">
                  We use third-party services including Google Analytics, Airtable, and Stripe. These services have 
                  their own privacy policies governing their use of your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">7. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to access, update, or delete your personal information. You may also 
                  unsubscribe from our communications at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">8. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:ops@fortyeightweb.com" className="text-[hsl(186,64%,61%)] hover:text-[hsl(181,75%,40%)]">
                    ops@fortyeightweb.com
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}