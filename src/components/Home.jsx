import React from 'react';
import Header from './Header/Header';
import TopBar from './TopBar/TopBar';
import Offers from './Offers/Offers';
import Footer from './Footer/Footer';
import UpperFooter from './Footer/UpperFooter';
import AppLink from './AppLink/AppLink';

function Home() {
  return (
    <div style={{backgroundColor: '#f2f2f2'}}>
      
    <Header />
    <TopBar />
    <Offers />

    {/* <AppLink /> */}

    {/* <UpperFooter /> */}
    <Footer />
    </div>
  )
}

export default Home
