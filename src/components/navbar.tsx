import React from "react"



const Navbar = () => {
    return (

        <nav className="flex flex-wrap justify-between items-center py-4 sm:py-6 mx-auto px-4 sm:px-6 lg:px-8">
            <div
                className="text-xl sm:text-2xl font-bold text-purple-700 w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
                Portfolio 2025
            </div>
            <div
                className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex space-x-4 mb-4 sm:mb-0">
                    <a href="#" className="text-white-800 hover:text-purple-700">Contact</a>
                    <a href="#" className="text-white-800 hover:text-purple-700">Project</a>
                    <a href="#" className="text-white-800 hover:text-purple-700">Resume</a>
                </div>
                <div className="flex space-x-2">
                    {/*<a href="#" className="text-purple-700"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"></svg></a>*/}
                    {/*<a href="#" className="text-purple-700"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><!-- Email icon --></svg></a>*/}
                    {/*<a href="#" className="text-purple-700"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><!-- Phone icon --></svg></a>*/}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
