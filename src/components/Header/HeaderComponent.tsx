import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonSearchbar,
  IonModal,
} from "@ionic/react";
import "./HeaderComponent.scss";
import { getDiscoverList } from "../../services/ApiConnect";
import MovieCardComponent from "../MovieCard/MovieCardComponent";

interface ContainerProps {
  name: string;
  showBtn?: boolean;
  showSearchBar?: boolean;
  searchText?: string;
  setSearchText?: any;
}

const HeaderComponent: React.FC<ContainerProps> = ({
  name,
  showBtn,
  showSearchBar,
  searchText,
  setSearchText,
}) => {
  const [modalMovie, setModalMovie] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);

  const getDiscoverMovie = () => {
    const page = Math.floor(Math.random() * (500 - 1) + 1) + 1;
    const movie = Math.floor(Math.random() * 19);

    getDiscoverList(page).then((data) => {
      setModalMovie(data.results[movie]);
    });

    setShowModal(true);
  };

  // console.log("item", item);

  return (
    <IonHeader className="ion-no-border header">
      <IonList no-lines className="ion-padding-top">
        <IonItem color="primary" lines="none">
          <IonLabel className="page-title">{name}</IonLabel>
        </IonItem>
      </IonList>
      <div className="popover">
        {showBtn ? (
          <>
            <IonButton
              id="trigger-button"
              className="generate-btn"
              onClick={getDiscoverMovie}
            >
              <span className="font-span">Generate</span>
            </IonButton>
            <IonModal
              trigger="trigger-button"
              className="modal"
              onClick={() => setShowModal(false)}
              isOpen={showModal}
              onDidDismiss={() => setShowModal(false)}
            >
              <IonContent>
                <div className="modal-content">
                  <div className="modal-card">
                    <MovieCardComponent
                      title={modalMovie.title}
                      imgSrc={`http://image.tmdb.org/t/p/original/${modalMovie.poster_path}`}
                      router={"/tab1/" + modalMovie.id}
                      isCloseBtn={true}
                      setState={() => setShowModal(false)}
                    />
                  </div>
                </div>
              </IonContent>
            </IonModal>
          </>
        ) : null}
        {showSearchBar ? (
          <IonSearchbar
            value={searchText}
            onIonChange={setSearchText}
            color="light"
          ></IonSearchbar>
        ) : null}
      </div>
    </IonHeader>
  );
};

export default HeaderComponent;
