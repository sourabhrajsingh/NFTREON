import { useState } from "react";
// import { ethers } from "ethers";
// import { create as ipfsHttpClient } from "ipfs-http-client";
import styles from "./styles/create-item.module.scss";
import Uploader from "components/Uploader";
import Input from "components/Input";
import TextArea from "components/TextArea";
import Icon from "components/Icon";
import { Authenticated } from "hooks/useAuthenticated";
import Layout from "components/Layout";

const CreateItem = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
    category: null,
    collection: null,
  });

  const [formErrors, updateFormErrors] = useState({
    price: "",
    name: "",
    description: "",
    fileUrl: "",
    category: "",
  });

  const handleCreateItem = async () => {};

  return (
    <Authenticated>
      <Layout>
        <section className={styles.create}>
          <div className={styles.create__content}>
            <h2>Create New Item</h2>

            <h4>Image, Video, Audio, or 3D Model</h4>
            <h5>
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
              OGG, GLB, GLTF. Max size: 100 MB
            </h5>

            <div className={styles.create__form} onSubmit={handleCreateItem}>
              <Uploader fileUrl={fileUrl} setFileUrl={setFileUrl} />
              {formErrors.fileUrl && (
                <p className={styles.inputError} data-testid="input-error">
                  <Icon id="ErrorIcon" />
                  {formErrors.fileUrl}
                </p>
              )}
              <Input
                label="Name"
                type="text"
                placeholder="Item name"
                autoFocus
                name="itemName"
                onChange={(e) => {
                  updateFormInput({ ...formInput, name: e.target.value });
                  updateFormErrors({ ...formErrors, name: "" });
                }}
                error={formErrors.name}
              />
              <TextArea
                label="Description"
                placeholder="Enter item description"
                rows="5"
                maxLength="280"
                name="description"
                onChange={(value) => {
                  updateFormInput({ ...formInput, description: value });
                  updateFormErrors({ ...formErrors, description: "" });
                }}
                error={formErrors.description}
              />
              <Input
                label="Minting Price"
                type="number"
                placeholder="Selling Price"
                name="price"
                onChange={(e) => {
                  updateFormInput({ ...formInput, price: e.target.value });
                  updateFormErrors({ ...formErrors, price: "" });
                }}
                error={formErrors.price}
              />

              <button>Create Item</button>
            </div>
          </div>
        </section>
      </Layout>
    </Authenticated>
  );
};

export default CreateItem;
