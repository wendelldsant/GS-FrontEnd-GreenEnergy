function Problema() {
    return ( 
        <>
            <div className="flex items-center mb-10 mt-24">
                <div className="w-full gap-32 my-10 flex flex-col sm:flex-row justify-between items-center px-8 sm:px-12 lg:px-16">
                    <div className="uppercase text-center sm:text-left text-balance sm:flex-shrink-0 sm:w-1/3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
                        <h3>Energia Limpa: A Revolução que o Planeta Precisa</h3>
                    </div>
                    <div className="sm:w-2/3 flex flex-col gap-5 text-sm sm:text-base text-slate-600 opacity-80">
                        <p>
                            A geração de energia, como é feita atualmente, enfrenta grandes desafios. A dependência de combustíveis fósseis, como petróleo, carvão e gás natural, tem resultado em emissões massivas de gases de efeito estufa, agravando o aquecimento global e acelerando as mudanças climáticas. Além disso, o impacto ambiental dessa exploração, incluindo a poluição do ar e da água, compromete a saúde das populações e a preservação dos ecossistemas.
                        </p>
                        <p className="text-slate-800 font-medium">
                            A energia limpa surge como uma proposta para transformar esse cenário, oferecendo uma maneira de gerar eletricidade de forma responsável, minimizando os impactos ambientais e promovendo o equilíbrio entre progresso e sustentabilidade.
                        </p>
                        <p>
                            Neste site, você terá a oportunidade de mergulhar nesse tema e entender como a energia limpa pode ser a chave para um futuro mais verde e consciente. Explore as próximas sessões e descubra como essas soluções estão moldando o mundo e como você pode fazer parte dessa mudança.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 justify-center items-center">
                <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-light">ACOMPANHE O MUNDO</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <img src="./grafico-evolucao-fonte-fotovoltaica.png" alt="Gráfico 1" className="h-56 sm:h-64 lg:h-80 object-cover" />
                    <img src="./grafico-evolucao-fonte-fotovoltaica.png" alt="Gráfico 2" className="h-56 sm:h-64 lg:h-80 object-cover" />
                    <img src="./grafico-evolucao-fonte-fotovoltaica.png" alt="Gráfico 3" className="h-56 sm:h-64 lg:h-80 object-cover" />
                </div>
            </div>
        </>
     );
}

export default Problema;
