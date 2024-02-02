import Copyright2022FIXMYBUILD from "./Copyright2022FIXMYBUILD";
import styles from "./OrRegisterText.module.css";

const OrRegisterText = () => {
  return (
    <div className={styles.orRegisterText}>
      <img className={styles.orRegisterTextChild} alt="" src="/group-13.svg" />
      <div className={styles.frameGroupClose}>
        <div className={styles.materialsymbolscloseFrame}>
          <b className={styles.close}>Close</b>
          <img
            className={styles.materialSymbolscloseIcon}
            loading="eager"
            alt=""
            src="/materialsymbolsclose.svg"
          />
        </div>
      </div>
      <div className={styles.welcomeFramesGroup}>
        <div className={styles.signinText}>
          <h1 className={styles.createAnAccount}>Create an Account</h1>
          <div className={styles.alreadyhaveAccountText}>
            <div className={styles.alreadyHaveAn}>Already have an account?</div>
            <b className={styles.signIn}>Sign in</b>
          </div>
        </div>
      </div>
      <div className={styles.passwordInputGroup}>
        <div className={styles.frameParent}>
          <div className={styles.fullNameParent}>
            <div className={styles.fullName}>Full Name</div>
            <img className={styles.frameChild} alt="" src="/vector-4.svg" />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.passwordParent}>
              <div className={styles.password}>Password*</div>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </div>
            <img
              className={styles.instanceChild}
              alt=""
              src="/or-else-sign-in.svg"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.passwordGroup}>
              <div className={styles.password1}>Confirm Password*</div>
              <img className={styles.icon1} alt="" src="/icon.svg" />
            </div>
            <img
              className={styles.instanceItem}
              alt=""
              src="/or-else-sign-in.svg"
            />
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.passwordContainer}>
              <div className={styles.password2}>Email</div>
              <img className={styles.icon2} alt="" src="/icon.svg" />
            </div>
            <img
              className={styles.instanceInner}
              alt=""
              src="/or-else-sign-in.svg"
            />
          </div>
          <div className={styles.component7Parent}>
            <div className={styles.component7}>
              <div className={styles.frameDiv}>
                <div className={styles.rectangleWrapper}>
                  <img
                    className={styles.frameItem}
                    loading="eager"
                    alt=""
                    src="/rectangle-68@2x.png"
                  />
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div}>+44</div>
                </div>
                <img
                  className={styles.materialSymbolskeyboardArroIcon}
                  loading="eager"
                  alt=""
                  src="/materialsymbolskeyboardarrowdown.svg"
                />
              </div>
              <img
                className={styles.component7Child}
                loading="eager"
                alt=""
                src="/vector-4-4.svg"
              />
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.signinFormWrapper}>
                <div className={styles.signinForm}>
                  <div className={styles.password3}>Mobile phone</div>
                  <img className={styles.icon3} alt="" src="/icon.svg" />
                </div>
              </div>
              <img
                className={styles.fullNameInput}
                alt=""
                src="/vector-4-5.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.checkbox}>
        <div className={styles.copyrightInstance}>
          <div className={styles.checkBox}>
            <div className={styles.checkboxRectangle} />
            <div className={styles.password4}>
              <p className={styles.iHaveReadAndAgreeToFixmy}>
                <span
                  className={styles.iHaveRead}
                >{`I have read and agree to FixMyBuild’s `}</span>
                <b className={styles.termsOfService}>Terms of Service</b>
                <span className={styles.span}>{` `}</span>
              </p>
              <p className={styles.andPrivacyPolicy}>
                <span className={styles.and}>{`and `}</span>
                <b>Privacy Policy</b>
                <span className={styles.span1}>.</span>
              </p>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameInner} />
            <div className={styles.register}>Register</div>
          </div>
        </div>
      </div>
      <div className={styles.orRegisterGroup}>
        <div className={styles.orRegisterWithParent}>
          <b className={styles.orRegisterWith}>Or register with</b>
          <div className={styles.frameParent2}>
            <img
              className={styles.groupIcon}
              loading="eager"
              alt=""
              src="/group-53.svg"
            />
            <img
              className={styles.frameChild1}
              loading="eager"
              alt=""
              src="/group-54.svg"
            />
            <img
              className={styles.frameChild2}
              loading="eager"
              alt=""
              src="/group-551.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Copyright2022FIXMYBUILD
          copyright2022FixMyBuildLt="Copyright © 2024 Fix MANGLAM Ltd. All Rights Reserved."
          copyright2022Position="relative"
          copyright2022Top="unset"
          copyright2022Left="unset"
          copyright2022Display="inline-block"
        />
      </div>
    </div>
  );
};

export default OrRegisterText;
