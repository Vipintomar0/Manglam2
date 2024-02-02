import { useMemo } from "react";
import styles from "./AtomsButtonsResources.module.css";

const AtomsButtonsResources = ({
  atomsButtonsResourcesDisplay,
  atomsButtonsResourcesFlexDirection,
  atomsButtonsResourcesPosition,
  atomsButtonsResourcesFlex,
  atomsButtonsResourcesAlignSelf,
  rectangleDivTop,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivLeft,
  rectangleDivMargin,
  divPosition,
  divHeight,
  divWidth,
  divTop,
  divRight,
  divBottom,
  divLeft,
  divFlex,
  rectangleDivBackgroundColor,
  rectangleDivRight1,
  rectangleDivLeft1,
}) => {
  const atomsButtonsResourcesStyle = useMemo(() => {
    return {
      display: atomsButtonsResourcesDisplay,
      flexDirection: atomsButtonsResourcesFlexDirection,
      position: atomsButtonsResourcesPosition,
      flex: atomsButtonsResourcesFlex,
      alignSelf: atomsButtonsResourcesAlignSelf,
    };
  }, [
    atomsButtonsResourcesDisplay,
    atomsButtonsResourcesFlexDirection,
    atomsButtonsResourcesPosition,
    atomsButtonsResourcesFlex,
    atomsButtonsResourcesAlignSelf,
  ]);

  const rectangleDivStyle = useMemo(() => {
    return {
      top: rectangleDivTop,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      left: rectangleDivLeft,
      margin: rectangleDivMargin,
    };
  }, [
    rectangleDivTop,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivLeft,
    rectangleDivMargin,
  ]);

  const divStyle = useMemo(() => {
    return {
      position: divPosition,
      height: divHeight,
      width: divWidth,
      top: divTop,
      right: divRight,
      bottom: divBottom,
      left: divLeft,
      flex: divFlex,
    };
  }, [
    divPosition,
    divHeight,
    divWidth,
    divTop,
    divRight,
    divBottom,
    divLeft,
    divFlex,
  ]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
      right: rectangleDivRight1,
      left: rectangleDivLeft1,
    };
  }, [rectangleDivBackgroundColor, rectangleDivRight1, rectangleDivLeft1]);

  return (
    <div
      className={styles.atomsButtonsResources}
      style={atomsButtonsResourcesStyle}
    >
      <div
        className={styles.atomsButtonsResourcesChild}
        style={rectangleDivStyle}
      />
      <div className={styles.div} style={divStyle}>
        <div className={styles.child} style={rectangleDiv1Style} />
      </div>
    </div>
  );
};

export default AtomsButtonsResources;
