import { Elysia } from 'elysia';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = new Elysia();

app.post('/api/teachers', async ({ body }) => {
  const teacher = await prisma.teacher.create({
    data: body as any
  });
  return teacher;
});

app.get('/api/teachers', async () => {
  return await prisma.teacher.findMany();
});

app.get('/api/teachers/:id', async ({ params }) => {
  const id = parseInt(params.id);
  return await prisma.teacher.findUnique({ where: { id } }) || { error: "Not found" };
});

app.delete('/api/teachers/:id', async ({ params }) => {
  const id = parseInt(params.id);
  await prisma.teacher.delete({ where: { id } });
  return { success: true };
});

export default {
  port: 3000,
  fetch: app.handle
};
