import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Main.module.css";
import formStyles from "../../styles/Form.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="login page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <Link href={"/"}>NextJS SSR with Firebase Auth</Link>
          </p>
        </div>
        <div className={formStyles.center}>
          <h1>It&apos;s me, hi.</h1>
          <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
            <p>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" {...register("email")} />
            </p>
            <p>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" {...register("password")} />
            </p>
            <button type="submit"> Submit </button>
          </form>
        </div>
        <div className={styles.center}>Some description</div>
      </main>
    </>
  );
}
