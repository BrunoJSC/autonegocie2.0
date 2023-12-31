import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/firebase";
import { contactSchema } from "@/validation/schemas";
import { addDoc, collection } from "firebase/firestore";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export function FormContact() {
  const form = useForm<z.infer<typeof contactSchema>>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

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
    <section className="w-full">
      <div className="w-full max-w-screen-xl mx-auto mt-5">
        <h1 className="md:text-[52px] text-3xl font-bold text-center md:text-left leading-relaxed">
          Queremos fazer parte da sua história!
        </h1>

        <div className="flex flex-col md:flex-row md:justify-between  p-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="md:w-[466px] md:p-0 p-4 md:mt-16 space-y-8"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black text-[32px] font-bold">
                      Nome
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite seu nome"
                        className="bg-[#15803D29]"
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
                    <FormLabel className="text-black text-[32px] font-bold">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite seu email"
                        className="bg-[#15803D29]"
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
                    <FormLabel className="text-black text-[32px] font-bold">
                      Mensagem
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escreva sua mensagem"
                        className="bg-[#15803D29]"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="w-full mt-4"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                Enviar
              </Button>
            </form>
          </Form>

          <div className="w-full md:w-[466px] md:p-0 p-4 md:mt-8 space-y-8 md:flex md:flex-col justify-between  md:ml-10">
            <div className="md:w-full md:max-w-[266px] md:p-0 p-4 space-y-8 flex flex-col">
              <h2 className="text-black text-[32px] font-bold">Duvidas?</h2>
              <p>
                Chame no WhatsApp através do botão abaixo para ser atendido por
                um de nossos especialistas!
              </p>

              <Button className="w-full mt-4" type="submit">
                <MessageSquare />
                Chamar no WhatsApp
              </Button>
            </div>

            <div>
              <h2 className="text-black text-[32px] font-bold">Contato</h2>

              <p>(11) 3456-3427</p>
              <p>(11) 94072-3891</p>
              <p>autonegocie@gmail.com</p>
            </div>

            <div>
              <h2 className="text-black text-[32px] font-bold">Rede Social</h2>

              <p>Instagram</p>
              <p>Facebook</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
