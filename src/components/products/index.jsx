import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../products/products.scss";
import img1 from "../../assets/images/1 (1).png";
import img2 from "../../assets/images/2 (1).png";
import img3 from "../../assets/images/3 (1).png";
import img4 from "../../assets/images/4 (1).png";
import img5 from "../../assets/images/5 (1).png";

const Products = () => {
  return (
    <section id="products" className="products">
      <div className="container">
        <h1>
          Наша <span>продукция</span>
        </h1>
        <Tabs>
          <TabList>
            <Tab>Ламинатные тубы</Tab>
            <Tab>Экструзионные тубы</Tab>
            <Tab>Другая упаковка</Tab>
          </TabList>

          <TabPanel>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
          </TabPanel>
          <TabPanel>
            <img src={img2} alt="" />
            <img src={img1} alt="" />
            <img src={img5} alt="" />
            <img src={img4} alt="" />
            <img src={img3} alt="" />
          </TabPanel>
          <TabPanel>
            <img src={img5} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img2} alt="" />
            <img src={img1} alt="" />
          </TabPanel>
        </Tabs>
        <div className="button">
          <button className="btn">Перейти в каталог</button>
        </div>
      </div>
    </section>
  );
};

export default Products;