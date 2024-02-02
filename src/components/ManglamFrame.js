import styles from "./ManglamFrame.module.css";

const ManglamFrame = () => {
  return (
    <div className={styles.manglamFrame}>
      <div className={styles.privacyInfo}>
        <div className={styles.policyFrames}>
          <img
            className={styles.policyFramesChild}
            alt=""
            src="/group-28.svg"
          />
          <div className={styles.welcomeText}>
            <div className={styles.showcase} />
            <div className={styles.welcomeToManglamContainer}>
              <span>
                <p className={styles.welcomeToManglam}>
                  Welcome to Manglam – Your Premier Event Partner!
                </p>
                <p className={styles.blankLine}>
                  <b>&nbsp;</b>
                </p>
                <p className={styles.atManglamWeUnderstandThat}>
                  <b>
                    At Manglam, we understand that life's most special moments
                    deserve to be celebrated in a way that is truly memorable.
                    Our platform is designed to be your one-stop destination for
                    all your event needs, providing a seamless experience for
                    booking services for Mehendi, Haldi, Marriage, Birthday,
                    Anniversary, Pr-wedding,Beauty Parlor Destination Wedding,
                    and more.
                  </b>
                </p>
              </span>
            </div>
          </div>
        </div>
        <img
          className={styles.manglamEvents1}
          loading="eager"
          alt=""
          src="/manglam-events-1@2x.png"
        />
      </div>
    </div>
  );
};

export default ManglamFrame;
