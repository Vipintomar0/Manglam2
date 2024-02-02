import { useMemo } from "react";
import styles from "./ContainerForm.module.css";

const ContainerForm = ({ dimensionCode, propPadding, propPadding1 }) => {
  const dharmikCard1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.dharmikCard} style={dharmikCard1Style}>
      <div className={styles.dharmikCardChild} />
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
      <div className={styles.haldiDharmikParent}>
        <div className={styles.haldiDharmik}>{`Haldi Dharmik `}</div>
        <div className={styles.frameWrapper} style={frameDiv1Style}>
          <div className={styles.priceIconParent}>
            <img className={styles.priceIcon} alt="" src="/price-icon.svg" />
            <div className={styles.div1}>300</div>
          </div>
        </div>
      </div>
      <div className={styles.connect}>
        <div className={styles.connectChild} />
        <div className={styles.connect1}>connect</div>
      </div>
    </div>
  );
};

export default ContainerForm;
