import React from "react";
import {
  IonIcon,
  IonButton,
  IonCard,
  IonRouterLink,
  IonBadge,
} from "@ionic/react";
import "./MovieCardComponent.scss";
import { add, bookmark, trash } from "ionicons/icons";

interface ContainerProps {
  title: string;
  imgSrc: string;
  router: string;
  voterRating?: string;
  isAddBtn?: boolean;
  isRatingBtn?: boolean;
  isRemoveBtn?: boolean;
  item?: [];
  removeFunction?: Function;
  movies?: {};
  index?: number;
}

const MovieCardComponent: React.FC<ContainerProps> = ({
  title,
  imgSrc,
  router,
  voterRating,
  isAddBtn,
  isRatingBtn,
  isRemoveBtn,
  item,
  removeFunction,
  movies,
  index,
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
      console.log(items);
      localStorage.setItem("items", JSON.stringify(items));
    }
  };
  return (
    <IonCard className="no-margin">
      {isAddBtn ? (
        <IonButton fill="clear" onClick={() => getItems(item)}>
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
        <IonButton
          fill="clear"
          className="remove-btn"
          onClick={() => {
            if (removeFunction) {
              removeFunction(movies, index);
            }
          }}
        >
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
