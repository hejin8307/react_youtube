import React, {Component} from 'react';
import styles from './navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.home}>
          <button className={styles.menu}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <img
            className={styles.img}
            src="/images/youtube_logo.png"
            alt="logo"
          />
        </div>
        <form className={styles.form}>
          <input type="text" className={styles.input} placeholder="Search" />
          <button className={styles.searchBtn}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <button className={styles.login}>
          <i className="fa-solid fa-circle-user"></i>
          <span className={styles.login_name}>Log In</span>
        </button>
      </nav>
    );
  }
}

export default Navbar;
