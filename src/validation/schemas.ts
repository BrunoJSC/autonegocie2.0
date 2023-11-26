import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export const adminSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const carSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  fip: z.string().min(1, { message: "Fip is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  brandCar: z.string().min(1, { message: "BrandCar is required" }),
  modelCar: z.string().min(1, { message: "ModelCar is required" }),
  bodyType: z.string().min(1, { message: "BodyType is required" }),
  mechanic: z.string().min(1, { message: "Mechanic is required" }),
  plate: z.string().min(1, { message: "Plate is required" }),
  auction: z.string().min(1, { message: "Auction is required" }),
  yearFabrication: z
    .number()
    .min(1, { message: "YearFabrication is required" }),
  yearModification: z
    .number()
    .min(1, { message: "Year Modification is required" }),
  color: z.string().min(1, { message: "Color is required" }),
  doors: z.number().min(1, { message: "Doors is required" }),
  fuel: z.string().min(1, { message: "Fuel is required" }),
  km: z.number().min(1, { message: "Km is required" }),
  accessories: z
    .array(z.string())
    .min(1, { message: "Accessories is required" }),
  price: z.number().min(1, { message: "Price is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  images: z.array(z.string()).min(1, { message: "Images is required" }),
});
