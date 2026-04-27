import { PrismaNeonHttp } from "@prisma/adapter-neon";
import { PrismaClient } from "../generated/prisma";

function createPrismaClient() {
  const adapter = new PrismaNeonHttp(process.env.DATABASE_URL!, {});
  return new PrismaClient({ adapter });
}

type PrismaInstance = ReturnType<typeof createPrismaClient>;

const globalForPrisma = globalThis as unknown as { prisma: PrismaInstance };

export const prisma: PrismaInstance = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
