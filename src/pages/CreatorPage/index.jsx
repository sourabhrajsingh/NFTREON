import { useState } from "react";
import Layout from "components/Layout";
import styles from "./creatorpage.module.scss";
import CreativeImg from "assets/images/creative.jpg";
import JoinModal from "./join";
import LoginModal from "./login";
import NFTCard from "components/NFTCard";

const CreatorPage = () => {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <Layout>
      <JoinModal
        showJoinModal={showJoinModal}
        setShowJoinModal={setShowJoinModal}
      />
      <LoginModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      <div className={styles.creatorpage}>
        <div className={styles.creatorpage__header}>
          <div className={styles.creatorpage__header__banner}>
            <img src={CreativeImg} alt="banner" />
          </div>
          <div className={styles.creatorpage__header__avatar}>
            <div className={styles.creatorpage__header__avatar__image}>
              <img src={CreativeImg} alt="avatar" />
            </div>
          </div>
        </div>

        <div className={styles.creatorpage__body}>
          <div className={styles.creatorpage__body__auth}>
            <button
              className={styles.creatorpage__body__auth__login}
              onClick={() => setShowLoginModal(true)}
            >
              Login
            </button>
            <button
              className={styles.creatorpage__body__auth__join}
              onClick={() => setShowJoinModal(true)}
            >
              Join this community
            </button>
          </div>
          <div className={styles.creatorpage__body__desc}>
            <h3>Israel Itua</h3>
            <p>
              Creating awesome viideos Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Autem facere dolorum dicta perspiciatis tempora
              qui nisi ex vero officiis fugiat.
            </p>
          </div>

          <div className={styles.creatorpage__body__items}>
            {Array(6)
              .fill(1)
              .map(() => (
                <NFTCard />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatorPage;
