import Head from "next/head";
import "../app/globals.css";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 md:p-8 text-white">
      <Head>
        <title>Terms of Service - Pact</title>
        <meta name="description" content="Terms of Service for Pact" />
      </Head>

      <main className="w-full max-w-4xl p-6 sm:p-8 bg-gray-800 text-white rounded-lg shadow-md mt-8 mb-8 mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-base sm:text-lg mb-6">Effective Date: August 1, 2024</p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">1. Acceptance of Terms</h2>
        <p className="text-sm sm:text-base mb-4">
          By accessing or using the Pact app, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you must not use the app.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">2. Use of the App</h2>
        <p className="text-sm sm:text-base mb-4">
          You agree to use the Pact app only for lawful purposes and in accordance with these Terms of Service. You must not use the app:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>In any way that violates applicable laws or regulations.</li>
          <li>To transmit or facilitate the transmission of any content that is unlawful, harmful, or offensive.</li>
          <li>To engage in any activity that could damage, disable, or impair the app or interfere with other users’ use of the app.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">3. User Accounts</h2>
        <p className="text-sm sm:text-base mb-4">
          You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">4. Intellectual Property</h2>
        <p className="text-sm sm:text-base mb-4">
          All content and materials provided through the Pact app, including but not limited to text, graphics, logos, and software, are the property of Xooniverse and are protected by intellectual property laws. You may not use, copy, or distribute any content from the app without our express written permission.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">5. Disclaimers</h2>
        <p className="text-sm sm:text-base mb-4">
          The Pact app is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. We make no warranties or representations about the accuracy, reliability, or completeness of the app or its content. We disclaim all warranties, whether express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">6. Limitation of Liability</h2>
        <p className="text-sm sm:text-base mb-4">
          To the maximum extent permitted by law, Xooniverse shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising out of or in connection with your use of the Pact app.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">7. Indemnification</h2>
        <p className="text-sm sm:text-base mb-4">
          You agree to indemnify and hold harmless Xooniverse and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses, including reasonable attorneys’ fees, arising out of or related to your use of the Pact app or any violation of these Terms of Service.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">8. Changes to Terms</h2>
        <p className="text-sm sm:text-base mb-4">
          We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the app following any changes constitutes your acceptance of the new terms.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">9. Governing Law</h2>
        <p className="text-sm sm:text-base mb-4">
          These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which Xooniverse is located, without regard to its conflict of law principles.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">10. Contact Us</h2>
        <p className="text-sm sm:text-base mb-4">
          If you have any questions about these Terms of Service, please contact us at <a href="mailto:xooniverse@gmail.com" className="text-blue-400 underline">xooniverse@gmail.com</a>.
        </p>

        <hr className="my-6 border-gray-600" />
        <p className="text-sm sm:text-base">
          These Terms of Service are effective as of August 1, 2024.
        </p>
      </main>
    </div>
  );
}
