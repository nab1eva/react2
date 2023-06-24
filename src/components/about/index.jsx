import React, { Component } from "react";
import "../about/About.scss";

import video from "../../assets/images/video.png";
import button from "../../assets/images/button.png";

export default class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="container">
          <div className="about-header">
            <h1>
              О компании <span>LEANGROUP</span>
            </h1>
          </div>
          <div className="about-text">
            <div className="img">
              <img className="i1" src={video} alt="" />
              <img className="i2" src={button} alt="" />
            </div>
            <div className="text">
              <p>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб. <br /><br /> Имея две технологии – для
                производства ламинатных и экструзионных туб, мы предлагаем вам
                широкий спектр возможностей. Большим преимуществом является
                собственный печатный цех в ламинате и in-line печать в экструзии
                с возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции. <br /> <br /> С января 2018
                года компания стала членом Европейской Ассоциации производителей
                туб (ETMA), что подтверждает сильную позицию бренда и на рынке
                Европы.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
