import React from 'react';
import { Hero, Navbar } from '../components';

function Home(props) {
    return (
        <>
            <div className="home w-[100%] bg-dark-cyan">
                <Navbar />
                <Hero />
            </div>
        </>
    );
}

export default Home;