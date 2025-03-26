'use client';
import React from 'react';
import { PiGear, PiWindowsLogo, PiDeviceMobileSpeaker, PiChatCircle } from 'react-icons/pi';

const PortfolioSection = () => {
    const [hoveredService, setHoveredService] = React.useState<string | null>('');

    const services = [
        {
            icon: <PiGear className="w-12 h-12 transition-colors duration-300" />,
            title: 'Programming',
            id: 'programming'
        },
        {
            icon: <PiWindowsLogo className="w-12 h-12 transition-colors duration-300" />,
            title: 'Web Design',
            id: 'web-design'
        },
        {
            icon: <PiDeviceMobileSpeaker className="w-12 h-12 transition-colors duration-300" />,
            title: 'UI/UX',
            id: 'uiux'
        },
        {
            icon: <PiChatCircle className="w-12 h-12 transition-colors duration-300" />,
            title: 'Consultation',
            id: 'consultation'
        },
    ];

    return (
        <div className=" bg-white flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="w-full max-w-5xl">
                <div className="text-left mb-12">
                    <h1 className="text-4xl font-bold text-purple-700 mb-4">
                        Any Type Of Service And Discussions
                    </h1>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum leo tellus,
                        eget blandit urna consequat sit amet. Aenean tincidunt lacus eget.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                            className={`
                flex flex-col items-center justify-center 
                p-6 rounded-xl 
                transition-all duration-300 ease-in-out
                ${hoveredService === service.id
                                ? 'bg-purple-600 text-white scale-105 shadow-lg'
                                : 'bg-white text-gray-800 border border-gray-100'}
              `}
                        >
                            <div
                                className={`
                  mb-4 
                  transition-colors duration-300
                  ${hoveredService === service.id
                                    ? 'text-white'
                                    : 'text-purple-600'}
                `}
                            >
                                {React.cloneElement(service.icon, {
                                    className: `
                    w-12 h-12 
                    transition-colors duration-300
                    ${hoveredService === service.id
                                        ? 'text-white'
                                        : 'text-purple-600'}
                  `
                                })}
                            </div>
                            <h3
                                className={`
                  text-lg font-semibold 
                  transition-colors duration-300
                  ${hoveredService === service.id
                                    ? 'text-white'
                                    : 'text-gray-800'}
                `}
                            >
                                {service.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
