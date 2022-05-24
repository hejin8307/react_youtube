import React, {useRef} from 'react';
import styles from './navbar.module.css';

const Navbar = ({onSearch}) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.home}>
        <button className={styles.menu}>
          <i className="fas fa-bars"></i>
        </button>
        <img className={styles.img} src="/images/youtube_logo.png" alt="logo" />
      </div>
      <div className={styles.search}>
        <input
          ref={inputRef}
          type="text"
          className={styles.searchInput}
          placeholder="Search"
          spellCheck="false"
          onKeyPress={onKeyPress}
        />
        <button className={styles.searchBtn} onClick={onClick}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <button className={styles.login}>
        <i className="fa-solid fa-circle-user"></i>
        <span className={styles.login_name}>로그인</span>
      </button>
    </nav>
  );
};

export default Navbar;
