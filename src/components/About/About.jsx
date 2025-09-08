import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-slate-500 min-h-screen">
            <div className="container m-auto px-6 text-gray-100 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <div className="w-full h-96 bg-slate-600 rounded-lg flex items-center justify-center">
                            <svg 
                                className="w-32 h-32 text-slate-400" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-white font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-300">
                            I'm a passionate developer with expertise in React, JavaScript, and modern web technologies. 
                            My journey in web development started with curiosity and has evolved into a deep commitment 
                            to creating exceptional user experiences.
                        </p>
                        <p className="mt-4 text-gray-300">
                            I believe in writing clean, maintainable code and staying up-to-date with the latest 
                            industry trends and best practices. Every project is an opportunity to learn something 
                            new and push the boundaries of what's possible on the web.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">React</span>
                            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">JavaScript</span>
                            <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Node.js</span>
                            <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">CSS</span>
                            <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">HTML</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}