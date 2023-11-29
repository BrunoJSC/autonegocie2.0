/* eslint-disable react-hooks/exhaustive-deps */
import { CarCard } from "@/components/CarCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { db } from "@/firebase";
import { Main } from "@/layout/Main";
import { ICar } from "@/types";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Car() {
  const [car, setCar] = useState<ICar[]>([]);
  const [filteredCars, setFilteredCars] = useState<ICar[]>([]);
  const [searchBrand, setSearchBrand] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchFuel, setSearchFuel] = useState("");
  // const [minYear, setMinYear] = useState("");
  // const [maxYear, setMaxYear] = useState("");
  // const [minKm, setMinKm] = useState("");
  // const [maxKm, setMaxKm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !searchBrand.trim() &&
      !searchModel.trim() &&
      !searchYear.trim() &&
      !minPrice.trim() &&
      !maxPrice.trim()
    ) {
      return;
    }

    const newFilteredCars = car.filter((car) => {
      const brand = car.brandCar
        ?.toLowerCase()
        .includes(searchBrand.toLowerCase());

      const model = car.modelCar
        ?.toLowerCase()
        .includes(searchModel.toLowerCase());

      const year = car.yearFabrication
        ?.toLowerCase()
        .includes(searchYear.toLowerCase());

      const isMinPriceValid =
        typeof car.price === "string" &&
        parseFloat(car.price) >= parseFloat(minPrice);

      const isMaxPriceValid =
        typeof car.price === "string" &&
        parseFloat(car.price) <= parseFloat(maxPrice);

      const fuel = (car.fuel || "")
        .toLowerCase()
        .includes(searchFuel.toLowerCase());

      return (
        brand && model && year && isMinPriceValid && isMaxPriceValid && fuel
      );
    });

    setFilteredCars(newFilteredCars);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "cars"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ICar[];
      setCar(data);

      if (!searchBrand && !searchModel) {
        setFilteredCars(data);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [searchBrand, searchModel]);

  return (
    <>
      <Header />
      <Main>
        <section className="w-full min-h-screen p-2">
          <div className="flex flex-col md:flex-row gap-4">
            <Card className="md:w-[300px] w-full bg-white/80 rounded-md p-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <p>Marca</p>
                  <Input
                    type="text"
                    placeholder="Pesquisar por marca"
                    value={searchBrand}
                    onChange={(e) => setSearchBrand(e.target.value)}
                  />
                </div>

                <div>
                  <p>Modelo</p>
                  <Input
                    type="text"
                    placeholder="Pesquisar por modelo"
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                  />
                </div>

                <div>
                  <p>Ano</p>
                  <Input
                    type="text"
                    placeholder="Pesquisar por ano"
                    value={searchYear}
                    onChange={(e) => setSearchYear(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Input
                    type="text"
                    placeholder="Pesquisar por preço"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Pesquisar por preço"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>

                <Button className="w-full mt-4" type="submit">
                  Pesquisar
                </Button>
              </form>

              <div>
                <select
                  className="w-full p-2 rounded-md mt-4 "
                  value={searchFuel}
                  onChange={(e) => setSearchFuel(e.target.value)}
                >
                  <option value="">Combustível</option>
                  <option value="Gasolina">Gasolina</option>
                  <option value="Etanol">Etanol</option>
                  <option value="Diesel">Diesel</option>
                </select>
              </div>
            </Card>

            <div className="w-full p-4  flex-1">
              {filteredCars.map((car) => (
                <Link
                  to={`/carros/detalhes/${car.id}`}
                  key={car.id}
                  state={{ data: car }}
                >
                  <CarCard car={car} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}
