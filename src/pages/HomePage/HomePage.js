import React from 'react';
import MainScreen from '../../components/MainScreen/MainScreen';
import Navbar from '../../components/Navbar/Navbar';

const HomePage = () => {
    return (
        <>
        <Navbar />
        <MainScreen title='Sveiki atvyke i Skelbiu.lt'>Main Screen</MainScreen>
        <main>
            Home Page
        </main>
        </>
    )
}

export default HomePage

