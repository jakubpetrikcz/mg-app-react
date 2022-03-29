import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonSearchbar,
  IonCard,
  IonRouterLink,
} from "@ionic/react";
import "./MovieCardComponent.scss";

interface ContainerProps {
  title: string;
  imgSrc: string;
}

const MovieCardComponent: React.FC<ContainerProps> = ({ title, imgSrc }) => {
  return (
    <IonCard>
      <IonRouterLink routerLink="/tab2">
        <img src={imgSrc} alt="avatar" />
        <h4>{title}</h4>
      </IonRouterLink>
    </IonCard>
  );
};

export default MovieCardComponent;
