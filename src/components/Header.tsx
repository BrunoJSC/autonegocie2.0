import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Button } from "./ui/button";

const NAV_LINKS = [
  {
    label: "Carros",
    to: "/carros",
  },

  {
    label: "Motos",
    to: "/motos",
  },

  {
    label: "Loja",
    to: "/loja",
  },

  {
    label: "Contato",
    to: "/contato",
  },

  {
    label: "Oficinas do Dicas",
    to: "/oficinas",
  },
];

export function Header() {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <header className="w-full border-b py-4 px-8 flex items-center justify-between  z-30">
      <div className=" w-[88px] h-[41.538px]">
        <Link to="/" className="w-16 h-16 ">
          <img src={logo} alt="logo" className="w-16 h-auto" />
        </Link>
      </div>

      <div className="sm:hidden">
        <DropdownMenu onOpenChange={toggleModal}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {NAV_LINKS.map(({ label, to }) => (
              <DropdownMenuItem key={label}>
                <Link to={to}>{label}</Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />

            <Button className="w-full" asChild>
              <Link to="/anunciar">Anunciar</Link>
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav className="md:flex items-center hidden">
        {NAV_LINKS.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className="text-black font-bold hover:text-green-600 transition-colors duration-300 ease-in-out mx-4"
          >
            {label}
          </Link>
        ))}

        <Button className="font-bold" asChild>
          <Link to="/anunciar">Anunciar</Link>
        </Button>
      </nav>
    </header>
  );
}
