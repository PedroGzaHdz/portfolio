import React from 'react';
import { Mail, Clock } from 'lucide-react';

const InfoComponentService = () => {
    return (
        <div className=" bg-gradient-to-b from-[#4A348C] to-[#2A1A5E] text-white flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Top Right Icons */}
            <div className="absolute top-4 right-4 flex space-x-4 z-10">
                <Mail className="text-purple-300 hover:text-white cursor-pointer" />
                <Clock className="text-purple-300 hover:text-white cursor-pointer" />
            </div>

            <div className="container mx-auto px-4 py-8 flex-grow flex items-center">
                <div className="w-full grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Content - Responsive Text */}
                    <div className="space-y-4 md:space-y-6 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-300">
                            My Web Designer Awards
                        </h1>
                        <p className="text-base md:text-lg text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum
                            leo tellus, eget blandit urna consequat sit amet. Aenean tincidunt
                            lacus eget purus dictum, congue imperdiet neque eleifend.
                        </p>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg transition-colors">
                            See More
                        </button>
                    </div>

                    {/* Right Content - Responsive Awards */}
                    <div className="space-y-4 md:space-y-6">
                        {/* Award 2021 */}
                        <div className="flex flex-col sm:flex-row items-center bg-purple-700/50 p-4 rounded-lg space-y-4 sm:space-y-0 sm:space-x-4">
                            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                                <img
                                    src="/assets/apple.jpg"
                                    alt="Award 2021"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-lg md:text-xl font-semibold text-purple-200">
                                    Designer Awards 2021
                                </h3>
                                <p className="text-sm md:text-base text-gray-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Duis rutrum leo tellus.
                                </p>
                            </div>
                        </div>

                        {/* Award 2022 */}
                        <div className="flex flex-col sm:flex-row items-center bg-purple-700/50 p-4 rounded-lg space-y-4 sm:space-y-0 sm:space-x-4">
                            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                                <img
                                    src="/assets/earphones.jpg"
                                    alt="Award 2022"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-lg md:text-xl font-semibold text-purple-200">
                                    Designer Awards 2022
                                </h3>
                                <p className="text-sm md:text-base text-gray-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Duis rutrum leo tellus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoComponentService;
