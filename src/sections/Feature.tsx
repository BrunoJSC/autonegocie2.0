import { Card } from "@/components/Card";
import { FEATURES } from "@/constants";

export function Feature() {
  return (
    <section className="w-full">
      <div className="container mx-auto max-w-[937px] text-center p-4 border-b mt-24">
        <div
          className="max-w-[937px] text-center mx-auto 
        "
        >
          <h2 className="text-[38px] md:text-[28px] text-xs font-bold text-black leading-[48px]">
            A melhor plataforma de negociação de veículos
          </h2>
          <p className="md:text-[16px] text-[14px] text-[#848484]">
            A AutoNegocie revolucionou a maneira como as pessoas compram e
            vendem veículos. Como uma plataforma inovadora, ela se destaca por
            sua abordagem eficiente e segura de conectar compradores e
            vendedores.
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-12 mt-10 mb-24">
            {FEATURES.map((feature) => (
              <Card
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
