import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import utilStyle from "../styles/utils.module.css";
import Link from "next/link";
import { getPostsData } from "../lib/post";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        <section className={utilStyle.headingMd}>
          <p>
            ゴーシュは夜過ぎばだした。先生は十啼く狸のようになっと来まし。工合は火花どなりたりおれが落ちついて来な。
          </p>
        </section>

        <section>
          <h2>📝エンジニアブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img
                    src={`${thumbnail}`}
                    alt={`${title}`}
                    className={styles.thumbnailImage}
                  />
                </Link>
                <Link href={`/posts/${id}`}>
                  <p className={utilStyle.boldText}>{title}</p>
                </Link>
                <small className={utilStyle.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
