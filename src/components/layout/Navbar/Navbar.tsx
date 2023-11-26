import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Container>
        <h1 className={styles.navbarBrand}>PokepiApp</h1>
        <div>
          <Link className={styles.navbarLink} to={"/"}>
            Home
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
