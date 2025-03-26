'use client'

import React, { useState } from 'react';
import {
    Phone,
    Linkedin,
    Github,
    Copy
} from 'lucide-react';

const ContactPage = () => {
    const [copied, setCopied] = useState({
        phone: false,
        email: false
    });

    const contactInfo = {
        name: 'Tu Nombre',
        phone: '+55 (123) 456-7890',
        email: 'tu.email@example.com',
        linkedin: 'https://linkedin.com/in/tunombre',
        github: 'https://github.com/tunombre',
        location: 'Ciudad, País'
    };

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopied({...copied, [type]: true});
        setTimeout(() => setCopied({...copied, [type]: false}), 2000);
    };

    return (
        <div className="bg-[#2C2764] text-white flex flex-col">
            <div className="container mx-auto px-4 py-8 sm:py-12 flex-grow flex items-center">
                <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Left Side - Contact Details */}
                    <div className="space-y-4 sm:space-y-6">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-300 mb-4 text-center lg:text-left">
                            Contact Me
                        </h1>

                        {/* Contact Methods */}
                        {[
                            {
                                icon: Phone,
                                title: 'Phone',
                                content: contactInfo.phone,
                                type: 'phone'
                            },
                            {
                                icon: Linkedin,
                                title: 'LinkedIn',
                                content: 'View Profile',
                                link: contactInfo.linkedin
                            },
                            {
                                icon: Github,
                                title: 'GitHub',
                                content: 'View Repository',
                                link: contactInfo.github
                            }
                        ].map((contact, index) => (
                            <div
                                key={index}
                                className="bg-purple-700/30 p-3 sm:p-4 rounded-lg flex items-center space-x-3 sm:space-x-4 hover:bg-purple-700/40 transition-all"
                            >
                                <contact.icon className="text-purple-300 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
                                <div className="flex-grow">
                                    <p className="text-xs sm:text-sm text-gray-300">{contact.title}</p>
                                    {contact.link ? (
                                        <a
                                            href={contact.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm sm:text-base font-semibold hover:text-purple-300 transition-colors"
                                        >
                                            {contact.content}
                                        </a>
                                    ) : (
                                        <div className="flex items-center space-x-2">
                                            <p className="text-sm sm:text-base font-semibold">{contact.content}</p>
                                            <button
                                                onClick={() => copyToClipboard(contact.content, contact.type as string)}
                                                className="hover:bg-purple-600 p-1 rounded-full transition-colors"
                                            >
                                                {copied[contact.type] ?
                                                    <span className="text-xs text-green-300">Copied!</span> :
                                                    <Copy className="text-purple-300 w-4 h-4" />
                                                }
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-purple-700/30 p-4 sm:p-6 rounded-lg space-y-3 sm:space-y-4">
                        <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-4 text-center">
                            Send Me a Message
                        </h2>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-2 sm:p-3 text-sm sm:text-base bg-purple-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-2 sm:p-3 text-sm sm:text-base bg-purple-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            // rows="4"
                            className="w-full p-2 sm:p-3 text-sm sm:text-base bg-purple-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-sm sm:text-base text-white p-2 sm:p-3 rounded-lg transition-colors">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
