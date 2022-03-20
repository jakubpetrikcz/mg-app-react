import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import HeaderComponent from "../components/Header/HeaderComponent";
import "./Tab1.scss";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent
        name="Movie Generator"
        showBtn={true}
        showSearchBar={false}
      />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonIcon src="home" size="large"></IonIcon>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
