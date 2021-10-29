import type { NextPage } from "next";
import Head from "next/head";
import { Motion, ContentMotion } from "../../src/components/utils/motion";
import { Mutirao } from "../../src/layout/content/zeladoria/mutirao";

const ZeladoriaMutirao: NextPage = () => {
  return (
    <>
      <Head>
        <title>Secretaria Virtual Flor de Jagube</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Motion w="full" initial={ContentMotion.hidden} animate={ContentMotion.visible}>
        <Mutirao />
      </Motion>
    </>
  );
};

export default ZeladoriaMutirao;
