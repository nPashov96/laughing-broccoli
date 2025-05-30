import React from 'react';
import BackButton from '../../components/BackButton';
import Header from './Components/Header';
import '../eCommerce/Styling/main.css';
import MainContent from './Components/MainContent';
import { CartProvider } from './Contexts/CartContext';
import GalleryOverlay from './Components/GalleryOverlay';
import { GalleryProvider } from './Contexts/GalleryContext';

function ECommercePage() {
  return (
    <>
      <section className="relative">
        <div className="flex items-center bg-background h-[65px]">
          <BackButton />
          <div>
            <h1 className=" text-white font-semibold">E-Commerce</h1>
          </div>
        </div>
      </section>
      <section className="h-screen bg-white relative">
        <CartProvider>
          <GalleryProvider>
            <Header />
            <MainContent />
            <GalleryOverlay />
          </GalleryProvider>
        </CartProvider>
      </section>
    </>
  );
}

export default ECommercePage;
