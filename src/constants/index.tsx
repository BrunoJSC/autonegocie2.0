import {
  BadgePercent,
  HeartHandshake,
  MessageCircle,
  Plus,
} from "lucide-react";

export const FEATURES = [
  {
    title: "Avaliação",
    description:
      "Avalie seu veículo de forma rápida e segura com a garantia de uma empresa com mais de 20 anos de experiência no mercado.",
    icon: <MessageCircle color="#fff" />,
  },

  {
    title: "Negociação",
    description:
      "Negocie seu veículo com segurança e rapidez, com a garantia de uma empresa com mais de 20 anos de experiência no mercado.",
    icon: <HeartHandshake color="#fff" />,
  },

  {
    title: "Venda",
    description:
      "Venda seu veículo com segurança e rapidez, com a garantia de uma empresa com mais de 20 anos de experiência no mercado.",
    icon: <BadgePercent color="#fff" />,
  },

  {
    title: "Compra",
    description:
      "Compre seu veículo com segurança e rapidez, com a garantia de uma empresa com mais de 20 anos de experiência no mercado.",
    icon: <Plus color="#fff" />,
  },
];

export const FOOTER_LINKS = [
  {
    title: "Fale Conosco",
    link: [
      {
        label: "(11) 3456-3427",
        to: "/",
      },
      {
        label: "(11) 94072-3891",
        to: "/",
      },
      {
        label: "autonegocie@gmail.com",
        to: "/",
      },
    ],
  },
  {
    title: "Institucional",
    links: [
      {
        label: "Contrato",
        to: "/",
      },
      {
        label: "Financiamento",
        to: "/",
      },
      {
        label: "Anunciar meu veículo",
        to: "/",
      },
    ],
  },
  {
    title: "Duvídas",
    links: [
      {
        label: "Regras Gerais",
        to: "/",
      },
      {
        label: "Política de Privacidade",
        to: "/",
      },
      {
        label: "Sugestão de Melhorias",
        to: "/",
      },
    ],
  },

  {
    title: "Administradores",
    links: [
      {
        label: "Área de administração ",
        to: "/",
      },
    ],
  },
];
