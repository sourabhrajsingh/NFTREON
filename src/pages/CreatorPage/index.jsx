import Layout from "components/Layout";
import styles from "./creatorpage.module.scss";
import CreativeImg from "assets/images/creative.jpg";
import { Link } from "react-router-dom";

const CreatorPage = () => {
  return (
    <Layout>
      <main className={styles.CreatorPage}>
        {/* left side:image */}
        <div className={styles.leftCol}>
          <img src={CreativeImg} alt="Creator Image" />
        </div>

        {/* Right side:details */}
        <div className={styles.rightCol}>
          <Link to="/">Back</Link>
          <div className={styles.creator}>
            <p>Creator</p>
            <p>Owner Name</p>
          </div>
          <h2
            style={{
              letterSpacing: "0.1rem",
              fontSize: "2rem",
              marginBottom: "1.2rem",
            }}
          >
            NFT Name
          </h2>
          <section>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "1.5rem",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase" }}>
                Current Bid
              </h3>
              <h4 style={{ fontWeight: "lighter" }}>
                $ <span style={{ fontWeight: "bolder" }}>20</span>
              </h4>
              <p className={styles.NftDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default CreatorPage;
