import { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Input from "components/Input";
import TextArea from "components/TextArea";
import Uploader from "components/Uploader";
import styles from "../styles/update-profile.module.scss";
import Icon from "components/Icon";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const UpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const [formInputs, updateFormInputs] = useState({
    name: "",
    profilePhoto: "",
    coverPhoto: "",
    description: "",
  });

  const [formErrors, updateFormErrors] = useState({
    name: "",
    profilePhoto: "",
    coverPhoto: "",
    description: "",
  });

  const updateProfile = async () => {
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
    <div className={styles.profile}>
      <h3>Set your creator details</h3>

      <div>
        <Input
          label="Page Name"
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

        <p>
          Profile Photo <span>We recommend a 256px by 256px image.</span>
        </p>
        <Uploader
          fileUrl={formInputs.profilePhoto}
          setFileUrl={(fileUrl) => {
            updateFormInputs({ ...formInputs, profilePhoto: fileUrl });
            updateFormErrors({ ...formErrors, profilePhoto: "" });
          }}
          variant="circle"
          accept="image/*"
        />

        {formErrors.profilePhoto && (
          <p className={styles.inputError} data-testid="input-error">
            <Icon id="ErrorIcon" />
            {formErrors.profilePhoto}
          </p>
        )}

        <p>
          Cover Photo
          <span>
            We recommend an image at least 1600px wide and 400px tall.
          </span>
        </p>
        <Uploader
          fileUrl={formInputs.coverPhoto}
          setFileUrl={(fileUrl) => {
            updateFormInputs({ ...formInputs, coverPhoto: fileUrl });
            updateFormErrors({ ...formErrors, coverPhoto: "" });
          }}
          variant="banner"
          accept="image/*"
        />

        {formErrors.coverPhoto && (
          <p className={styles.inputError} data-testid="input-error">
            <Icon id="ErrorIcon" />
            {formErrors.coverPhoto}
          </p>
        )}

        <TextArea
          label="Page Description"
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

        <button disabled={loading} onClick={updateProfile}>
          {loading ? "Please wait..." : "Update Profile Details"}
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
