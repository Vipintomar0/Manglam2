import styles from "./ContainerForm1.module.css";

const ContainerForm1 = ({ dimensionCode }) => {
  return (
    <div className={styles.acharyaCard}>
      <div className={styles.acharyaCardChild} />
      <div className={styles.acharyaCardInner}>
        <div className={styles.rectangleParent}>
          <img className={styles.frameChild} alt="" src={dimensionCode} />
          <div className={styles.rating}>
            <div className={styles.ratingChild} />
            <img
              className={styles.starIcon}
              loading="eager"
              alt=""
              src="/star.svg"
            />
            <div className={styles.div}>5</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.beautyParlorParent}>
            <div className={styles.beautyParlor}>Beauty Parlor</div>
            <div className={styles.frameContainer}>
              <div className={styles.priceIconParent}>
                <img
                  className={styles.priceIcon}
                  alt=""
                  src="/price-icon-1.svg"
                />
                <div className={styles.div1}>100</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.connect}>
          <div className={styles.connectChild} />
          <div className={styles.connect1}>connect</div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm1;
