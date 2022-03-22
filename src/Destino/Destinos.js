import React from "react";
import data from "../data/destinos";
import styles from "./destinos.module.css"

const Destinos = () => {
  return (
    <div className={styles.container}>
      {data.map(({ name, description, price, img }) => {
        return (
          
            <div key={name} className={styles.inner_container}>
              <p className={styles.title2}>{name}</p>
              <p className={styles.description}>{description}</p>
              <p>{`Preço: ${price}`}</p>
              <img src={img} alt="" className={styles.image} />
            </div>
          
        );
      })}
    </div>
  );
};

export default Destinos;
