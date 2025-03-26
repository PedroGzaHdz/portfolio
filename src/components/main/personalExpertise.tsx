import React from 'react';
import { Monitor, Smartphone, PenTool } from 'lucide-react';

const PersonalExpertise = () => {
    const skills = [
        {
            name: 'Web Development',
            percentage: 85,
            icon: Monitor
        },
        {
            name: 'App Design',
            percentage: 90,
            icon: Smartphone
        },
        {
            name: 'Landing Page Design',
            percentage: 80,
            icon: PenTool
        }
    ];

    return (
        <div className="min-h-screen bg-white text-white flex items-center justify-center p-4">
            <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Image */}
                <div className="flex justify-center relative">
                    <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-purple-500 rounded-full -top-10 -left-10 opacity-50 blur-2xl"></div>
                    <img
                        src="/assets/man1-removebg-preview.png"
                        alt="Professional Portrait"
                        className="relative z-10 w-64 md:w-80 lg:w-96 rounded-lg shadow-2xl"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                        My Personal Expertise
                    </h1>
                    <p className="text-base md:text-lg text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum
                        leo tellus, eget blandit urna consequat sit amet. Aenean tincidunt
                        lacus eget purus dictum, congue imperdiet neque eleifend.
                    </p>

                    {/* Skills */}
                    <div className="space-y-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                        <skill.icon className="text-gray-900 w-5 h-5" />
                                        <span className="text-gray-900 text-base font-medium">{skill.name}</span>
                                    </div>
                                    {/*<span className="text-sm text-gray-500">{skill.percentage}%</span>*/}
                                </div>
                                {/*<div className="w-full bg-gray-200 rounded-full h-2.5">*/}
                                {/*    <div*/}
                                {/*        className="bg-purple-600 h-2.5 rounded-full"*/}
                                {/*        style={{width: `${skill.percentage}%`}}*/}
                                {/*    ></div>*/}
                                {/*</div>*/}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default PersonalExpertise;
