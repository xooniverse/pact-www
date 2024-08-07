"use client";
import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';
import { collection, addDoc } from 'firebase/firestore';
// This is not included with the code repo (make one yourself with the Firebase Keys)
import { db } from '../../firebase';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'feedback'), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white pt-12">
      <Head>
        <title>Contact Us - Pact</title>
        <meta name="description" content="Contact the developers of Pact." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-lg opacity-75"></div>
          <Image src="/icon.png" alt="Pact Logo" width={150} height={150} className="relative z-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">Contact Us</h1>
        <p className="text-xl md:text-2xl mb-6">We&apos;d love to hear from you!</p>

        {submitted ? (
          <p className="mt-5 text-lg">Thank you for your message! We&apos;ll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 w-full max-w-lg bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-left mb-2 text-lg">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-100 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left mb-2 text-lg">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-100 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left mb-2 text-lg">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-md bg-gray-100 text-black"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors text-white"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-12 max-w-lg w-full mb-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Address:</h3>
                <p>9/486, Aramana House <br /> Nanminda PO, Kozhikode, Kerala</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone:</h3>
                <p>+971 585817160</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email:</h3>
                <p>xooniverse@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full h-24 flex items-center justify-center border-t border-gray-600">
        <p className="text-center text-sm text-gray-400">© {new Date().getFullYear()} Pact. All rights reserved.</p>
      </footer>
    </div>
  );
}
