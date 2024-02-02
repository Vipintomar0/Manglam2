import { useMemo } from "react";
import styles from "./Copyright2022FIXMYBUILD.module.css";

const Copyright2022FIXMYBUILD = ({
  copyright2022FixMyBuildLt,
  copyright2022Position,
  copyright2022Top,
  copyright2022Left,
  copyright2022Display,
}) => {
  const copyright2022Style = useMemo(() => {
    return {
      position: copyright2022Position,
      top: copyright2022Top,
      left: copyright2022Left,
      display: copyright2022Display,
    };
  }, [
    copyright2022Position,
    copyright2022Top,
    copyright2022Left,
    copyright2022Display,
  ]);

  return (
    <div className={styles.copyright2022FixMyBuild}>
      <b className={styles.copyright2022} style={copyright2022Style}>
        {copyright2022FixMyBuildLt}
      </b>
    </div>
  );
};

export default Copyright2022FIXMYBUILD;
