"use server";
import { prisma } from "~/lib/db";

export interface InfoProps {
  name: string;
  bio: string;
}

export interface DetailsProps {
  name: string;
  price: string;
  description: string;
}

export async function updateInfo(info: InfoProps, id: string) {
  return await prisma.user.update({
    where: { id },
    data: { ...info },
  });
}

export async function updateSocials(socials: any, id: string) {
  return await prisma.user.update({
    where: { id },
    data: { ...socials },
  });
}

export async function createProduct(userId: string) {
  return await prisma.product.create({ data: { userId } });
}

export async function updateDetails(formData: FormData, id: string) {
  const details = {
    name: formData.get("name") as string,
    price: formData.get("price") as string,
    description: formData.get("description") as string,
  };
  return await prisma.product.update({ where: { id }, data: { ...details } });
}

export async function getProduct(id: string) {
  return await prisma.product.findFirst({ where: { id } });
}

export async function getProducts(userId: string) {
  return await prisma.product.findMany({ where: { userId } });
}

export async function updateProductImage(path: string, id: string) {
  return await prisma.product.update({ where: { id }, data: { image: path } });
}

export async function deleteProduct(id: string) {
  return await prisma.product.delete({ where: { id }});
}