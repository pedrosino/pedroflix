import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

function Layout(props) {
  return (
    <div>
      <Menu />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;