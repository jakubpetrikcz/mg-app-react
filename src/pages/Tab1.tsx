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
import SliderComponent from "../components/Slider/SliderComponent";
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
        <SliderComponent title="Trends" />
        <SliderComponent title="Top Rated" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
