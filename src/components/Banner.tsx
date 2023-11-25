import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface BannerProps {
  image: string;
  visible?: boolean;
}

export function Banner({ image, visible }: BannerProps) {
  return (
    <section
      className={`w-full h-[691px] bg-center bg-no-repeat bg-cover`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-full h-full bg-black/50">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="md:text-[58px] text-4xl font-bold text-white mb-6">
              Encontramos o seu{" "}
              <span className="text-primary ">carro ideal!</span>
            </h1>

            <div className="flex flex-col items-center sm:flex-row justify-center gap-6">
              {visible ? (
                <>
                  <Button
                    className="bg-primary w-[272px] py-[14px] px-[28px] rounded text-white font-bold"
                    asChild
                  >
                    <Link to="/carros">Catálogo</Link>
                  </Button>

                  <Button
                    variant="secondary"
                    className="w-[272px] py-[14px] px-[28px] rounded text-primary font-bold"
                    asChild
                  >
                    <Link to="/anunciar">Anuncie já</Link>
                  </Button>
                </>
              ) : (
                <p className="text-white font-[24px] font-medium">
                  Preencha com seus dados logo abaixo
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
