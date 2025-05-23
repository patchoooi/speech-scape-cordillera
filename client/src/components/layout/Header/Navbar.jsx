import React from 'react';

import Logo from './Logo';
import Search from '../../features/Search/Search.jsx';
import Links from './Links';
import styles from './Navbar.module.css';

/**
 * Reusable Navbar component that renders the logo, navigation links, and search input field.
 * @returns {JSX.Element} - Rendered Navbar component
 */
function Navbar() {
  return (
    <header className={styles.header}>
      <Logo />
      <Links className={styles.links}/>
      <Search className={styles.search}/>
    </header>
  );
}

export default Navbar;