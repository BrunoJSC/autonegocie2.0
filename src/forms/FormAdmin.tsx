import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { auth } from "@/firebase";
import { adminSchema } from "@/validation/schemas";
import { Label } from "@radix-ui/react-dropdown-menu";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import iconForm from "../assets/iconForm.png";

export function FormAdmin() {
  const form = useForm<z.infer<typeof adminSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof adminSchema>) => {
    signInWithEmailAndPassword(auth, data.email, data.password);

    console.log(data);
  };

  return (
    <section className="w-full min-h-screen">
      <div className="w-full mt-10 flex flex-col items-center">
        <img src={iconForm} alt="logo" className="max-w-full h-auto" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-full md:w-[466px] md:p-0 p-4 md:mt-16 mt-24 space-y-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-[24px] text-black font-bold">
                    Email
                  </Label>
                  <Input type="email" className="bg-[#15803D29]" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-[24px] text-black font-bold">
                    Senha
                  </Label>
                  <Input
                    type="password"
                    className="bg-[#15803D29]"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              {form.formState.isSubmitting ? (
                <Progress
                  value={form.formState.isLoading ? 100 : 0}
                  className="w-full"
                />
              ) : (
                "Entrar"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
