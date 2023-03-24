"use client"
import React, {useEffect} from "react";
import data from "../fakedata/data-cRR1vLWcnA9fLhaTUJrJH.json";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import { HiLocationMarker } from "react-icons/hi";

import styles from "../styles/MostVisited.module.css";

export default function MostVisited() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section data-aos="fade-up">
      <div>
        <div className={styles.title_wrapper}>
        <h1 className={styles.title}>Lugares mais Visitados</h1>
        </div>
        <div className={styles.mostVisited_container}>
          {data.map((item) => {
            return (
              <div className={styles.destinations_container} key={item.id}>
                <div className={styles.image_wrapper}>
                  <Image
                    style={ { borderTopLeftRadius: "9px", borderTopRightRadius: "9px" }}
                    src={item.img}
                    width={400}
                    height={200}
                    alt={item.pais}
                  />
                </div>
                <div className={styles.title_wrapper}>
                  <h1>{item.pais}</h1>
                  <p>
                    <HiLocationMarker />
                    {item.cidade}
                  </p>
                </div>
                <div className={styles.price_wrapper}>
                  <span>CULTURAL RELAX </span>
                  <span>R${item.price}</span>
                </div>
                <div className={styles.description_wrapper}>
                  <span>{item.descricao}</span>
                </div>
                <div className={styles.button_wrapper}>
                <button>Detalhes</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </section>
  );
}
