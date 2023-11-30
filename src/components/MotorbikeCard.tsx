import { IMotorbike } from "@/types";
import { Card } from "./ui/card";

interface MotorbikeProps {
  motorbike: IMotorbike;
}

const formatPrice = (price: string) => {
  if (!price) {
    return "R$ 0,00";
  }
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

export const MotorbikeCard = ({ motorbike }: MotorbikeProps) => {
  return (
    <Card className="bg-white rounded-md overflow-hidden shadow-lg flex flex-col md:flex-row mb-4">
      <div className="relative md:w-64 md:h-48 w-full h-72 overflow-hidden">
        {motorbike.images && motorbike.images.length > 0 ? (
          motorbike.images.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt={`Car Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))
        ) : (
          <div className="bg-gray-300 w-full h-full flex items-center justify-center">
            <span className="text-gray-500">Imagem Indisponível</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          {motorbike.motorbikeBrand}
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          Ano: {motorbike.yearFabrication}
        </p>
        <p className="text-sm text-gray-500 mb-2">
          Tipo de combustível: {motorbike.fuel}
        </p>
        <div className="flex justify-between items-center p-2 bg-green-500 rounded-md">
          <p className="text-lg font-bold text-white">
            {formatPrice(motorbike.price)}
          </p>
        </div>
      </div>
    </Card>
  );
};
