import { useRef, useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import styles from "./uploader.module.scss";
import Icon from "components/Icon";
import { Circle } from "rc-progress";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const Upload = ({ fileUrl, setFileUrl, variant, accept }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    try {
      setUploading(true);
      const added = await client.add(file, {
        progress: (prog) => setProgress(prog),
      });

      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
      setUploading(false);
      setProgress(0);
    } catch (err) {
      setUploading(false);
      setProgress(0);
    }
  };

  return (
    <div
      className={
        variant === "circle"
          ? styles.upload__circle
          : variant === "banner"
          ? styles.upload__banner
          : styles.upload
      }
    >
      {fileUrl ? (
        <div
          className={
            variant === "circle"
              ? styles.upload__circle__active
              : variant === "banner"
              ? styles.upload__banner__active
              : styles.upload__active
          }
        >
          <div
            className={
              variant === "circle"
                ? styles.upload__circle__active__icon
                : variant === "banner"
                ? styles.upload__banner__active__icon
                : styles.upload__active__icon
            }
          >
            <div onClick={() => setFileUrl("")}>
              <Icon id="CloseIcon" />
            </div>
          </div>

          <img src={fileUrl} alt="uploaded img" />
        </div>
      ) : (
        <>
          {uploading ? (
            <Circle
              percent={progress / 1000}
              strokeWidth="2"
              strokeColor="rgb(0,0,0)"
              className={styles.upload__progress}
            />
          ) : (
            <>
              <input
                type="file"
                accept={accept ? accept : "video/* image/* audio/*"}
                ref={inputRef}
                onChange={handleFileUpload}
              />
              <div
                className={
                  variant === "circle"
                    ? styles.upload__circle__box
                    : styles.upload__box
                }
                onClick={() => inputRef.current.click()}
              >
                <Icon id="ImagePrev" />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Upload;
