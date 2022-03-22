import React from 'react'
import data from "./promo.js"
import styles from "./promo.module.css"

const Promocoes = () => {
  return (
    <div className={styles.outer}>
      {data.map(({name, description, price, img, discount})=>{
        return (
          <div className={styles.outer2}>
            <div key={name} className={styles.inner_container}>
              <p className={styles.title2}>{name}</p>
              <p className={styles.description}>{description}</p>
              <p>{`Desconto: ${discount}`}</p>
              <p>{`Preço: ${price}`}</p>
              <img src={img} alt="" className={styles.image} />
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Promocoes