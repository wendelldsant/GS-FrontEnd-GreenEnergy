import Card from "./CardTecnologias"
import dadosCards from "../dados/tecnologias.json"

function Tecnologia() {
    return ( 
        <div className="relative aspect-video bg-musgo flex flex-col gap-16 2xl:gap-0 2xl:flex-row py-10 items-center justify-center">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/background-video-energia-eolica.mp4"  
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            <div className="w-4/5 flex flex-col relative z-10">
                <h4 className="uppercase text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-light text-white drop-shadow-lg my-4">
                    Papel da tecnologia e inovação.
                </h4>
                <div className="flex flex-col gap-8 font-light text-base sm:text-base md:text-lg xl:text-xl 2xl:text-3xl text-zinc-200 opacity-80 uppercase text-balance text-center my-4">
                    <p>
                    A internet conecta pessoas, difunde soluções e impulsiona inovações na crise energética. Descubra as tecnologias mais recentes em energia renovável e exemplos globais de transição energética bem-sucedida.
                    </p>
                </div>
                <section className="p-0">
                    <Card dadosCards={dadosCards} />
                </section>
                
            </div>

        </div>
    );
}

export default Tecnologia;
