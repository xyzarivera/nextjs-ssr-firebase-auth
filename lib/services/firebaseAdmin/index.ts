import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

/** Initialize Firebase Admin SDK*/
export const firebaseAdminApp = !getApps().length
  ? initializeApp()
  : getApp("nextjs-ssr-firebase-auth");

/** Initialize Firebase Auth for Server */
export const firebaseAdminAuth = getAuth(firebaseAdminApp);

/** Initialize Firestore for Server */
export const firestore = getFirestore(firebaseAdminApp);
