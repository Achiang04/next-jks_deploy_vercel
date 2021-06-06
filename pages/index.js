import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepages</h1>
        <p className={styles.text}>
          ini home page ini home page ini home page ini home page ini home
          pageini home page ini home page ini home page ini home pageini home
          page ini home pageini home page ini home page ini home page ini home
          page ini home page ini home page ini home page{" "}
        </p>
        <p className={styles.text}>
          ini home page ini home page ini home page ini home page ini home
          pageini home page ini home page ini home page ini home pageini home
          page ini home pageini home page ini home page ini home page ini home
          page ini home page ini home page ini home page{" "}
        </p>
        <Link href="ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
