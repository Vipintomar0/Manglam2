import Copyright2022FIXMYBUILD from "./Copyright2022FIXMYBUILD";
import styles from "./FooterFrame.module.css";

const FooterFrame = () => {
  return (
    <footer className={styles.footerFrame}>
      <div className={styles.weUseAContainer}>
        <p className={styles.weUseAPrivacyFocusedProdu}>
          <span>{`We use a privacy-focused product called Matomo on our website to analyze traffic and improve your user experience. The tool processes your IP address and stores cookies on your browser for 13 months. This data is processed by us and our web hosting platform. We do not share this data with the creators of Matomo themselves or any other 3rd parties. If you are comfortable with this please click "Accept".  Otherwise, or if you are under 18 years old, please click "Decline".
 `}</span>
          <span className={styles.learnMoreAbout}>
            Learn more about our Privacy policy
          </span>
          <span className={styles.span}>.</span>
        </p>
      </div>
      <div className={styles.policyFrames}>
        <div className={styles.acceptDecline}>
          <div className={styles.privacyPolicy}>Privacy policy</div>
          <div className={styles.terms}>Terms</div>
        </div>
        <div className={styles.policyInstance}>
          <div className={styles.acceptDecline1}>
            <div className={styles.termsFrame}>
              <div className={styles.accept}>Accept</div>
            </div>
            <div className={styles.termsFrame1}>
              <div className={styles.decline}>Decline</div>
            </div>
          </div>
        </div>
        <div className={styles.copyrightText}>
          <Copyright2022FIXMYBUILD
            copyright2022FixMyBuildLt="Copyright © 2022 Fix My Build Ltd. All Rights Reserved."
            copyright2022Position="relative"
            copyright2022Top="unset"
            copyright2022Left="unset"
            copyright2022Display="inline-block"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterFrame;
