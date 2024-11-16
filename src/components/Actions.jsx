import Button from "./Button";
import Card from "./CardTecnologias";
import infoCards from "../dados/actions.json";
import { useState } from "react";

function Actions() {
    const [dadosCards, setdadosCards] = useState([]);


    return ( 
        <section className="bg-musgo min-h-screen">
            <div className="py-12 px-4 grid grid-cols-4">
                <h4 className="col-span-4 uppercase text-center text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-white drop-shadow-lg">
                    Contribua para um mundo com mais energia limpa
                </h4>
                <div className="col-span-4 mt-10">
                <h1 className=" text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-center">Clique abaixo e conheça ações sustentáveis</h1>
                </div>
   
                <div className="col-span-4 p-4 flex justify-center flex-wrap">
                    <div className="mt-10">
                        <Button onClick={() => setdadosCards(infoCards.info1)} text="Painéis Solares"/>
                    </div>
                    <div className="mt-10">
                        <Button onClick={() => setdadosCards(infoCards.info2)} text="Transporte"/>
                    </div>
                    <div className="mt-10">
                        <Button onClick={() => setdadosCards(infoCards.info3)} text="Isolamento Térmico"/>
                    </div>
                    <div className="mt-10">
                        <Button onClick={() => setdadosCards(infoCards.info4)} text="Startups"/>
                    </div>
                </div>
                <div className="col-span-4 p-4 mt-5 mx-auto">
                    <Card dadosCards={dadosCards} />
                </div>
            </div>
        </section>
    );
}

export default Actions;
