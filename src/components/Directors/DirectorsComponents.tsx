import React from "react";
import { IonAvatar, IonItem, IonLabel } from "@ionic/react";

interface ContainerProps {
  profile_path: string;
  name: string;
}

const DirectorsComponent: React.FC<ContainerProps> = ({
  profile_path,
  name,
}) => {
  return (
    <IonItem>
      <IonAvatar slot="start">
        <img src={profile_path} alt="director" />
      </IonAvatar>
      <IonLabel>
        <h2>{name}</h2>
      </IonLabel>
    </IonItem>
  );
};

export default DirectorsComponent;
