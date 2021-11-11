import { prisma } from "../src/database/prisma";

export async function getStaticProps() {
  const mutiroes = await prisma.mutirao.findMany();
  return { props: { mutiroes } };
}

const Index = (props: any) => {
  const listMutiroes = props.mutiroes;
  console.log(listMutiroes);
  return (
    <>
      {listMutiroes.map((item: any, key: number) => {
        return (
          <div key={key}>{item.nome}</div>
        );
      })}
    </>
  );
}
export default Index;