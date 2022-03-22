import React from "react";
import styles from "./main.module.css";
import img from "./main.jpg";

const Teste = () => {
  return (
    <div className={styles.outerContainer}>
      <div>
        <img className={styles.image} src={img} alt="imagem" />
      </div>
      <div className={styles.text}>A melhor agência de viagem!</div>
    </div>
  );
};

export default Teste;
