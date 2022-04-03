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
  IonBadge,
} from "@ionic/react";
import "./MovieCardComponent.scss";
import { add, bookmark, bookmarkSharp, star, trash } from "ionicons/icons";

interface ContainerProps {
  title: string;
  imgSrc: string;
  router: string;
  voterRating: string;
  isAddBtn: boolean;
  isRatingBtn: boolean;
  isRemoveBtn: boolean;
}

const MovieCardComponent: React.FC<ContainerProps> = ({
  title,
  imgSrc,
  router,
  voterRating,
  isAddBtn,
  isRatingBtn,
  isRemoveBtn,
}) => {
  return (
    <IonCard>
      {isAddBtn ? (
        <IonButton fill="clear">
          <IonIcon slot="icon-only" class="bookmark" icon={bookmark}></IonIcon>
          <IonIcon class="add" icon={add}></IonIcon>
        </IonButton>
      ) : null}
      {isRatingBtn ? (
        <IonBadge class="movie-badge">
          <span>{voterRating}</span>
          <i className="fas fa-star"></i>
        </IonBadge>
      ) : null}
      {isRemoveBtn ? (
        <IonButton fill="clear" className="remove-btn">
          <IonIcon slot="icon-only" icon={trash}></IonIcon>
        </IonButton>
      ) : null}
      <IonRouterLink routerLink={router}>
        <img src={imgSrc} alt="avatar" />
        <h4>{title}</h4>
      </IonRouterLink>
    </IonCard>
  );
};

export default MovieCardComponent;
