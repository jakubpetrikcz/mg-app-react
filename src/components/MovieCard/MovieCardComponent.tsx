import React, { MouseEventHandler } from "react";
import {
  IonIcon,
  IonButton,
  IonCard,
  IonRouterLink,
  IonBadge,
} from "@ionic/react";
import "./MovieCardComponent.scss";
import { closeOutline, trash } from "ionicons/icons";
import ButtonAddComponent from "../ButtonAdd/ButtonAddComponent";

interface ContainerProps {
  title: string;
  imgSrc: string;
  router: string;
  voterRating?: string;
  isAddBtn?: boolean;
  isRatingBtn?: boolean;
  isRemoveBtn?: boolean;
  isCloseBtn?: boolean;
  item?: [];
  removeFunction?: MouseEventHandler;
  setState?: any;
}

const MovieCardComponent: React.FC<ContainerProps> = ({
  title,
  imgSrc,
  router,
  voterRating,
  isAddBtn,
  isRatingBtn,
  isRemoveBtn,
  isCloseBtn,
  item,
  removeFunction,
  setState,
}) => {
  const getItems = (data: any) => {
    const items: any[] = [];
    if (JSON.parse(localStorage.getItem("items") || "[]") === null) {
      items.push(data);
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      const localItems = JSON.parse(localStorage.getItem("items") || "[]");
      localItems.map((details: any) => {
        if (data.id !== details.id) {
          if (items[data.title] === undefined) {
            items[data.title] = data.title;
          }
          items.push(details);
        }
      });
      items.push(data);
      localStorage.setItem("items", JSON.stringify(items));
    }
  };
  return (
    <IonCard className="no-margin">
      {isAddBtn ? <ButtonAddComponent getItems={() => getItems(item)} /> : null}
      {isRatingBtn ? (
        <IonBadge class="movie-badge">
          <span>{voterRating}</span>
          <i className="fas fa-star"></i>
        </IonBadge>
      ) : null}
      {isRemoveBtn ? (
        <IonButton fill="clear" className="remove-btn" onClick={removeFunction}>
          <IonIcon slot="icon-only" icon={trash}></IonIcon>
        </IonButton>
      ) : null}
      {isCloseBtn ? (
        <IonButton className="close-modal-btn" onClick={setState}>
          <IonIcon icon={closeOutline}></IonIcon>
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
