import { Header } from "@/admin/Header";
import { Main } from "@/layout/Main";
import { Outlet } from "react-router-dom";

export function Dashboard() {
  return (
    <>
      <Header />
      <Main>
        <section className="w-full min-h-screen">
          <Outlet />
        </section>
      </Main>
    </>
  );
}
