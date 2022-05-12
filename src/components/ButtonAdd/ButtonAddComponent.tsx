import React, { MouseEventHandler } from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { add, bookmark } from "ionicons/icons";

interface ContainerProps {
  getItems: MouseEventHandler;
}

const ButtonAddComponent: React.FC<ContainerProps> = ({ getItems }) => {
  return (
    <IonButton fill="clear" onClick={getItems}>
      <IonIcon slot="icon-only" className="bookmark" icon={bookmark}></IonIcon>
      <IonIcon className="add" icon={add}></IonIcon>
    </IonButton>
  );
};

export default ButtonAddComponent;
