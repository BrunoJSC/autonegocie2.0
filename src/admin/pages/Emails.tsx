import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { db, storage } from "@/firebase";
import { ICar } from "@/types";
import { collection, onSnapshot } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";

export function Emails() {
  const [data, setData] = useState<ICar[]>([]);

  const handleDownload = async (imageURL: string) => {
    try {
      const storageRef = ref(storage, imageURL);
      const downloadURL = await getDownloadURL(storageRef);
      window.open(downloadURL, "_blank");
    } catch (error) {
      console.error("Erro ao fazer download da imagem:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "cars"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ICar[];
      setData(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      {data?.map((item) => (
        <Card key={item.id} className="w-full h-auto mb-8">
          <div className="overflow-hidden">
            <img
              src={item.images && item.images.length > 0 ? item.images[0] : ""}
              alt=""
              className="w-full h-40 object-cover md:h-60 lg:h-80"
            />
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">Marca: {item.brandCar}</h1>
            <h2 className="text-xl font-semibold mb-2">
              modelo: {item.modelCar}
            </h2>
            <p className="text-gray-600 mb-2">
              Ano de fabricação: {item.yearFabrication}
            </p>
            <p className="text-gray-600 mb-2">
              Ano de modificação: {item.yearModification}
            </p>
            <p className="text-gray-600 mb-2">KM: {item.km} km</p>
            <p className="text-gray-600 mb-2">Combustivel: {item.fuel}</p>
            <p className="text-gray-600 mb-2">Cor: {item.color}</p>
            <p className="text-gray-600 mb-2">Mecanico: {item.mechanic}</p>
            <p className="text-gray-600 mb-2">Placa: {item.plate}</p>
            <p className="text-gray-600 mb-2">Descrição: {item.description}</p>
            <div className="mt-4">
              {item.images?.map((image, index) => (
                <div key={index} className="mb-2">
                  <Button onClick={() => handleDownload(image)}>
                    Download Image {index + 1}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
