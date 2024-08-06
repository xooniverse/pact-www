'use client';

import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image
 from "next/image";
export default function DeleteAccount() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 md:p-8 text-white">
      <Head>
        <title>Delete Account - Pact</title>
        <meta name="description" content="Instructions on how to delete your Pact account" />
      </Head>

      <main className="w-full max-w-4xl p-6 sm:p-8 bg-gray-800 text-white rounded-lg shadow-md mt-8 mb-8 mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">How to Delete Your Account</h1>

        <ol className="list-decimal list-inside mb-8 space-y-2">
          <li>Open the Pact app.</li>
          <li>Tap on <strong>Profile</strong> on the navigation bar at the bottom.</li>
          <li>On the profile screen, tap on the <strong>Delete My Account</strong> tile at the bottom.</li>
          <li>Account deletion information will be provided on the screen.</li>
          <li>
            You will need to re-authenticate to verify it iss you before account deletion. To re-authenticate, press on the <strong>Verify It&apos;s You</strong> button.
          </li>
          <li>An authentication flow will be started now, sending OTP to your registered phone number.</li>
          <li>On successful re-authentication, you will be presented with the <strong>Delete Account</strong> button. Press it to continue.</li>
          <li>You&apos;ll be presented with a final pop-up asking for confirmation. Press confirm.</li>
          <li>Your account and related data will shortly be deleted.</li>
        </ol>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 mb-6">Screenshots</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={4}
          className="w-full h-64 sm:h-80"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`/screenshots/screenshot-${index + 1}.png`}
                alt={`Screenshot ${index + 1}`}
                className="w-auto h-full rounded-lg shadow-md object-contain mx-auto"
                width={600}
                height={800}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}
