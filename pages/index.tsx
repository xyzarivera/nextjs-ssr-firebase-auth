import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Main.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS SSR with Firebase Auth</title>
        <meta name="description" content="study application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <Link href={"/"}>NextJS SSR with Firebase Auth</Link>
          </p>
          <div>
            <Link href={"/login"}>Login</Link>
          </div>
        </div>
        {/** Unprotected */}
        <div className={styles.center}>
          <h1>You&apos;re not allowed here.</h1>
        </div>
        <div className={styles.grid}>
          <a
            href="https://github.com/xyzarivera/nextjs-ssr-firebase-auth"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {"Code "}
              <span>&gt;</span>
            </h2>
            <p className={inter.className}>Github Repository</p>
          </a>
        </div>
        {/** Protected */}
        <div className={styles.center}>
          <h1>You&apos;re here.</h1>
        </div>
        <div className={styles.grid}>
          <a
            href="https://github.com/xyzarivera/nextjs-ssr-firebase-auth"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {"Code "}
              <span>&gt;</span>
            </h2>
            <p className={inter.className}>Github Repository</p>
          </a>
        </div>
      </main>
    </>
  );
}
