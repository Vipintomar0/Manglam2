import styles from "./MainHeader.module.css";

const MainHeader = ({ onLoginContainerClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerChild} />
      <div className={styles.headerItem} />
      <div className={styles.fixmybuild}>
        <span className={styles.fix}>Fix</span>
        <span className={styles.mybuild}>MyBuild</span>
      </div>
      <div className={styles.headerInner}>
        <div className={styles.aboutUsParent}>
          <h2 className={styles.aboutUs}>About us</h2>
          <h2 className={styles.contactUs}>Contact us</h2>
        </div>
      </div>
      <div className={styles.group11762Wrapper}>
        <img
          className={styles.group11762}
          loading="eager"
          alt=""
          src="/group-1176-2@2x.png"
        />
      </div>
      <div className={styles.frameDiv} />
      <div className={styles.frameParent}>
        <div className={styles.mingcutenotificationLineParent}>
          <img
            className={styles.mingcutenotificationLineIcon}
            alt=""
            src="/mingcutenotificationline.svg"
          />
          <div className={styles.loginWrapper}>
            <div className={styles.login} onClick={onLoginContainerClick}>
              <div className={styles.frameGroup}>
                <img className={styles.frameChild} alt="" src="/group-8.svg" />
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameItem}
                    loading="eager"
                    alt=""
                    src="/ellipse-14.svg"
                  />
                  <b className={styles.b}>2</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vectorGroup}>
          <img
            className={styles.frameInner}
            loading="eager"
            alt=""
            src="/ellipse-14.svg"
          />
          <b className={styles.b1}>2</b>
        </div>
        <img
          className={styles.groupIcon}
          loading="eager"
          alt=""
          src="/group-8-11.svg"
        />
      </div>
    </header>
  );
};

export default MainHeader;
