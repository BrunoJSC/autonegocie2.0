import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FormContact } from "@/forms/FormContact";
import { Main } from "@/layout/Main";

export function Contact() {
  return (
    <>
      <Header />
      <Banner image={"../src/assets/banner2.png"} />
      <Main>
        <FormContact />
      </Main>
      <Footer />
    </>
  );
}
