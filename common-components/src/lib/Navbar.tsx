"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import logo from '@shared-assets/images/logo.png'
const Navbar: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      const navcontent = document.getElementById('nav-content');
      const scrollpos = window.scrollY ;

      if (header && navcontent) {
        if (scrollpos > 120) {
          console.log("scolling")
          header.classList.add('bg-gray-200', 'shadow');
          header.classList.remove('transparent');
          navcontent.classList.remove('bg-gray-100');
          navcontent.classList.add('bg-white');
        } else {
          header.classList.remove('bg-gray-200', 'shadow');
          header.classList.add('transparent');
          navcontent.classList.remove('bg-white');
          navcontent.classList.add('bg-gray-200');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    const navMenuDiv = document.getElementById('nav-content');
    if (navMenuDiv) {
      navMenuDiv.classList.toggle('hidden');
    }
  };

  const checkParent = (target: EventTarget | null, elm: HTMLElement | null): boolean => {
    let node = target as Node | null;
    while (node !== null && node !== document.body) {
      if (node === elm) return true;
      node = node.parentNode;
    }
    return false;
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as EventTarget;
    const navMenuDiv = document.getElementById('nav-content');
    const navMenu = document.getElementById('nav-toggle');

    if (navMenuDiv && !checkParent(target, navMenuDiv) && navMenu && !checkParent(target, navMenu)) {
      navMenuDiv.classList.add('hidden');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav id="header" className=" w-full z-30 top-0 shadow-md fixed ">
      <div className="w-full flex  mt-0  py-3 lg:px-2 md:px-2 ">
        <div className='flex justify-between lg:w-auto md:w-full sm:w-full w-full '>
          <a href="/" className="flex flex-row hover:shadow-lg hover:rounded-full transform transition hover:scale-110 duration-500 ease-in-out">

            <Image src={logo} alt="logo" className="h-16" />
          </a>
          <div className="block lg:hidden pr-2 ">
            <button id="nav-toggle" className="flex items-center p-1 text-gray-900 hover:text-slate-950 transform transition hover:scale-110 duration-300 ease-in-out" onClick={toggleMenu}>
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full  flex-grow lg:flex lg:items-center lg:w-auto hidden mt-1 lg:mt-0 lg:bg-transparent p-2 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1  py-1  w-auto">
            <li className="mr-0">
              <a id="navitem" className="font-Roboto_medium text-lg toggleColour hover:bg-slate-900 hover:text-white text-black inline-block  hover:shadow-lg hover:rounded-xl no-underline transform transition hover:scale-105 duration-500 ease-in-out py-2 px-4 " href="/">Home</a>
            </li>
            <li className="mr-0">
              <a id="navitem1" className=" font-Roboto_medium text-lg toggleColour2 hover:bg-slate-900 hover:text-white text-black inline-block  hover:shadow-lg hover:rounded-xl no-underline transform transition hover:scale-105 duration-500 ease-in-out py-2 px-4 " href="/blogs">Blogs</a>
            </li>
            <li className="mr-0">
              <a id="navitem2" className=" font-Roboto_medium text-lg toggleColour3 hover:bg-slate-900 hover:text-white text-black inline-block  hover:shadow-lg hover:rounded-xl no-underline transform transition hover:scale-105 duration-500 ease-in-out py-2 px-4 " href="/tourist_places">Tourist Places</a>
            </li>
            <li className="mr-0">
              <a id="navitem2" className=" font-Roboto_medium text-lg toggleColour4 hover:bg-slate-900 hover:text-white text-black inline-block  hover:shadow-lg hover:rounded-xl no-underline transform transition hover:scale-105 duration-500 ease-in-out py-2 px-4 " href="/tourist_places">It Services</a>
            </li>
          </ul>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
