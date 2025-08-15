'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '/o-nas', label: 'O nas' },
    { href: '/podopieczni', label: 'Podopieczni' },
    { href: '/jak-pomoc', label: 'Jak pomóc' },
    { href: '/dla-opiekunow', label: 'Dla opiekunów' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className='fixed top-0 w-full bg-white border-b border-black z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link
            href='/'
            className='flex-shrink-0'
          >
            <Image
              src='/svg/nav-logo.svg'
              alt='Logo'
              width={120}
              height={37}
              className='h-8 w-auto hidden lg:block'
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            {/* Navigation Links */}
            <div className='flex space-x-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium'
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Buttons */}
            <div className='flex space-x-4'>
              <Button
                variant='outline'
                size='default'
              >
                Potrzebuję pomocy
              </Button>
              <Button
                variant='default'
                size='default'
              >
                Chcę pomóc
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <Link
              href='/'
              className='flex-shrink-0'
            >
              <Image
                src='/svg/mobile-logo.svg'
                alt='Logo'
                width={40}
                height={37}
                className='h-8 a-auto fixed left-4 top-4  lg:hidden'
              />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className='p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <div className='relative w-6 h-6'>
                <Menu
                  className={`absolute inset-0 h-6 w-6 transition-transform duration-300 ${
                    isMobileMenuOpen
                      ? 'rotate-90 opacity-0'
                      : 'rotate-0 opacity-100'
                  }`}
                />
                <X
                  className={`absolute inset-0 h-6 w-6 transition-transform duration-300 ${
                    isMobileMenuOpen
                      ? 'rotate-0 opacity-100'
                      : '-rotate-90 opacity-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col h-full'>
          {/* Mobile Menu Header */}
          <div className='flex items-center justify-between p-4 border-b border-gray-200'>
            <Image
              src='/svg/mobile-logo.svg'
              alt='Logo'
              width={120}
              height={37}
              className='h-8 w-auto'
            />
            <button
              onClick={toggleMobileMenu}
              className='p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            >
              <X className='h-6 w-6' />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className='flex flex-col flex-1 p-4 space-y-6'>
            {/* Navigation Links */}
            <div className='space-y-4'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='block text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className='space-y-4 pt-6 border-t border-gray-200'>
              <Button
                variant='outline'
                size='lg'
                className='w-full'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Potrzebuję pomocy
              </Button>
              <Button
                variant='default'
                size='lg'
                className='w-full'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Chcę pomóc
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
