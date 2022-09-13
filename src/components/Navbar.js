import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="container mx-auto xl:px-24 xl:py-4 px-8 py-2 items-center flex justify-between">
      <Link to="/">
        <span className="text-2xl font-semibold text-gray-900 ">Fasha</span>
      </Link>
      <ul className="md:flex space-x-10 hidden">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <li>Articles</li>
        <li className="">Contact</li>
      </ul>
      <div className="md:hidden top-16 w-56 text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Menu
              <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Link to="/">
                  <Menu.Item>{({ active }) => <button className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>Home</button>}</Menu.Item>
                </Link>
                <Link to="/about">
                  <Menu.Item>{({ active }) => <button className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>About</button>}</Menu.Item>
                </Link>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>{({ active }) => <button className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>Articles</button>}</Menu.Item>
                <Menu.Item>{({ active }) => <button className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>Contact</button>}</Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
