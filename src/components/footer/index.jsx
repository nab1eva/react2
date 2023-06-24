import React from "react";
import logo from "../../assets/images/logo 2.png";
import i1 from "../../assets/images/vk.png";
import i2 from "../../assets/images/fb.png";
import i3 from "../../assets/images/linkedin.png";
import "../footer/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="head">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
            <ul>
              <li>
                <img src={i1} alt="" />
              </li>
              <li>
                <img src={i2} alt="" />
              </li>
              <li>
                <img src={i3} alt="" />
              </li>
            </ul>
          </div>
          <div className="footer_list">
            <ul>
              <li>
                <a className="title" href="#home">
                  Продукция
                </a>
              </li>
              <li>
                <a href="#home">Ламинатные тубы</a>
              </li>
              <li>
                <a href="#home">Экструзионные тубы</a>
              </li>
              <li>
                <a href="#home">Другая упаковка</a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="title" href="#home">
                  Компания
                </a>
              </li>
              <li>
                <a href="#home">О нас</a>
              </li>
              <li>
                <a href="#home">Наша команда</a>
              </li>
              <li>
                <a href="#home">Сертификаты</a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="title" href="#home">
                  Разделы
                </a>
              </li>
              <li>
                <a href="#home">Контакты</a>
              </li>
              <li>
                <a href="#home">Новости</a>
              </li>
              <li>
                <a href="#home">Вакансии</a>
              </li>
            </ul>
            <ul>
              <ul>
                <li>
                  <a href="#home">
                    Беларусь
                  </a>
                </li>
                <li>
                  <a href="#home">+375 (17) 270 53 77</a>
                </li>
                <li>
                  <a href="#home">+375 (17) 270 53 78</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#home">
                    Москва
                  </a>
                </li>
                <li>
                  <a href="#home">+375 (17) 270 53 77</a>
                </li>
                <li>
                  <a href="#home">+375 (17) 270 53 78</a>
                </li>
              </ul>
            </ul>
            <ul>
              <ul>
                <li>
                  <a href="#home">
                    Европа
                  </a>
                </li>
                <li>
                  <a href="#home">+375 (17) 270 53 77</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#home">
                    Екатеринбург
                  </a>
                </li>
                <li>
                  <a href="#home">+375 (17) 270 53 77</a>
                </li>
              </ul>
            </ul>
          </div>
          <small>
            © 2022 Leangroup. All Rights Reserved. <br />
            Разработка и продвижение сайтов SkyWeb.by
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
