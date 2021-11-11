// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../src/database/prisma";

export default async function updateMutirao(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query, body } = req;
  if (method !== "POST") {
    return res.status(405).json({ message: "só post que pode!" });
  }
  try {
    const queryId = query.crud;
    const mutiroes = await prisma.mutirao.delete({
      where: { id: queryId },
    });
    res.status(200).json(mutiroes);
  } catch (e) {
    res.json(e);
  }
}
