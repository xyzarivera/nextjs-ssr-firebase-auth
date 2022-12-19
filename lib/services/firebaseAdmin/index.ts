import { getApp, getApps, initializeApp } from "firebase/app";

/** Initialize Firebase Admin SDK*/
export const firebaseAdminApp = !getApps().length
  ? initializeApp()
  : getApp("nextjs-ssr-firebase-auth");
