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
} from "@ionic/react";
import "./HeaderComponent.scss";

interface ContainerProps {
  name: string;
  showBtn: boolean;
  showSearchBar: boolean;
}

const HeaderComponent: React.FC<ContainerProps> = ({
  name,
  showBtn = true,
  showSearchBar = true,
}) => {
  return (
    <IonHeader className="ion-no-border header">
      <IonList no-lines className="ion-padding-top">
        <IonItem color="primary" lines="none">
          <IonLabel className="page-title">{name}</IonLabel>
        </IonItem>
      </IonList>
      <div className="popover">
        {showBtn ? (
          <IonButton id="trigger-button" className="generate-btn">
            <span className="font-span">Generate</span>
          </IonButton>
        ) : null}
        {showSearchBar ? <IonSearchbar></IonSearchbar> : null}
      </div>
    </IonHeader>
  );
};

export default HeaderComponent;
