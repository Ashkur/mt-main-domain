import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>This is the Main Domain application</h1>

      <Link href="/sub-domain">
        <a>Go to sub-domain</a>
      </Link>
    </div>
  );
};

export default Home;
