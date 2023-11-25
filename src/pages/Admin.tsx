import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FormAdmin } from "@/forms/FormAdmin";
import { Main } from "@/layout/Main";

export function Admin() {
  return (
    <>
      <Header />
      <Main>
        <FormAdmin />
      </Main>
      <Footer />
    </>
  );
}
