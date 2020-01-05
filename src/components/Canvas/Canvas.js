import React from 'react';
import Navbar from '../Navbar'
import Footer from  '../Footer/Footer'

export default function Layout({ children }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <section>
                {children}
            </section>
            <Footer />
        </>
    );
}
