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
    <IonHeader class="ion-no-border">
      <IonList lines="none" class="ion-padding-top">
        <IonItem color="primary">
          <IonLabel>{name}</IonLabel>
        </IonItem>
      </IonList>
      <div className="popover">
        {showBtn ? (
          <IonButton id="trigger-button" class="generate-btn">
            <span className="font-span">Generate</span>
          </IonButton>
        ) : null}
        {showSearchBar ? <IonSearchbar></IonSearchbar> : null}
      </div>
    </IonHeader>
  );
};

export default HeaderComponent;
