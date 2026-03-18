"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const { user } = useUserAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevents hydration mismatch and flash of unauthenticated state
  }

  if (!user) {
    return (
      <main className="bg-black min-h-screen p-8 flex flex-col items-center justify-center font-sans text-white">
        <p className="text-xl mb-4 text-gray-300">You must be logged in to view your profile.</p>
        <Link 
          href="/week-9" 
          className="text-white hover:text-gray-300 underline transition-colors"
        >
          Go back to Login
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen p-8 flex flex-col items-center font-sans text-white">
      <div className="w-full max-w-3xl mb-8 flex items-center justify-between border-b-4 border-white pb-2">
        <h1 className="text-4xl font-extrabold text-white uppercase tracking-widest text-left">
          User Profile
        </h1>
        <Link 
          href="/week-9" 
          className="bg-white hover:bg-gray-200 text-black px-4 py-2 transition-colors text-sm font-medium"
        >
          &larr; Back to Home
        </Link>
      </div>

      <div className="bg-black border border-white p-8 w-full max-w-lg shadow-xl flex flex-col items-center">
        {user.photoURL ? (
          <img 
            src={user.photoURL} 
            alt="Profile" 
            className="w-32 h-32 mb-6 border-2 border-white shadow-lg object-cover"
          />
        ) : (
          <div className="w-32 h-32 mb-6 bg-black border-2 border-white shadow-lg flex items-center justify-center text-4xl text-white">
            {user.displayName ? user.displayName.charAt(0).toUpperCase() : "?"}
          </div>
        )}

        <div className="w-full space-y-4 text-left mt-2">
          <div className="bg-black p-4 border border-white">
            <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Display Name</span>
            <span className="text-lg text-white font-medium">{user.displayName || "Not provided"}</span>
          </div>

          <div className="bg-black p-4 border border-white">
            <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Email Address</span>
            <span className="text-lg text-white font-medium">{user.email || "Not provided"}</span>
          </div>

          <div className="bg-black p-4 border border-white">
            <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">User ID</span>
            <span className="text-sm font-mono text-gray-300 break-all">{user.uid}</span>
          </div>
        </div>

        <div className="w-full flex justify-center mt-8 pt-6 border-t border-white">
          <Link 
            href="/week-9/shopping-list" 
            className="w-full text-center bg-white hover:bg-gray-200 text-black font-medium py-3 px-6 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            Manage Shopping List
          </Link>
        </div>
      </div>
    </main>
  );
}
