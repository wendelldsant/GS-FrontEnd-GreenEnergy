function FirstSection() {
    return (
        <div className="flex flex-col items-center justify-center bg-musgo py-12 min-h-screen">
            <h1 className="mt-10 text-white font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Eco<span className="text-dark-green">Energy</span>
            </h1>
            <div className="flex items-center justify-center w-3/4 max-w-lg my-6">
                <img src="/main-bg.png" alt="EcoVisor" className="object-cover" />
            </div>
            <div className="w-10/12 sm:w-3/4 lg:w-2/3 text-center mt-4">
                <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light">
                    Aqui, exploramos o poder da energia limpa e sustentável, mostrando como soluções renováveis podem transformar o futuro e proteger nosso planeta. Conheça mais e junte-se a nós nessa jornada!
                </p>
            </div>
        </div>
    );
}

export default FirstSection;
