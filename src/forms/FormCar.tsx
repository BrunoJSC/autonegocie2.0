import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { carSchema } from "@/validation/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function FormCar() {
  const form = useForm<z.infer<typeof carSchema>>({
    resolver: zodResolver(carSchema),
    defaultValues: {
      name: "",
      email: "",
      fip: "",
      phone: "",
      location: "",
      brandCar: "",
      modelCar: "",
      bodyType: "",
      mechanic: "",
      plate: "",
      auction: "",
      yearFabrication: 0,
      yearModification: 0,
      color: "",
      doors: 0,
      fuel: "",
      km: 0,
      accessories: [],
      price: 0,
      images: [],
    },
  });

  const handleSubmit = (data: z.infer<typeof carSchema>) => {
    console.log(data);
  };
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-1xl font-bold">
            Envie as informações do seu carro para o anuncio!
          </CardTitle>
          <CardDescription>Informe os dados da carro!*</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@ex.com" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FIP</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 50" {...field} />
                    </FormControl>
                    <FormDescription>
                      Tabela fip é aproximada e pode variar de ano para ano.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input placeholder="Telefone" {...field} />
                    </FormControl>
                    <FormDescription>Exemplo: (11) 99999-9999</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Localização</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Santo André" {...field} />
                    </FormControl>
                    <FormDescription>Localização do veículo</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="brandCar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Marca</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Ford" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="modelCar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Modelo</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Focus" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bodyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Carroceria</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Hatch" {...field} />
                    </FormControl>

                    <FormDescription>Tipo de Carroceria </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mechanic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mecanico</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Sim ou não" {...field} />
                    </FormControl>

                    <FormDescription>
                      Mecanico isso significa se seu carro mexido alguma vez!
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="plate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Placa</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Hatch" {...field} />
                    </FormControl>

                    <FormDescription>Ex: ABC123</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearFabrication"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Carroceria</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 2021" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearModification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ano de Modificação</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 2023" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Carroceria</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: vermelho" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="doors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portas</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 2" {...field} />
                    </FormControl>

                    <FormDescription>
                      Quantidade de portas do veículo
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Anunciar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
