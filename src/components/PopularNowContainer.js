import { useMemo } from "react";
import styles from "./PopularNowContainer.module.css";

const PopularNowContainer = ({
  propWidth,
  propGap,
  propPadding,
  propHeight,
  propFlex,
  propHeight1,
  propWidth1,
  propHeight2,
  propWidth2,
}) => {
  const materialAndroidDropdownStyle = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
      padding: propPadding,
      height: propHeight,
    };
  }, [propWidth, propGap, propPadding, propHeight]);

  const body2Style = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight1,
      width: propWidth1,
    };
  }, [propFlex, propHeight1, propWidth1]);

  const rectangleBStyle = useMemo(() => {
    return {
      height: propHeight2,
      width: propWidth2,
    };
  }, [propHeight2, propWidth2]);

  return (
    <div
      className={styles.materialAndroidDropdown}
      style={materialAndroidDropdownStyle}
    >
      <div className={styles.blackStateOverlay} />
      <div className={styles.body2} style={body2Style}>
        Popular Now
      </div>
      <div className={styles.rectangleB} style={rectangleBStyle}>
        <img className={styles.maskIcon} alt="" src="/mask.svg" />
      </div>
    </div>
  );
};

export default PopularNowContainer;
