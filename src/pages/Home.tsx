import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/layout/Main";
import { FAQ } from "@/sections/FAQ";
import { Feature } from "@/sections/Feature";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <Feature />
        <FAQ />
        <Footer />
      </Main>
    </>
  );
}
