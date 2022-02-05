import { useState } from "react";
import styles from "./nftcard.module.scss";
import Icon from "components/Icon";
import NFT1 from "assets/images/landing.jpg";
import DetailsModal from "./detailsmodal";

const NFTCard = ({ nft }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.nftcard}>
      <div className={styles.nftcard__img}>
        <img src={NFT1} alt="NFT token" layout="fill" />
      </div>
      <div className={styles.nftcard__desc}>
        <h5>Parc des princes</h5>
        <p>by Israel Itua</p>
        <div className={styles.nftcard__desc__bottom}>
          <div className={styles.nftcard__desc__bottom__price}>
            <Icon id="EthLogo" /> <p>0.005 ETH</p>
          </div>
        </div>
        <div className={styles.nftcard__desc__btns}>
          <button className={styles.nftcard__desc__btns__buy}>Mint</button>
          <button
            className={styles.nftcard__desc__btns__view}
            onClick={() => setShowModal(true)}
          >
            View Details
          </button>
        </div>
      </div>

      <DetailsModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default NFTCard;
