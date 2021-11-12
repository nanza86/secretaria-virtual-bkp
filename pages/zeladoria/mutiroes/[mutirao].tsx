import type {
  NextPage,
  GetServerSideProps,
  InferGetStaticPropsType,
} from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Motion, ContentMotion } from "../../../src/components/utils/motion";
import { Mutirao } from "../../../src/layout/content/zeladoria/mutirao";
import { prisma } from "../../../src/database/prisma";

/*export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const listaMutiroes = await prisma.mutirao.findMany();
  // Get the paths we want to pre-render based on posts
  const paths = listaMutiroes.map((mutirao) => ({
    params: { mutirao: mutirao.id },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}*/

export const getServerSideProps: GetServerSideProps = async (context) => {
  const idMutirao = context.query;
  const lista = await prisma.mutirao.findUnique({
    where: {
      id: String(idMutirao.mutirao),
    },
  });
  return {
    props: { lista },
  };
};

const ZeladoriaMutirao: NextPage = (props: any) => {
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
        <Mutirao body={props.lista} />
      </Motion>
    </>
  );
};

export default ZeladoriaMutirao;
