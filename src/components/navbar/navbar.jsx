import React, {Component} from 'react';
import styles from './navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navbar_home}>
          <button className={styles.navbar_menu}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <img
            className={styles.img}
            src="/images/youtube_logo.png"
            alt="logo"
          />
        </div>
        <form className={styles.navbar_form}>
          <input
            type="text"
            className={styles.navbar_input}
            placeholder="Search"
          />
          <button className={styles.navbar_search}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <button className={styles.navbar_login}>
          <i className="fa-solid fa-circle-user"></i>
          <span className={styles.navbar_login_name}>Log In</span>
        </button>
      </nav>
    );
  }
}

export default Navbar;
