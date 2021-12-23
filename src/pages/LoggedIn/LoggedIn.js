import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import MainScreen from '../../components/MainScreen/MainScreen';

const LoggedIn = () => {
    return (
        <>
        <Navbar />
        <MainScreen title='Sveiki sugrize'>Main Screen</MainScreen>
        <main>
            Logged In
        </main>
        </>
    )
}

export default LoggedIn
