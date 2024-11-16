import React from "react";
import { Link } from "react-router-dom";

function CardTecnologias({ dadosCards }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2">
            {dadosCards.map((card, index) => (
                <div key={index} className="my-5">
                    <div className="opacity-75 group flex p-2 flex-col justify-between w-10/12 mx-auto items-start gap-2 h-full duration-500 relative rounded-lg bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
                        <div className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden relative">
                            <img
                                src={card.imagem}
                                alt={card.title}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="flex-grow p-3">
                            <h2 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h2>
                            <p className="text-gray-700 text-xs md:text-sm lg:text-sm xl:text-lg line-clamp-3">{card.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardTecnologias;
