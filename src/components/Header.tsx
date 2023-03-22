import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { MdTravelExplore } from "react-icons/md";

export default function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_title}>
        <h1><Link href="/"><MdTravelExplore className={styles.iconHeader}/>Travel.</Link></h1>
      </div>
      <div className={styles.header_list_container}>
        <ul className={styles.header_list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/packages">Packages</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/pages">Pages</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className={styles.header_button}>BOOK NOW</button>
      </div>
    </header>
  );
}
