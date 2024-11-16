import Card from "./Card";

import { BsFillSunFill } from "react-icons/bs";
import { MdWindPower } from "react-icons/md";
import { FaWater } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa";
import { FaTree } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";

function EnergiaLimpa() {

    return ( 
        <div className="size-fit sm:aspect-video p-16 px-12 flex flex-col justify-center items-center my-20">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                <h3 className="col-span-1 text-3xl md:text-4xl lg:text-5xl font-normal text-slate-400 opacity-80">TRANSIÇÃO ENERGÉTICA</h3>
                <div className="col-span-1 md:col-span-1 lg:col-span-3 flex flex-col gap-8">
                    <p className="text-xl md:text-2xl lg:text-4xl text-wrap uppercase font-light">A transição para energias renováveis, como solar e eólica, é fundamental para combater a crise climática e promover um futuro sustentável. Embora desafiadora, essa mudança abre oportunidades de inovação e desenvolvimento econômico com grandes benefícios para o meio ambiente e a sociedade.</p>
                    <h6 className="text-lg md:text-xl lg:text-2xl font-semibold uppercase">Veja algumas das fontes de energia renováveis e seus benefícios:</h6>
                </div>
            </div>
            <div className="w-full mt-44 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-16">
                <Card titulo="Energia Solar" texto="Energia limpa e abundante, reduzindo a necessidade de combustíveis fósseis." icon={<BsFillSunFill size={40} />} />
                <Card titulo="Energia Eólica" texto="Aproveita o vento para gerar eletricidade sem emissões." icon={<MdWindPower size={40} />} />
                <Card titulo="Energia Hidrelétrica" texto="Fonte renovável que responde por grande parte da matriz energética de países como o Brasil." icon={<FaWater size={40} />} />
                <Card titulo="Energia Geotérmica e Biomassa" texto="Alternativas que diversificam a matriz energética e reduzem o impacto ambiental." icon={<FaHotjar size={40} />} />
                <Card titulo="Benefícios Ambientais" texto="Redução significativa nas emissões de gases de efeito estufa e diminuição do impacto ambiental." icon={<FaTree size={40} />} />          
                <Card titulo="Benefícios Econômicos" texto="Criação de novos empregos e oportunidades no setor energético sustentável." icon={<FaMoneyCheckDollar size={40} />} />          
                <Card titulo="Benefícios Sociais" texto="Maior independência energética para países e comunidades, promovendo estabilidade." icon={<BsFillPeopleFill size={40} />} />          
            </div>
        </div>
     );
}

export default EnergiaLimpa;
