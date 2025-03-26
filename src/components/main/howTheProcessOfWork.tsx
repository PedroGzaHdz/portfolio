'use client';

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const WorkProcess: React.FC = () => {
    const processSteps = [
        {
            title: 'Branding & Research',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum leo tellus, eget blandit urna conse.'
        },
        {
            title: 'Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum leo tellus, eget blandit urna conse.'
        },
        {
            title: 'Final Products',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum leo tellus, eget blandit urna conse.'
        }
    ];

    return (
        <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative">
                <Image
                    src="/assets/workmain.png"
                    alt="Work Process"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
            </div>

            {/* Process Steps Section */}
            <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-purple-700 mb-6">
                    How The Process Of Work
                </h2>

                {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="bg-purple-600 text-white rounded-full p-1">
                            <Check size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-purple-700 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-white-600">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkProcess;
