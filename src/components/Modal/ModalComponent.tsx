import { IonContent, IonModal } from "@ionic/react";
import MovieCardComponent from "../MovieCard/MovieCardComponent";
import "./ModalComponent.scss";

interface ContainerProps {
  setShowModal: any;
  showModal: any;
  title: string;
  poster_path: string;
  id: string;
}

const ModalComponent: React.FC<ContainerProps> = ({
  setShowModal,
  showModal,
  title,
  poster_path,
  id,
}) => {
  return (
    <IonModal
      trigger="trigger-button"
      className="modal"
      onClick={setShowModal}
      isOpen={showModal}
      onDidDismiss={setShowModal}
    >
      <IonContent>
        <div className="modal-content">
          <div className="modal-card">
            <MovieCardComponent
              title={title}
              imgSrc={poster_path}
              router={id}
              isCloseBtn={true}
              setState={setShowModal}
            />
          </div>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default ModalComponent;
