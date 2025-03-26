import Image from "next/image";

export default function HeaderMain() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 sm:py-16">
                <div className="text-center md:text-left">
                    <p className="text-lg sm:text-xl text-white mb-2">Hello Everyone, I Am</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white-900 mb-4">Ing. Pedro González </h1>
                    <div className="flex flex-row flex-wrap  space-x-5  ">
                        <button className="bg-purple-700 text-white px-3 py-1 sm:px-4 sm:py-2 inline-block rounded mb-4 sm:mb-6">
                            Web Designer & Development
                        </button>
                        <button className="bg-purple-700 text-white px-3 py-1 sm:px-4 sm:py-2 inline-block rounded mb-4 sm:mb-6">
                            Contact Me
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-8 md:mt-0 relative">
                    <div className="bg-white w-64 h-64 sm:w-80 sm:h-80 rounded-full absolute z-0"></div>
                    <Image
                        src='/assets/man1-removebg-preview.png'
                        alt="Sebastian Bennett"
                        width={250}
                        height={250}
                        className="relative z-10 rounded-full object-cover sm:w-80 sm:h-80"
                    />
                </div>
            </div>
        </div>
    );
}
