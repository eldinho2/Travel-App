import React from "react";
import RangeValue from "../components/RangeValue";
import { BiMap } from "react-icons/bi";

import style from "../styles/MainContent.module.css";
import MostVisited from "../components/MostVisited";

const video =
  "https://cdn.discordapp.com/attachments/616035988518600704/1088207263359045732/ocean-51585.mp4";

export default function Home() {
  return (
    <main>
      <section className={style.home}>
        <video className={style.video} src={video} muted autoPlay loop></video>
        <div className={style.overlay}></div>
        <div className={style.homeContent_container}>
          <div className={style.textDiv}>
            <span className={style.smallText}>VEJA NOSSOS PACOTES</span>
            <h1 className={style.homeTitle}>Procure pelo seu Feriado</h1>
          </div>
          <div className={style.searchDiv}>
            <div className={style.inputSearch}>
              <span>Procure pelo seu destino</span>
              <input type="text" placeholder="Procure pelo seu destino" />
              <BiMap className={style.iconSearch} />
            </div>
            <div className={style.inputSearch}>
              <span>Selecione sua data</span>
              <input type="date" />
            </div>
            <div className={style.inputSearch}>
              <span>Selecione o número de pessoas</span>
              <select name="persons" id="persons">
                <option value="1">1 pessoa</option>
                <option value="2">2 pessoas</option>
                <option value="3">3 pessoas</option>
                <option value="4">4 pessoas</option>
                <option value="5">5 pessoas</option>
                <option value="max">+ de 5 pessoas</option>
              </select>
            </div>
            <div className={style.maxPrice}>
              <span>Preco maximo</span>
              <RangeValue />
            </div>
            <button>Buscar</button>
          </div>
        </div>
      </section>
      <MostVisited/>
    </main>
  );
}
