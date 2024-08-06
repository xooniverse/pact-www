import Head from "next/head";
import '../globals.css'

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 md:p-8 text-white">
      <Head>
        <title>Privacy Policy - Pact</title>
        <meta name="description" content="Privacy Policy for Pact" />
      </Head>

      <main className="w-full max-w-4xl p-6 sm:p-8 bg-gray-800 text-white rounded-lg shadow-md mt-8 mb-8 mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-base sm:text-lg mb-6">Effective Date: August 1, 2024</p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">Introduction</h2>
        <p className="text-sm sm:text-base mb-4">
          Welcome to Pact, a service offered by Xooniverse. We are committed to safeguarding your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our app.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">1. Data Collection</h2>
        <p className="text-sm sm:text-base mb-4">
          We collect the following types of data when you use the Pact app:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li><strong>Personal Information:</strong> Your name, phone number, and profile picture. While providing your name and profile picture is optional, phone number verification is required during sign-up.</li>
          <li><strong>In-App Data:</strong> Information related to your discussions, comments, votes, and teams you join.</li>
        </ul>
        <p className="text-sm sm:text-base mb-6">
          We take the protection of your personal data seriously and do not sell or share your information with third parties.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">2. App Permissions</h2>
        <p className="text-sm sm:text-base mb-4">
          To enhance your experience, we request the following permissions:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Contacts:</strong> To facilitate group creation with your Pact contacts.</li>
          <li><strong>Photo Album/Gallery:</strong> To upload profile pictures, team photos, and discussion-related images.</li>
          <li><strong>Camera:</strong> To capture new photos for profiles or teams.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">3. Use of Firebase Services</h2>
        <p className="text-sm sm:text-base mb-4">
          We utilize Firebase services for backend operations. By using our app, you agree to Firebase&apos;s terms of service. For further details, please refer to the <a href="https://firebase.google.com/terms" className="text-blue-400 underline">Firebase Terms of Service</a>.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">4. Google Analytics</h2>
        <p className="text-sm sm:text-base mb-4">
          We use Google Analytics to monitor app usage. Google Analytics does not collect personally identifiable information. For more information, please see the <a href="https://policies.google.com/privacy" className="text-blue-400 underline">Google Analytics Privacy Policy</a>.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">5. Account Deletion</h2>
        <p className="text-sm sm:text-base mb-4">
          You have the option to delete your account at any time through the Pact app. Simply navigate to the profile section and select &quot;Delete My Account&quot; to proceed.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">6. Contact Us</h2>
        <p className="text-sm sm:text-base mb-4">
          If you have any questions or concerns about this Privacy Policy, please reach out to us at <a href="mailto:xooniverse@gmail.com" className="text-blue-400 underline">xooniverse@gmail.com</a>.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">7. Changes to This Privacy Policy</h2>
        <p className="text-sm sm:text-base mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically.
        </p>

        <hr className="my-6 border-gray-600" />
        <p className="text-sm sm:text-base">
          This Privacy Policy is effective as of August 1, 2024.
        </p>
      </main>
    </div>
  );
}
