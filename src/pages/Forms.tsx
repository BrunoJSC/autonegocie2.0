import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FormCar } from "@/forms/FormCar";
import { Main } from "@/layout/Main";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export function Forms() {
  return (
    <>
      <Header />
      <Main>
        <section className="w-full min-h-screen mx-auto flex flex-col items-center justify-center">
          <Tabs defaultValue="car" className="md:max-w-[800px] w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="car"
                className="font-bold text-xl text-primary"
              >
                Carro
              </TabsTrigger>
              <TabsTrigger value="motorbike">Moto</TabsTrigger>
            </TabsList>
            <TabsContent value="car">
              <FormCar />
            </TabsContent>
            <TabsContent value="motorbike">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Envie as informações do sua moto para o anuncio!
                  </CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label>Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label>New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </Main>
      <Footer />
    </>
  );
}
