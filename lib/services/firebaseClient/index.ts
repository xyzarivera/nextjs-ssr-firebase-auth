import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

/** Initialize Firebase Client SDK*/
export const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp("nextjs-ssr-firebase-auth");

/** Initialize Firebase Auth for Client */
export const firebaseAuth = getAuth(firebaseApp);
