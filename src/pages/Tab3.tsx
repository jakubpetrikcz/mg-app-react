import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import HeaderComponent from "../components/Header/HeaderComponent";
import "./Tab3.scss";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent name="Watchlist" showBtn={false} showSearchBar={false} />
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

export default Tab3;
