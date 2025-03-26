import Image from 'next/image'

const AboutMe = () => {
    return (
        <div className="bg-[#2C2764] flex items-center justify-center py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Imagen de perfil */}
                <div className="flex justify-center">
                    <div className="bg-white p-2 rounded-3xl shadow-lg max-w-xs w-full">
                        <Image
                            src='/assets/man1-removebg-preview.png'
                            width={250}
                            height={250}
                            alt="Sebastian Bennett"
                            className="w-full aspect-square object-cover rounded-3xl"
                        />
                    </div>
                </div>

                {/* Contenido de texto */}
                <div className="text-white space-y-4 sm:space-y-6 text-center md:text-left">
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#7E74F1] mb-2 sm:mb-4">How About Me ?</h2>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                            Learn To Develop Sites With Components And Design System
                        </h1>
                    </div>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum
                        leo tellus, eget blandit urna consequat sit amet. Aenean tincidunt
                        lacus eget purus dictum, congue imperdiet neque eleifend.
                    </p>

                    <div className="flex justify-center md:justify-start space-x-6 sm:space-x-8 mb-4 sm:mb-6">
                        <div className="text-center">
                            <p className="text-2xl sm:text-4xl font-bold text-[#7E74F1]">10</p>
                            <p className="text-xs sm:text-base text-gray-300">Years Of Experience</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl sm:text-4xl font-bold text-[#7E74F1]">150</p>
                            <p className="text-xs sm:text-base text-gray-300">Trusted By Clients</p>
                        </div>
                    </div>

                    {/* Iconos de contacto */}
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" className="text-[#7E74F1] hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </a>
                        <a href="#" className="text-[#7E74F1] hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </a>
                        <a href="#" className="text-[#7E74F1] hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
