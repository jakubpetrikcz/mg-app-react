import React, { useState } from "react";
import {
  IonHeader,
  IonList,
  IonItem,
  IonLabel,
  IonSearchbar,
} from "@ionic/react";
import "./HeaderComponent.scss";
import { getDiscoverList } from "../../services/ApiConnect";
import ButtonGenerateComponent from "../ButtonGenerate/ButtonGenerateComponent";
import ModalComponent from "../Modal/ModalComponent";

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

  const getRandomMovie = () => {
    const page = Math.floor(Math.random() * (500 - 1) + 1) + 1;
    const movie = Math.floor(Math.random() * 19);

    getDiscoverList(page).then((data) => {
      setModalMovie(data.results[movie]);
    });

    setShowModal(true);
  };

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
            <ButtonGenerateComponent getRandomMovie={getRandomMovie} />
            <ModalComponent
              setShowModal={() => setShowModal(false)}
              showModal={showModal}
              title={modalMovie.title}
              poster_path={`https://image.tmdb.org/t/p/w500/${modalMovie.poster_path}`}
              id={"/home/" + modalMovie.id}
            />
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
