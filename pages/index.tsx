import type { NextPage } from "next";
import Head from "next/head";
import { Motion, ContentMotion } from "../src/components/utils/motion";
import { Dashboard } from "../src/layout/content/dashboard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Motion initial={ContentMotion.hidden} animate={ContentMotion.visible}>
        <Dashboard />
      </Motion>
    </>
  );
};

export default Home;
