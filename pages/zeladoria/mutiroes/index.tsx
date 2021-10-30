import type { NextPage } from "next";
import Head from "next/head";
import { Motion, ContentMotion } from "../../../src/components/utils/motion";
import { Mutiroes } from "../../../src/layout/content/zeladoria/mutiroes";

const ZeladoriaMutiroes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Secretaria Virtual Flor de Jagube</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Motion w="full" initial={ContentMotion.hidden} animate={ContentMotion.visible}>
        <Mutiroes />
      </Motion>
    </>
  );
};

export default ZeladoriaMutiroes;
