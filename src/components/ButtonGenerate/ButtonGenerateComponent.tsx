import React, { MouseEventHandler } from "react";
import { IonButton } from "@ionic/react";

interface ContainerProps {
  getRandomMovie: MouseEventHandler;
}

const ButtonGenerateComponent: React.FC<ContainerProps> = ({
  getRandomMovie,
}) => {
  return (
    <IonButton
      id="trigger-button"
      className="generate-btn"
      onClick={getRandomMovie}
    >
      <span className="font-span">Generate</span>
    </IonButton>
  );
};

export default ButtonGenerateComponent;
