"use client";

import styles from './NavBar.module.css';
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
        <div className={styles.container}>
            <ul>
                <li><Image src={logo} alt="" /></li>
                {
                    menuItems.map(
                        (item) => (
                            <li><Link className={styles.button} to={item.navTo}>{item.title}</Link></li>
                        )
                    )
                }
            </ul>
        </div>
    );
}