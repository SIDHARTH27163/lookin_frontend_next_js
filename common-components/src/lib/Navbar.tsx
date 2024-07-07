"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '@shared-assets/images/logo.png';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    
    const handleScroll = () => {
      const header = document.getElementById('header');
      const navcontent = document.getElementById('nav-content');
      const scrollpos = window.scrollY ;

      if (header && navcontent) {
        if (scrollpos > 100) {
         
          header.classList.add('bg-white', 'shadow-lg');
          header.classList.remove('transparent');
          navcontent.classList.remove('bg-gray-100');
          navcontent.classList.add('bg-white');
        } else {
          header.classList.remove('bg-white', 'shadow-lg');
          header.classList.add('transparent');
          navcontent.classList.remove('bg-white');
          navcontent.classList.add('bg-gray-200');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
      setMenuOpen(false);
    }
  };



  return (
    <nav id="header" className="w-full z-30 top-0 fixed ">
      <div className="w-full flex flex-row mt-0 py-2 lg:px-2 md:px-2 ">
        <div className="flex justify-between lg:w-auto md:w-full sm:w-full w-full ">
          <Link href="/" className="flex flex-row hover:shadow-lg hover:rounded-full transform transition hover:scale-110 duration-500 ease-in-out">
            <Image src={logo} alt="logo" />
          </Link>
          <div className="block lg:hidden pr-2">
            <button
              id="nav-toggle"
              className="flex items-center  h-full p-1 text-gray-900 hover:text-slate-950 transform transition hover:scale-110 duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg className="fill-current h-10 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Close</title>
                  <path d="M10 8.586L1.707.293 0 2 8.586 10 0 18.586 1.707 20l8.293-8.293L18.586 20 20 18.586 10.707 10 20 1.707 18.586 0z" />
                </svg>
              ) : (
                <svg className="fill-current h-10 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`lg:flex lg:items-end  lg:w-full  lg:bg-transparent lg:p-0 lg:relative lg:mt-0 p-2 absolute w-full transition-all duration-500 ease-in-out bg-white shadow-lg ${menuOpen ? 'top-full' : 'top-[-300px]'} lg:top-auto lg:opacity-100 lg:static lg:shadow-none ${menuOpen ? '' : 'opacity-0'} z-20`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 py-2 w-full lg:w-auto">
            <li className="mr-0">
              <Link className="font-Roboto_medium leading-7 text-xl mx-2 toggleColour hover:bg-slate-900 hover:text-white text-black inline-block hover:shadow-lg hover:rounded-xl no-underline transform transition hover:scale-105 duration-700 ease-in-out py-2 px-4" href="/">
                Home
              </Link>
            </li>
            <li className="mr-0">
              <Link className="font-Roboto_medium leading-7 text-xl mx-2 toggleColour2 hover:bg-slate-900 hover:text-white text-black inline-block hover:shadow-lg hover:rounded-xl no-underline transform transition hover:scale-105 duration-700 ease-in-out py-2 px-4" href="http://localhost:3001" target="_blank">
                Blogs
              </Link>
            </li>
            <li className="mr-0">
              <Link className="font-Roboto_medium leading-7 text-xl mx-2 toggleColour3 hover:bg-slate-900 hover:text-white text-black inline-block hover:shadow-lg hover:rounded-xl no-underline transform transition hover:scale-105 duration-700 ease-in-out py-2 px-4" href="/tourist_places">
                Tourist Places
              </Link>
            </li>
            <li className="mr-0">
              <Link className="font-Roboto_medium leading-7 text-xl mx-2 toggleColour4 hover:bg-slate-900 hover:text-white text-black inline-block hover:shadow-lg hover:rounded-xl no-underline transform transition hover:scale-105 duration-700 ease-in-out py-2 px-4" href="http://localhost:3002">
                IT Services
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
