import React from 'react';
import Header from './_/header';
import Footer from './_/footer';
import './layout.css';

export default (props) => {
  return (
    <div className="layout">
      <Header redirect={props.redirect} />
        {props.children}
      <Footer />
    </div>
  );
}
