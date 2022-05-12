import React from "react";
import { IonAvatar, IonItem, IonLabel } from "@ionic/react";

interface ContainerProps {
  profile_path: string;
  name: string;
  character: string;
}

const ActorsComponent: React.FC<ContainerProps> = ({
  profile_path,
  name,
  character,
}) => {
  return (
    <IonItem>
      <IonAvatar slot="start">
        <img src={profile_path} alt="member" />
      </IonAvatar>
      <IonLabel>
        <h2>{name}</h2>
        <h4>{character}</h4>
      </IonLabel>
    </IonItem>
  );
};

export default ActorsComponent;
