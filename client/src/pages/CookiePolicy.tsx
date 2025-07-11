import SEO from "@/components/SEO";

export default function CookiePolicy() {
  return (
    <>
      <SEO 
        title="Cookie Policy - FortyEightWeb"
        description="Cookie policy for FortyEightWeb website development and automation services"
        canonical="https://www.fortyeightweb.com/cookie-policy"
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-jakarta font-bold fw-text mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">What Are Cookies?</h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They help websites remember your preferences and improve your browsing experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">
                  FortyEightWeb uses cookies to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve website performance and functionality</li>
                  <li>Provide personalized content and recommendations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-jakarta font-bold fw-text mb-2">Essential Cookies</h3>
                    <p className="text-gray-700">
                      These cookies are necessary for the website to function properly. They enable core functionality 
                      such as security, network management, and accessibility.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-jakarta font-bold fw-text mb-2">Analytics Cookies</h3>
                    <p className="text-gray-700">
                      We use Google Analytics to understand how visitors interact with our website. These cookies help 
                      us improve our content and user experience.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-jakarta font-bold fw-text mb-2">Performance Cookies</h3>
                    <p className="text-gray-700">
                      These cookies collect information about how you use our website, such as which pages you visit most often. 
                      This helps us optimize our site performance.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We use several third-party services that may set cookies on your device:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                  <li><strong>Stripe:</strong> For secure payment processing</li>
                  <li><strong>Calendly:</strong> For scheduling consultations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">Managing Cookies</h2>
                <p className="text-gray-700 mb-4">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your 
                  computer and you can set most browsers to prevent them from being placed.
                </p>
                <p className="text-gray-700 mb-4">
                  To manage cookies in your browser:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings → Site permissions → Cookies and site data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">Consent</h2>
                <p className="text-gray-700 mb-4">
                  By using our website, you consent to our use of cookies in accordance with this Cookie Policy. 
                  If you do not agree to our use of cookies, please adjust your browser settings or do not use our website.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-600 mt-2">
                For questions about our Cookie Policy, contact us at{" "}
                <a href="mailto:ops@fortyeightweb.com" className="text-[hsl(186,64%,61%)] hover:text-[hsl(181,75%,40%)]">
                  ops@fortyeightweb.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}