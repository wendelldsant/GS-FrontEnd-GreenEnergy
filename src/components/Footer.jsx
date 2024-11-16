import React from 'react';
import { Link } from 'react-router-dom';
import { MdEnergySavingsLeaf } from "react-icons/md";

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
                <Link to="/" aria-label="Motion-Grid" title="Motion-Grid" className="inline-flex items-center lg:mx-auto">
                        <MdEnergySavingsLeaf className="w-8 h-8 text-white" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                          EcoEnergy
                        </span>
                </Link>
            <div className="mt-4">
              <p>&copy; Motion-Grid. Todos os direitos reservados.</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="flex items-center mb-2">
              <span className="material-symbols-outlined text-lg mr-2">call</span>
              (11) 97398-9086
            </p>
            <p className="flex items-center mb-2">
              <span className="material-symbols-outlined text-lg mr-2">mail</span>
              suporte@emotiongrid.com.br
            </p>
            <p className="flex items-center">
              <span className="material-symbols-outlined text-lg mr-2">road</span>
              Av Lins de Vasconcelos, 1222 - São Paulo - SP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

