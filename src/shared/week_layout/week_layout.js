import React from 'react';
import Header from './_/header';
import Menu from './_/menu';
import Footer from './_/footer';
import './week_layout.css';

export default (props) => {
  return (
    <div>
      <Header />
      <Menu />
        {props.children}
      <Footer />
    </div>
  );
}
