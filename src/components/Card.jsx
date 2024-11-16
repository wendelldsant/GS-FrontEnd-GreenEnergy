function Card({titulo, texto, icon}) {
    return ( 
        <div href="#" className="group relative block mx-auto aspect-square w-full">
            <span className="absolute inset-0 border-2 border-dashed border-black" />
            <div className="relative flex h-full w-full transform items-end border-2 2xl:border-4 border-black bg-white transition-transform group-hover:scale-105">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">                    
                    {icon}
                    <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-xl 2xl:text-3xl font-normal">{titulo}</h2>
                </div>
                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-xl 2xl:text-3xl font-medium">{titulo}</h3>
                    <p className="mt-4 text-sm sm:text-base md:text-lg xl:text-base 2xl:text-xl">
                        {texto}
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Card;