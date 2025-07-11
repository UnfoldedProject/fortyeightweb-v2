import SEO from "@/components/SEO";

export default function TermsOfService() {
  return (
    <>
      <SEO 
        title="Terms of Service - FortyEightWeb"
        description="Terms and conditions for FortyEightWeb website development and automation services"
        canonical="https://www.fortyeightweb.com/terms-of-service"
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-jakarta font-bold fw-text mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using FortyEightWeb's services, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">2. Services</h2>
                <p className="text-gray-700 mb-4">
                  FortyEightWeb provides website development, AI automation, and digital consulting services. 
                  Our "48-hour" delivery commitment refers to business hours and applies to agreed-upon project scope.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">3. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Payment is due upon project completion unless otherwise agreed. All prices are in USD. 
                  Refunds are considered on a case-by-case basis within 7 days of project delivery.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">4. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  Upon full payment, clients receive full ownership of custom code and designs created specifically for their project. 
                  FortyEightWeb retains rights to proprietary tools, frameworks, and methodologies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">5. Client Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  Clients must provide necessary content, credentials, and feedback within agreed timeframes. 
                  Delays in client response may affect project delivery timelines.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  FortyEightWeb's liability is limited to the amount paid for services. We are not responsible for 
                  indirect damages, lost profits, or business interruption.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">7. Termination</h2>
                <p className="text-gray-700 mb-4">
                  Either party may terminate services with written notice. Completed work will be delivered upon payment 
                  of outstanding invoices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-jakarta font-bold fw-text mb-4">8. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These terms are governed by the laws of Ohio, United States. Any disputes will be resolved in Cincinnati, Ohio.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-600 mt-2">
                For questions about these terms, contact us at{" "}
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