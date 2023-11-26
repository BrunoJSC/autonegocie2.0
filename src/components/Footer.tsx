import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-[#1E1E1E] mt-12 py-8 md:py-12 flex flex-col items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <h3 className="text-white font-bold text-[32px]">Fale Conosco</h3>
            <ul className="flex flex-col gap-3">
              <li className="text-white">(11) 3456-3427</li>
              <li className="text-white">(11) 94072-3891</li>
              <Link
                to="mailto:autonegocie@gmail.com"
                className="text-white hover:text-green-600 transition-colors duration-300 ease-in-out"
              >
                autonegocie@gmail.com
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-[32px]">Institucional</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-green-600 transition-colors duration-300 ease-in-out"
                >
                  Contrato
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-green-600 transition-colors duration-300 ease-in-out"
                >
                  Financiamento
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-green-600 transition-colors duration-300 ease-in-out"
                >
                  Anunciar meu veículo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-[32px]">Duvídas</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-green-600 transition-colors duration-300 ease-in-out"
                >
                  Regras Gerais
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="text-white hover:text-green-600 transition-colors duration-300 ease-in-out"
                >
                  Política de Privacidade
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="text-white hover:text-green-600 transition-colors duration-300 ease-in-out"
                >
                  Sugestão de Melhorias
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-[32px]">
              Administradores
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/admin"
                  target="_top"
                  className="text-white hover:text-green-600 transition-colors duration-300 ease-in-out"
                >
                  Área de administração
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-[#848484] text-[14px] text-center mt-24">
          © 2022 AutoNegocie. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
