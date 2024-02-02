import { useMemo } from "react";
import AtomsButtonsResources from "./AtomsButtonsResources";
import styles from "./Frame.module.css";

const Frame = ({
  background,
  name1,
  label,
  propPadding,
  propPadding1,
  propAlignSelf,
  propFlex,
  propBackgroundColor,
}) => {
  const frameStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const labelStyle = useMemo(() => {
    return {
      padding: propPadding1,
      alignSelf: propAlignSelf,
    };
  }, [propPadding1, propAlignSelf]);

  const label1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.frame} style={frameStyle}>
      <img
        className={styles.backgroundIcon}
        loading="eager"
        alt=""
        src={background}
      />
      <div className={styles.name}>{name1}</div>
      <div className={styles.label} style={labelStyle}>
        <div className={styles.label1} style={label1Style}>
          {label}
        </div>
      </div>
      <div className={styles.frameInner}>
        <div className={styles.shapeParent}>
          <AtomsButtonsResources
            atomsButtonsResourcesDisplay="flex"
            atomsButtonsResourcesFlexDirection="row"
            atomsButtonsResourcesPosition="relative"
            atomsButtonsResourcesFlex="1"
            atomsButtonsResourcesAlignSelf="unset"
            rectangleDivTop="-0.1px"
            rectangleDivRight="-0.3px"
            rectangleDivBottom="0.1px"
            rectangleDivLeft="0.3px"
            rectangleDivMargin="0 !important"
            divPosition="relative"
            divHeight="26px"
            divWidth="unset"
            divTop="unset"
            divRight="unset"
            divBottom="unset"
            divLeft="unset"
            divFlex="1"
            rectangleDivBackgroundColor="#bd562a"
            rectangleDivRight1="0%"
            rectangleDivLeft1="0%"
          />
          <div className={styles.label2}>
            <div className={styles.div}>see more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
