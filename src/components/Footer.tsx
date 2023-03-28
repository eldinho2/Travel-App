import React from "react";
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";

import style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer_wraaper}>
      <video
        className={style.footer_video}
        src="/video/footerVideo.mp4"
        muted
        autoPlay
        loop
      ></video>
      <div className={style.footer_overlay}></div>
      <div className={style.footer_content}>
        <div className={style.footer_GetInToutch}>
          <div data-aos="fade-up" data-aos-once="true" className={style.footer_newsLetterWraaper}>
            <div data-aos="fade-up" data-aos-once="true" className={style.footer_newsLetterText}>
              <span>MANTENHA CONTATO</span>
              <h1>Viaje conosco</h1>
            </div>
            <div className={style.footer_newsLetter}>
              <form action="">
                <label htmlFor="NewsLetter">
                  <input type="text" placeholder="Digite seu email" />
                </label>
                <button className={style.footer_newsLetterbTN}><BsFillSendFill/> Enviar</button>
              </form>
            </div>
          </div>
          <div className={style.footer_Infos}>
            <div data-aos="fade-up" data-aos-once="true" data-aos-delay="50"
    data-aos-duration="1000" className={style.footer_InfosDesc}>
              <h3>Travel.</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                ab id provident nostrum molestiae harum similique officia
                aliquid minima rerum culpa soluta nam non ducimus qui magni,
                cumque reiciendis odio?
              </span>
              <div>
                <p>© 2021 Travel. All rights reserved.</p>
              </div>
              <div>
                <a href="#">
                  <AiFillInstagram />
                </a>
                <a href="#">
                  <AiFillFacebook />
                </a>
                <a href="#">
                  <AiFillTwitterCircle />
                </a>
              </div>
            </div>
            <div className={style.footer_InfosLinks}>
              <div data-aos="fade-up" data-aos-once="true" className={style.footer_InfosLinksItem}>
                <h3>Nossa Empresa</h3>
                <ul>
                  <li>
                    <a href="#">Servicos</a>
                  </li>
                  <li>
                    <a href="#">Seguros</a>
                  </li>
                  <li>
                    <a href="#">Agencia</a>
                  </li>
                  <li>
                    <a href="#">Turismo</a>
                  </li>
                  <li>
                    <a href="#">Pagamentos</a>
                  </li>
                </ul>
              </div>
              <div data-aos="fade-up" data-aos-once="true" className={style.footer_InfosLinksItem}>
                <h3>Parceiros</h3>
                <ul>
                  <li>
                    <a href="#">Reservas</a>
                  </li>
                  <li>
                    <a href="#">TripAdvisor</a>
                  </li>
                  <li>
                    <a href="#">Aluguel de carros</a>
                  </li>
                  <li>
                    <a href="#">Hostelworld</a>
                  </li>
                  <li>
                    <a href="#">Trivago</a>
                  </li>
                </ul>
              </div>
              <div data-aos="fade-up" data-aos-once="true" className={style.footer_InfosLinksItem}>
                <h3>Ultimo Minuto</h3>
                <ul>
                  <li>
                    <a href="#">Londres</a>
                  </li>
                  <li>
                    <a href="#">California</a>
                  </li>
                  <li>
                    <a href="#">Indonesia</a>
                  </li>
                  <li>
                    <a href="#">Europa</a>
                  </li>
                  <li>
                    <a href="#">Oceania</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
