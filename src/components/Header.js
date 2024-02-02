import { Button } from "@chakra-ui/react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.fixmybuild}>
        <span className={styles.fix}>Fix</span>
        <span className={styles.mybuild}>MyBuild</span>
      </div>
      <div className={styles.aboutUs}>About us</div>
      <div className={styles.frame} />
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <div className={styles.userIcon}>
            <div className={styles.loginText}>
              <div className={styles.registerText}>
                <div className={styles.welcomeText}>
                  <div className={styles.manglamEventsFrame}>
                    <div className={styles.contactUsText}>
                      <div className={styles.contactUs}>Contact us</div>
                      <img
                        className={styles.group11761}
                        loading="eager"
                        alt=""
                        src="/group-1176-2@2x.png"
                      />
                    </div>
                    <div className={styles.manglamEventsFrameChild} />
                    <div className={styles.frameParent}>
                      <div className={styles.frameWrapper}>
                        <Button className={styles.userIconParent}>
                          <img
                            className={styles.userIcon1}
                            alt=""
                            src="/usericon.svg"
                          />
                          <div className={styles.login}>Login</div>
                        </Button>
                      </div>
                      <div className={styles.registerWrapper}>
                        <div className={styles.register}>Register</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame3} />
      <div className={styles.frame4} />
      <div className={styles.frame5} />
      <div className={styles.frame6} />
    </header>
  );
};

export default Header;
