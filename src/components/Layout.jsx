import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container-fluid px-0 mt-4">
        {children || <Outlet />}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
