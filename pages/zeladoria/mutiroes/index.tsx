import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { Motion, ContentMotion } from "../../../src/components/utils/motion";
import { MutiroesList } from "../../../src/layout/content/zeladoria/mutirao/list";
import { prisma } from "../../../src/database/prisma";

export const getServerSideProps: GetServerSideProps = async () => {
  const listaMutiroes = await prisma.mutirao.findMany({
    orderBy: {
      data_mutirao: 'desc',
    },  
  });
  return {
    props: { listaMutiroes },
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
        <MutiroesList lista={props.listaMutiroes} />
      </Motion>
    </>
  );
};

export default ZeladoriaMutiroes;
