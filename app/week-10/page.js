"use client";

import { useUserAuth } from "./contexts/AuthContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <main className="bg-black min-h-screen p-8 flex flex-col items-center font-sans text-white">
      <div className="w-full max-w-3xl mb-8 border-b-4 border-white pb-2">
        <h1 className="text-4xl font-extrabold text-white uppercase tracking-widest text-center">
          Shopping List App
        </h1>
      </div>
      
      <div className="bg-black w-full max-w-lg p-8 shadow-xl border border-white flex flex-col items-center">
        {!user ? (
          <>
            <p className="mb-4 text-lg">Please sign in to continue</p>
            <button
              onClick={handleSignIn}
              className="bg-white hover:bg-gray-200 text-black font-semibold py-2 px-4 transition-colors"
            >
              Sign in with GitHub
            </button>
          </>
        ) : (
          <>
            <div className="text-center mb-6">
              <p className="text-xl mb-2">
                Welcome, {user.displayName} ({user.email})
              </p>
            </div>
            
            <div className="flex flex-col gap-4 w-full">
              <Link 
                href="/week-9/shopping-list"
                className="bg-white hover:bg-gray-200 text-black font-semibold py-2 px-4 text-center transition-colors"
              >
                Go to Shopping List
              </Link>
              <Link
                href="/week-9/profile"
                className="bg-white hover:bg-gray-200 text-black font-semibold py-2 px-4 text-center transition-colors"
              >
                View Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
