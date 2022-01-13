import React from 'react';
import styles from './Navbar.css';

class TopNav extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.nav}>
          <nav>
            <ul>
              <li><button>Pagina principal</button></li>
              <li><button>Quienes somos</button></li>
              <li><button>Galeria</button></li>
              <li><button>Contactos</button></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default TopNav;