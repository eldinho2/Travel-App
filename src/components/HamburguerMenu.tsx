'use client'

import React, {useState} from "react";
import styles from "../styles/Header.module.css";

export const HamburguerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const HandleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }


  return (
    <div className={ openMenu ? styles.hamburguer_container_opened : styles.hamburguer_container }>
      <div onClick={HandleOpenMenu} id="hamburguer" className={ openMenu ? styles.hamburger_active : styles.hamburger }>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      {
        openMenu && (
          <div className={styles.hamburguer_menu_Open}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/packages">Packages</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/pages">Pages</a>
              </li>
              <li>
                <a href="/news">News</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        )
      }
    </div>
  )
}