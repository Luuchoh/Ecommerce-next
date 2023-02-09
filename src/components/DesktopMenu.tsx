import React from 'react';
import Link from 'next/link';

import styles from '@styles/DesktopMenu.module.scss';

const DesktopMenu: React.FC = () => {
  return (
    <div className={styles['desktop-menu']}>
      <ul>
        <li>
          <Link href="/" className={styles.title}>
            My orders
          </Link>
        </li>

        <li>
          <Link href="/">My account</Link>
        </li>

        <li>
          <Link href="/">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
