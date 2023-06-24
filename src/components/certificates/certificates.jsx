import React, { Component } from "react";
import "../certificates/certificates.scss";
import SimpleSlider from "./carousel";

export default class Certificates extends Component {
  render() {
    return (
      <section className="certificates">
        <div className="container">
          <h1>
            Качество продукции подтверждают <span>сертификаты</span>
          </h1>
          <SimpleSlider />
        </div>
      </section>
    );
  }
}
