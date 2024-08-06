import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My App</title>
        <meta name="description" content="Pact helps to make impactful decisions out of group discussions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Pact</a>
        </h1>

        <p className={styles.description}>
          Pact helps to make impactful decisions out of group discussions. Easy discussion. Makes team work easy. Discussions are shown as threads, so better organization for your ideas.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Get Started &rarr;</h3>
            <p>Click here to join the conversation!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
