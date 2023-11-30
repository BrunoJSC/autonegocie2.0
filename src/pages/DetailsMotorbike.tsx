import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { db } from "@/firebase";
import { Main } from "@/layout/Main";
import { IMotorbike } from "@/types";
import { contactSchema } from "@/validation/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export function DetailsMotorbike() {
  const location = useLocation();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const state = location.state as { data: IMotorbike };
  const motorbike = state?.data;

  const handleSubmit = async (data: z.infer<typeof contactSchema>) => {
    await addDoc(collection(db, "contact"), {
      id: uuidv4(),
      name: data.name,
      email: data.email,
      message: data.message,
    });

    form.reset();
    console.log(data);
  };

  return (
    <>
      <Header />
      <Main>
        <section className="w-full min-h-screen">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="w-full aspect-w-16 aspect-h-9">
              <AspectRatio ratio={16 / 9}>
                {motorbike.images && motorbike.images.length > 0 ? (
                  motorbike.images.map((image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Car Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ))
                ) : (
                  <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">Imagem Indisponível</span>
                  </div>
                )}
              </AspectRatio>
            </div>

            <Card className="w-full mt-5 flex flex-col md:flex-row justify-between p-4">
              <div>
                <CardHeader>
                  <CardTitle className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#282828]">
                    {motorbike.motorbikeBrand}
                    <span className="text-green-500">
                      {" "}
                      {motorbike.motorbikeModel}
                    </span>
                  </CardTitle>
                  <CardDescription>{motorbike.yearFabrication}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-bold">Cidade</p>
                      <p className="text-green-500 font-bold">
                        {motorbike.location}
                      </p>
                    </div>

                    <div>
                      <p className="font-bold">KM</p>
                      <p className="text-green-500 font-bold">{motorbike.km}</p>
                    </div>

                    <div>
                      <p className="font-bold">Ano</p>
                      <div className="flex gap-2">
                        <p className="text-green-500 font-bold">
                          {motorbike.yearFabrication}
                        </p>
                        -
                        <p className="text-green-500 font-bold">
                          {motorbike.yearModification}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="font-bold">Combustível</p>
                      <p className="text-green-500 font-bold">
                        {motorbike.fuel}
                      </p>
                    </div>

                    <div>
                      <p className="font-bold">Cor</p>
                      <p className="text-green-500 font-bold">
                        {motorbike.color}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold">Descricão</p>
                    <p className="text-gray-500 font-bold">
                      {motorbike.description}
                    </p>
                  </div>

                  {/* <div>
                    {car?.accessories &&
                      car?.accessories?.map((accessory, index) => (
                        <div key={index}>
                          <p className="font-bold">Acessórios</p>
                          <p className="text-gray-500 font-bold">{accessory}</p>
                        </div>
                      ))}
                  </div> */}
                </CardContent>
              </div>

              <div className="w-full md:w-96 ">
                <div className="p-4 bg-green-500  rounded-md">
                  <p className="text-white font-bold">R${motorbike.price}</p>
                </div>
                <Form {...form}>
                  <div className="mt-5 mb-5">
                    <h2 className="text-[24px] font-bold text-green-500">
                      Entre em contato com o Vendedor!
                    </h2>
                    <p className="text-[16px]  text-gray-400">
                      Coloque seus dados*
                    </p>
                  </div>
                  <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="w-[409px] h-[547px] bg-black p-4 space-y-10 rounded-md md:w-full"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-[24px] font-bold">
                            Nome
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Digite seu nome"
                              className="bg-white"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-[24px] font-bold">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Digite seu email"
                              className="bg-white"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-[24px] font-bold">
                            Mensagem
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Digite sua mensagem"
                              className="bg-white"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      Enviar
                    </Button>
                  </form>
                </Form>
              </div>
            </Card>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}
