import Layout from "components/Layout";
import styles from "./homepage.module.scss";
import TopImage from "assets/images/landing.jpg";
import { useMoralis } from "react-moralis";
import Icon from "components/Icon";
import IncomeImg from "assets/images/income.jpg";
import CreativeImg from "assets/images/creative.jpg";
import AudienceImg from "assets/images/audence.jpg";
import { UnAuthenticated } from "../../hooks/useAuthenticated";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

const Home = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated && navigate("/dashboard");
  }, [isAuthenticated]);

  return (
    <UnAuthenticated>
      <Layout>
        <div className={styles.homepage}>
          <div className={styles.homepage__top}>
            <div className={styles.homepage__top__left}>
              <h3>Get more value for your art.</h3>
              <p>Let your passionate fans support your creative work.</p>
              <button onClick={() => authenticate()}>Get started</button>
            </div>
            <div className={styles.homepage__top__right}>
              <img src={TopImage} alt="Landing image" />
            </div>
          </div>

          <div className={styles.homepage__search}>
            <h3>Search the thousands creators on NFTreon</h3>
            <div className={styles.homepage__search__bar}>
              <div className={styles.homepage__search__bar__search}>
                <Icon id="SearchIcon" />
                <input type="text" placeholder="Search Creator name" />
              </div>
              <button>Search</button>
            </div>

            <div className={styles.homepage__search__about}>
              <h3>What is NFTreon</h3>
              <p>
                On NFTreon, you can let your fans become active participants in
                the work they love by offering them a monthly membership, and
                also oppurtunity to mint your NFTs. You give them access to
                exclusive content, community, and insight into your creative
                process. In exchange, you get the freedom to do your best work,
                and the stability you need to build an independent creative
                career.
              </p>
            </div>
          </div>

          <div className={styles.homepage__info}>
            <div className={styles.homepage__info__item}>
              <div className={styles.homepage__info__item__desc}>
                <h4>Develop a recurring income stream</h4>
                <p>
                  Stop rolling the dice of ad revenue and per-stream payouts.
                  Get recurring income through monthly payments from your
                  patrons.
                </p>
              </div>
              <div className={styles.homepage__info__item__image}>
                <img src={IncomeImg} alt="Income" />
                <div className={styles.homepage__info__item__image__overlay} />
              </div>
            </div>
            <div className={styles.homepage__info__item}>
              <div className={styles.homepage__info__item__image}>
                <img src={CreativeImg} alt="Income" />
                <div className={styles.homepage__info__item__image__overlay} />
              </div>
              <div
                className={styles.homepage__info__item__desc}
                style={{ marginLeft: "4rem" }}
              >
                <h4>Take back creative control</h4>
                <p>
                  Create what you want and what your audience loves. You don’t
                  have to conform to popular taste or the constraints of
                  ad-based monetization models.
                </p>
              </div>
            </div>
            <div className={styles.homepage__info__item}>
              <div className={styles.homepage__info__item__desc}>
                <h4>
                  Build a direct, meaningful connection with your audience
                </h4>
                <p>
                  No ads, no trolls, no algorithms. Enjoy direct access and
                  deeper conversations with the people who matter the most.
                </p>
              </div>
              <div className={styles.homepage__info__item__image}>
                <img src={AudienceImg} alt="Income" />
                <div className={styles.homepage__info__item__image__overlay} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </UnAuthenticated>
  );
};

export default Home;
