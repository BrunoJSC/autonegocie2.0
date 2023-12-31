import { z } from "zod";

const regexCelular = /^\([1-9]{2}\) 9[0-9]{4}-[0-9]{4}$/;

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

// const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];

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
  email: z.string().email({ message: "Email is invalid" }),
  fip: z.string().min(1, { message: "FIP is required" }),
  phone: z
    .string()
    .min(1, { message: "Phone is required" })
    .regex(regexCelular, { message: "Phone is invalid" }),
  location: z.string().min(1, { message: "Location is required" }),
  brandCar: z.string().min(1, { message: "Brand is required" }),
  modelCar: z.string().min(1, { message: "Model is required" }),
  bodyType: z.string().min(1, { message: "Body Type is required" }),
  mechanic: z.string().min(1, { message: "Mechanic is required" }),
  plate: z.string().min(1, { message: "Plate is required" }),
  auction: z.string().min(1, { message: "Auction is required" }),
  yearFabrication: z
    .string()
    .min(1, { message: "Year Fabrication is required" }),
  yearModification: z
    .string()
    .min(1, { message: "Year Modification is required" }),
  color: z.string().min(1, { message: "Color is required" }),
  doors: z.string().min(1, { message: "Doors is required" }),
  fuel: z.string().min(1, { message: "Fuel is required" }),
  km: z.string().min(1, { message: "Km is required" }),
  accessories: z.string().min(1, { message: "Accessories is required" }),

  price: z.string().min(1, { message: "Price is required" }),

  description: z.string().min(1, { message: "Description is required" }),
  images: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

export const motorbikeSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is invalid" }),
  fip: z.string().min(1, { message: "FIP is required" }),
  phone: z
    .string()
    .min(1, { message: "Phone is required" })
    .regex(regexCelular, { message: "Phone is invalid" }),
  location: z.string().min(1, { message: "Location is required" }),
  motorbikeBrand: z.string().min(1, { message: "Brand is required" }),
  motorbikeModel: z.string().min(1, { message: "Model is required" }),

  mechanic: z.string().min(1, { message: "Mechanic is required" }),
  plate: z.string().min(1, { message: "Plate is required" }),
  auction: z.string().min(1, { message: "Auction is required" }),
  yearFabrication: z
    .string()
    .min(1, { message: "Year Fabrication is required" }),
  yearModification: z
    .string()
    .min(1, { message: "Year Modification is required" }),
  color: z.string().min(1, { message: "Color is required" }),

  fuel: z.string().min(1, { message: "Fuel is required" }),
  km: z.string().min(1, { message: "Km is required" }),
  price: z.string().min(1, { message: "Price is required" }),

  description: z.string().min(1, { message: "Description is required" }),
  images: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

export const searchSchema = z.object({
  searchBrand: z.string(),
  searchModel: z.string(),
  minPrice: z.string().optional(),
  maxPrice: z.string().optional(),
  minYear: z.string().optional(),
  maxYear: z.string().optional(),
  searchAccessories: z.string().optional(),
  minKm: z.string().optional(),
  maxKm: z.string().optional(),
});
