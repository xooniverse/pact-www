import Head from "next/head";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <Head>
        <title>Pact - Make Informed Decisions</title>
        <meta name="description" content="Pact helps to make impactful decisions out of group discussions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-lg opacity-75"></div>
          <Image src="/icon.png" alt="Pact Logo" width={150} height={150} className="relative z-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mt-6">Pact</h1>
        <p className="mt-3 text-xl md:text-2xl">Make Informed Decisions</p>
        <p className="mt-3 text-lg max-w-xl">Pact simplifies teamwork by turning chaotic discussions into organized, actionable plans. Our thread-based format helps you focus on what matters and make better decisions together.</p>
        <div className="mt-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200">
              <FaGooglePlay className="mr-2" />
              Get it on Play Store
            </button>
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200">
              <FaApple className="mr-2" />
              Get it on App Store
            </button>
          </a>
        </div>
      </main>

      <footer className="w-full h-24 flex items-center justify-center border-t border-gray-600">
        <p className="text-center text-sm text-gray-400">© {new Date().getFullYear()} Pact. All rights reserved.</p>
      </footer>
    </div>
  );
}
