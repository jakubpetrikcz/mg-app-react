import {
  IonCol,
  IonContent,
  IonGrid,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonPage,
  IonRow,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
// import {loadData} from "../Header/HeaderComponent";

interface ContainerProps {
  loadData: any;
  isInfiniteDisabled: any;
}

const InfiniteScrollComponent: React.FC<ContainerProps> = ({
  loadData,
  isInfiniteDisabled,
}) => {
  return (
    <IonInfiniteScroll
      threshold="100px"
      onIonInfinite={loadData}
      disabled={isInfiniteDisabled}
    >
      <IonInfiniteScrollContent
        loadingSpinner="bubbles"
        loadingText="Loading more data..."
      ></IonInfiniteScrollContent>
    </IonInfiniteScroll>
  );
};

export default InfiniteScrollComponent;
