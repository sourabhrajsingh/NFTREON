import { Pane, Dialog } from "evergreen-ui";

const JoinModal = ({ showJoinModal, setShowJoinModal }) => {
  return (
    <Pane>
      <Dialog
        isShown={showJoinModal}
        title="Join this community"
        onCloseComplete={() => setShowJoinModal(false)}
        hasFooter={false}
      ></Dialog>
    </Pane>
  );
};

export default JoinModal;
