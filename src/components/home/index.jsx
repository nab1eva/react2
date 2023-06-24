import React, { Component } from "react";
import "../home/Home.scss";

export default class index extends Component {
  render() {
    return (
      <section className="home">
        <div className="container">
          <div className="content">
            <div className="left">
              <h6>LEANGROUP - тубы и этикетки</h6>
              <h1>Ламинатные тубы</h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button>Каталог</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
