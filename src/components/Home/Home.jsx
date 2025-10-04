import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-slate-500 min-h-screen">
            <div className="mx-auto w-full max-w-7xl px-4">
                {/* Hero Section */}
                <div className="relative overflow-hidden rounded-lg sm:mx-16 mx-2 py-16">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
                        {/* Left side - Text content */}
                        <div className="lg:w-1/2 text-center lg:text-left space-y-8">
                            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                                Welcome to My
                                <span className="block text-orange-400">Portfolio</span>
                            </h1>
                            
                            <p className="text-xl text-gray-300 max-w-lg">
                                Passionate developer creating amazing web experiences with React, JavaScript, and modern technologies.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    className="inline-flex text-white items-center justify-center px-8 py-4 font-medium bg-orange-700 rounded-lg hover:bg-orange-600 transition-colors duration-200"
                                    to="/About"
                                >
                                    <svg
                                        fill="white"
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        className="mr-2"
                                    >
                                        <path d="M12 0c6.623 0 12 5.377 12 12 0 6.623-5.377 12-12 12s-12-5.377-12-12c0-6.623 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z"/>
                                    </svg>
                                    Learn More
                                </Link>
                                
                                <Link
                                    className="inline-flex text-slate-300 items-center justify-center px-8 py-4 font-medium border border-slate-400 rounded-lg hover:bg-slate-600 hover:text-white transition-colors duration-200"
                                    to="/Contact"
                                >
                                    Get In Touch
                                </Link>
                            </div>
                        </div>

                        {/* Right side - Visual element */}
                        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
                            <div className="relative">
                                <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20 animate-pulse"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-64 h-64 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-32 h-32 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">What I Do</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Specializing in modern web development with a focus on user experience and clean code
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Feature 1 */}
                        <div className="bg-slate-600 rounded-lg p-6 text-center hover:bg-slate-550 transition-colors duration-200">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Frontend Development</h3>
                            <p className="text-gray-300">Building responsive and interactive user interfaces with React and modern CSS frameworks.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-slate-600 rounded-lg p-6 text-center hover:bg-slate-550 transition-colors duration-200">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
                            <p className="text-gray-300">Writing maintainable, scalable, and well-documented code following best practices.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-slate-600 rounded-lg p-6 text-center hover:bg-slate-550 transition-colors duration-200">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Problem Solving</h3>
                            <p className="text-gray-300">Tackling complex challenges with creative solutions and attention to detail.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}