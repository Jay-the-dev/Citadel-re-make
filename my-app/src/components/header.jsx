import React from 'react'

const header = () => {
  return (
    <>
        <header id="header" className="w-full flex justify-between fixed top-0 z-100 bg-white p-[32px_64px_32px_64px] mb-8">
            <div className="logo">
                <img src="https://www.citadel.com/wp-content/uploads/2022/12/Citadel-Logo.png" alt="Logo"  width="227px" />
            </div> 
            <nav className="flex item-center gap-8">
                <ul className="list-none flex gap-8 text-sky-700">
                    <div className="relative group inline-block hover:underline hover:text-sky-700 transition-all ease-in-out duration-200">
                        <a href="#" class="text-sky-700">Who we are</a>

                        {/* Dropdown */}
                        <div className="absolute hidden group-hover:block bg-white border border-gray-200 mt-1">
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Culture</a>
                        </div>
                    </div>
                    <li>What we do</li>
                    <li>News</li>
                    <li>Who we are</li>
                    <li>Carreers</li>
                </ul>
            </nav>
            <div className="client-login">
                <button className="">Client login</button>
            </div>
       </header>
    </>
  )
}

export default header