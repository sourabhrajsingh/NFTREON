import { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import DashboardLayout from "./layout";
import styles from "./styles/create-item.module.scss";
import Uploader from "components/Uploader";
import Input from "components/Input";
import TextArea from "components/TextArea";
import Icon from "components/Icon";
import { Authenticated } from "hooks/useAuthenticated";
import Layout from "components/Layout";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const CreateItem = () => {
  const [loading, setLoading] = useState(false);
  const [formInputs, updateFormInputs] = useState({
    price: "",
    name: "",
    description: "",
    fileUrl: "",
  });

  const [formErrors, updateFormErrors] = useState({
    price: "",
    name: "",
    description: "",
    fileUrl: "",
  });

  const handleCreateItem = async () => {
    const { name, profilePhoto, coverPhoto, description } = formInputs;
    const data = JSON.stringify({
      name,
      description,
      profilePhoto,
      coverPhoto,
    });

    try {
      setLoading(true);
      const added = await client.add(data);

      const url = `https://ipfs.infura.io/ipfs/${added.path}`;

      console.log(url);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <Authenticated>
      <Layout>
        <DashboardLayout>
          <section className={styles.create}>
            <div className={styles.create__content}>
              <h2>Create New Item</h2>

              <h4>Image, Video, Audio, or 3D Model</h4>
              <h5>
                File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG, GLB, GLTF. Max size: 100 MB
              </h5>

              <div className={styles.create__form} onSubmit={handleCreateItem}>
                <Uploader
                  fileUrl={formInputs.profilePhoto}
                  setFileUrl={(fileUrl) => {
                    updateFormInputs({ ...formInputs, fileUrl: fileUrl });
                    updateFormErrors({ ...formErrors, fileUrl: "" });
                  }}
                />
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
                    updateFormInputs({ ...formInputs, name: e.target.value });
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
                    updateFormInputs({ ...formInputs, description: value });
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
                    updateFormInputs({ ...formInputs, price: e.target.value });
                    updateFormErrors({ ...formErrors, price: "" });
                  }}
                  error={formErrors.price}
                />

                <button onClick={handleCreateItem}>Create Item</button>
              </div>
            </div>
          </section>
        </DashboardLayout>
      </Layout>
    </Authenticated>
  );
};

export default CreateItem;
