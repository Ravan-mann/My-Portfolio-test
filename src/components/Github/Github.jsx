/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData();

    return (
        <div className="min-h-screen bg-slate-500 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">GitHub Profile</h1>
                    <p className="text-gray-300">Check out my development journey and projects</p>
                </div>

                <div className="bg-slate-600 rounded-lg p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <img 
                                src={data.avatar_url} 
                                alt={data.login} 
                                className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-lg"
                            />
                        </div>

                        {/* Profile Info */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-white mb-2">@{data.login}</h2>
                            {data.name && (
                                <p className="text-xl text-gray-300 mb-4">{data.name}</p>
                            )}
                            {data.bio && (
                                <p className="text-gray-400 mb-6">{data.bio}</p>
                            )}
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-slate-700 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-orange-400">{data.public_repos}</div>
                                    <div className="text-sm text-gray-400">Repositories</div>
                                </div>
                                <div className="bg-slate-700 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-blue-400">{data.followers}</div>
                                    <div className="text-sm text-gray-400">Followers</div>
                                </div>
                                <div className="bg-slate-700 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-green-400">{data.following}</div>
                                    <div className="text-sm text-gray-400">Following</div>
                                </div>
                                <div className="bg-slate-700 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-purple-400">{data.public_gists}</div>
                                    <div className="text-sm text-gray-400">Gists</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a 
                                    href={data.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                    </svg>
                                    View on GitHub
                                </a>
                                
                                {data.blog && (
                                    <a 
                                        href={data.blog}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-200"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                        Visit Website
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 pt-8 border-t border-slate-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {data.location && (
                                <div className="flex items-center text-gray-400">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {data.location}
                                </div>
                            )}
                            
                            {data.company && (
                                <div className="flex items-center text-gray-400">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    {data.company}
                                </div>
                            )}
                        </div>
                        
                        <div className="mt-4 text-sm text-gray-500">
                            Member since {new Date(data.created_at).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long' 
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ravan-mann');
    return response.json();
}