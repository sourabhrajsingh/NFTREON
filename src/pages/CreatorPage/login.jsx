import { Pane, Dialog } from "evergreen-ui";

const LoginModal = ({ showLoginModal, setShowLoginModal }) => {
  return (
    <Pane>
      <Dialog
        isShown={showLoginModal}
        title="Enter your username and pass token"
        onCloseComplete={() => setShowLoginModal(false)}
        hasFooter={false}
      ></Dialog>
    </Pane>
  );
};

export default LoginModal;
