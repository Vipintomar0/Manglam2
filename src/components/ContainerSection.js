import { useMemo } from "react";
import styles from "./ContainerSection.module.css";

const ContainerSection = ({
  starIconHeight,
  starIconWidth,
  frameDivPadding,
  ratingPadding,
  propPadding,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: starIconHeight,
      width: starIconWidth,
    };
  }, [starIconHeight, starIconWidth]);

  const dharmikCardStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const connectStyle = useMemo(() => {
    return {
      padding: ratingPadding,
    };
  }, [ratingPadding]);

  const connect1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.purchaseItemInner} style={frameDivStyle}>
      <div className={styles.vivekCardParent}>
        <div className={styles.vivekCard}>
          <div className={styles.vivekCardChild} />
          <div className={styles.vivekCardInner}>
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-76@2x.png"
              />
              <div className={styles.rating}>
                <div className={styles.ratingChild} />
                <img
                  className={styles.starIcon}
                  loading="eager"
                  alt=""
                  src="/star.svg"
                />
                <div className={styles.div}>5</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.mehdiVivekKParent}>
              <div className={styles.mehdiVivekK}>Mehdi Vivek K</div>
              <div className={styles.frameWrapper}>
                <div className={styles.priceIconParent}>
                  <img
                    className={styles.priceIcon}
                    alt=""
                    src="/price-icon.svg"
                  />
                  <div className={styles.div1}>100</div>
                </div>
              </div>
            </div>
            <div className={styles.connect}>
              <div className={styles.connectChild} />
              <div className={styles.connect1}>connect</div>
            </div>
          </div>
        </div>
        <div className={styles.acharyaCardParent}>
          <div className={styles.acharyaCard}>
            <div className={styles.acharyaCardChild} />
            <div className={styles.acharyaCardInner}>
              <div className={styles.rectangleGroup}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/rectangle-76-1@2x.png"
                />
                <div className={styles.rating1}>
                  <div className={styles.ratingItem} />
                  <img
                    className={styles.starIcon1}
                    loading="eager"
                    alt=""
                    src="/star.svg"
                  />
                  <div className={styles.div2}>5</div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.beautyParlorParent}>
                  <div className={styles.beautyParlor}>Beauty Parlor</div>
                  <div className={styles.frameDiv}>
                    <div className={styles.priceIconGroup}>
                      <img
                        className={styles.priceIcon1}
                        alt=""
                        src="/price-icon-1.svg"
                      />
                      <div className={styles.div3}>100</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.connect2}>
                <div className={styles.connectItem} />
                <div className={styles.connect3}>connect</div>
              </div>
            </div>
          </div>
          <div className={styles.dharmikCard} style={dharmikCardStyle}>
            <div className={styles.dharmikCardChild} />
            <div className={styles.rectangleContainer}>
              <img
                className={styles.frameInner}
                alt=""
                src="/rectangle-76-2@2x.png"
              />
              <div className={styles.rating2}>
                <div className={styles.ratingInner} />
                <img
                  className={styles.starIcon2}
                  loading="eager"
                  alt=""
                  src="/star.svg"
                />
                <div className={styles.div4}>5</div>
              </div>
            </div>
            <div className={styles.haldiDharmikParent}>
              <div className={styles.haldiDharmik}>{`Haldi Dharmik `}</div>
              <div className={styles.frameWrapper1}>
                <div className={styles.priceIconContainer}>
                  <img
                    className={styles.priceIcon2}
                    alt=""
                    src="/price-icon.svg"
                  />
                  <div className={styles.div5}>300</div>
                </div>
              </div>
            </div>
            <div className={styles.connect4}>
              <div className={styles.connectInner} />
              <div className={styles.connect5}>connect</div>
            </div>
          </div>
          <div className={styles.sujoySen}>
            <div className={styles.sujoySenChild} />
            <div className={styles.sujoySenInner}>
              <div className={styles.rectangleParent1}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-76-3@2x.png"
                />
                <div className={styles.rating3}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.starIcon3}
                    loading="eager"
                    alt=""
                    src="/star.svg"
                  />
                  <div className={styles.div6}>5</div>
                </div>
              </div>
            </div>
            <div className={styles.sujoySenInner1}>
              <div className={styles.panditSujoyParent}>
                <div className={styles.panditSujoy}>Pandit Sujoy</div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.priceIconParent1}>
                    <img
                      className={styles.priceIcon3}
                      alt=""
                      src="/price-icon.svg"
                    />
                    <div className={styles.div7}>500</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.connectWrapper}>
              <div className={styles.connect6} style={connectStyle}>
                <div className={styles.connectChild1} />
                <div className={styles.connect7}>connect</div>
              </div>
            </div>
          </div>
          <div className={styles.acharyaCard1}>
            <div className={styles.acharyaCardItem} />
            <div className={styles.acharyaCardInner1}>
              <div className={styles.rectangleParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="/rectangle-76-4@2x.png"
                />
                <div className={styles.rating4}>
                  <div className={styles.ratingChild1} />
                  <img
                    className={styles.starIcon4}
                    loading="eager"
                    alt=""
                    src="/star.svg"
                  />
                  <div className={styles.div8}>5</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper3}>
                <div className={styles.beautyParlorGroup}>
                  <div className={styles.beautyParlor1}>Beauty Parlor</div>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.priceIconParent2}>
                      <img
                        className={styles.priceIcon4}
                        alt=""
                        src="/price-icon-1.svg"
                      />
                      <div className={styles.div9}>100</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.connect8}>
                <div className={styles.connectChild2} />
                <div className={styles.connect9}>connect</div>
              </div>
            </div>
          </div>
          <div className={styles.sujoySen1}>
            <div className={styles.sujoySenItem} />
            <div className={styles.sujoySenInner2}>
              <div className={styles.rectangleParent3}>
                <img
                  className={styles.frameChild2}
                  alt=""
                  src="/rectangle-76-3@2x.png"
                />
                <div className={styles.rating5}>
                  <div className={styles.ratingChild2} />
                  <img className={styles.starIcon5} alt="" src="/star.svg" />
                  <div className={styles.div10}>5</div>
                </div>
              </div>
            </div>
            <div className={styles.sujoySenInner3}>
              <div className={styles.panditSujoyGroup}>
                <div className={styles.panditSujoy1}>Pandit Sujoy</div>
                <div className={styles.frameWrapper5}>
                  <div className={styles.priceIconParent3}>
                    <img
                      className={styles.priceIcon5}
                      alt=""
                      src="/price-icon.svg"
                    />
                    <div className={styles.div11}>500</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.connectContainer}>
              <div className={styles.connect10} style={connect1Style}>
                <div className={styles.connectChild3} />
                <div className={styles.connect11}>connect</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dharmikCardParent}>
          <div className={styles.dharmikCard1}>
            <div className={styles.dharmikCardItem} />
            <div className={styles.rectangleParent4}>
              <img
                className={styles.frameChild3}
                alt=""
                src="/rectangle-76-6@2x.png"
              />
              <div className={styles.rating6}>
                <div className={styles.ratingChild3} />
                <img className={styles.starIcon6} alt="" src="/star.svg" />
                <div className={styles.div12}>5</div>
              </div>
            </div>
            <div className={styles.haldiDharmikGroup}>
              <div className={styles.haldiDharmik1}>{`Haldi Dharmik `}</div>
              <div className={styles.frameWrapper6}>
                <div className={styles.priceIconParent4}>
                  <img
                    className={styles.priceIcon6}
                    alt=""
                    src="/price-icon.svg"
                  />
                  <div className={styles.div13}>300</div>
                </div>
              </div>
            </div>
            <div className={styles.connect12}>
              <div className={styles.connectChild4} />
              <div className={styles.connect13}>connect</div>
            </div>
          </div>
          <div className={styles.dharmikCard2}>
            <div className={styles.dharmikCardInner} />
            <div className={styles.rectangleParent5}>
              <img
                className={styles.frameChild4}
                alt=""
                src="/rectangle-76-6@2x.png"
              />
              <div className={styles.rating7}>
                <div className={styles.ratingChild4} />
                <img className={styles.starIcon7} alt="" src="/star.svg" />
                <div className={styles.div14}>5</div>
              </div>
            </div>
            <div className={styles.haldiDharmikContainer}>
              <div className={styles.haldiDharmik2}>{`Haldi Dharmik `}</div>
              <div className={styles.frameWrapper7}>
                <div className={styles.priceIconParent5}>
                  <img
                    className={styles.priceIcon7}
                    alt=""
                    src="/price-icon.svg"
                  />
                  <div className={styles.div15}>300</div>
                </div>
              </div>
            </div>
            <div className={styles.connect14}>
              <div className={styles.connectChild5} />
              <div className={styles.connect15}>connect</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerSection;
