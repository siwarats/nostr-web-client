"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image';
import logo from '../../public/next.svg';

export default function NavBar() {
    const menuItems = [
        { title: 'Feed', navTo: '/' },
        { title: 'Following', navTo: '/following' },
        { title: 'Profile', navTo: '/profile' },
        { title: 'Relay', navTo: '/relay' },
        { title: 'Setting', navTo: '/setting' }
    ]
    return (
        <div className='w-auto h-full flex bg-[#141414]'>
            <ul>
                <li><Image src={logo} alt="" /></li>
                {
                    menuItems.map(
                        (item) => (
                            <li>
                                <Link className='flex text-white m-[10px] p-[10px] rounded-[5px] hover:bg-[#1f1f1f]'
                                    to={item.navTo}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}