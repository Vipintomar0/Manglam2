import Copyright2022FIXMYBUILD from "./Copyright2022FIXMYBUILD";
import styles from "./CloseButtonFrame.module.css";

const CloseButtonFrame = () => {
  return (
    <form className={styles.closeButtonFrame}>
      <div className={styles.groupErrorMessageParent}>
        <div className={styles.groupErrorMessage}>
          <b className={styles.copyright2024}>
            Copyright © 2024 Fix MANGLAM Ltd. All Rights Reserved.
          </b>
        </div>
        <div className={styles.closeParent}>
          <b className={styles.close}>Close</b>
          <img
            className={styles.materialSymbolscloseIcon}
            loading="eager"
            alt=""
            src="/materialsymbolsclose.svg"
          />
        </div>
      </div>
      <div className={styles.welcomeFrame}>
        <div className={styles.signInParent}>
          <h1 className={styles.signIn}>Sign in</h1>
          <div className={styles.notMemberText}>
            <div className={styles.notAMember}>Not a member?</div>
            <b className={styles.registerNow}>Register now!</b>
          </div>
        </div>
      </div>
      <div className={styles.passwordInputGroup}>
        <div className={styles.instanceParent}>
          <div className={styles.frameParent}>
            <div className={styles.passwordParent}>
              <a
                className={styles.password}
                href="mailto:John.abc@gmail.com"
                target="_blank"
              >
                John.abc@gmail.com
              </a>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </div>
            <img
              className={styles.orElseSignIn}
              alt=""
              src="/or-else-sign-in.svg"
            />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.passwordGroup}>
              <div className={styles.password1}>Password*</div>
              <img className={styles.icon1} alt="" src="/icon.svg" />
            </div>
            <img
              className={styles.instanceChild}
              alt=""
              src="/or-else-sign-in.svg"
            />
          </div>
          <div className={styles.checkBox}>
            <div className={styles.checkBoxChild} />
            <div className={styles.password2}>Remember me</div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroupWithTexts}>
        <div className={styles.loginContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.signIn1}>Sign in</div>
          </div>
          <b className={styles.forgotPassword}> Forgot password?</b>
        </div>
      </div>
      <div className={styles.signinframe}>
        <div className={styles.orsigninwithframe}>
          <b className={styles.orSignIn}>Or sign in with</b>
          <div className={styles.closebuttonframe}>
            <img
              className={styles.closebuttonframeChild}
              loading="eager"
              alt=""
              src="/group-53.svg"
            />
            <img
              className={styles.closebuttonframeItem}
              loading="eager"
              alt=""
              src="/group-54.svg"
            />
            <img
              className={styles.closebuttonframeInner}
              loading="eager"
              alt=""
              src="/group-55.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footercopyrightinstance}>
        <Copyright2022FIXMYBUILD
          copyright2022FixMyBuildLt="Copyright © 2022 Fix MANGLAM Ltd. All Rights Reserved."
          copyright2022Position="relative"
          copyright2022Top="unset"
          copyright2022Left="unset"
          copyright2022Display="inline-block"
        />
      </div>
    </form>
  );
};

export default CloseButtonFrame;
