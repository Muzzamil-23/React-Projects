import React from 'react'

const Logo = () => {
    return (
        <div className="flex items-center justify-center mb-4">
            <button onClick={() => navigate("/")} className="flex cursor-pointer items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold text-black">BlogSpace</span>
            </button>
        </div>
    )
}

export default Logo