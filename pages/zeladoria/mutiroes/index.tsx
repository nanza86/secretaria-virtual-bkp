import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Motion, ContentMotion } from "../../../src/components/utils/motion";
import { Mutiroes } from "../../../src/layout/content/zeladoria/mutiroes";
import { prisma } from "../../../src/database/prisma"

export const getStaticProps: GetStaticProps = async () => {
  const listaMutiroes = await prisma.mutirao.findMany();
  return {
    props: { listaMutiroes },
    revalidate: 0,
  };
};

const ZeladoriaMutiroes: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Secretaria Virtual Flor de Jagube</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Motion
        w="full"
        initial={ContentMotion.hidden}
        animate={ContentMotion.visible}
      >
        <Mutiroes lista={props.listaMutiroes} />
      </Motion>
    </>
  );
};

export default ZeladoriaMutiroes;
