import React, { Component } from "react";
import style from "./Header.module.scss";

import logo from "../../assets/images/nav-logo.svg";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: false,
    };
  }

  openNav = () => {
    this.setState({ nav: !this.state.nav });
  };

  toggleMode = () => {
    document.body.classList.toggle("dark");
  };

  render() {
    const { nav } = this.state;

    return (
      <header>
        <div className="container">
          <div className={style["nav"]}>
            <img src={logo} alt="" />
            <div className={style["links"]}>
              <a href="#products">Продукция</a>
              <a href="#certificates">Сертификаты</a>
              <a href="#komanda">Наша команда</a>
              <a href="#about">О нас</a>
              <a href="#news">Новости</a>
              <a href="#vacancies">Вакансии</a>
              <a href="#contact">Контакты</a>
            </div>
            <div className={style["btns"]}>
              <button className={style["nav-btn"]} onClick={this.openNav}>
                =
              </button>
              <button className={style["btn"]} onClick={this.toggleMode}>
                mode
              </button>
            </div>
            {nav ? (
              <div className={style["res-links"]}>
                <a href="#products">Продукция</a>
                <a href="#certificates">Сертификаты</a>
                <a href="#komanda">Наша команда</a>
                <a href="#about">О нас</a>
                <a href="#news">Новости</a>
                <a href="#vacancies">Вакансии</a>
                <a href="#contact">Контакты</a>
              </div>
            ) : null}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
