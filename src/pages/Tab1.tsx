import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/react";
import { Route, Switch } from "react-router-dom";
import HeaderComponent from "../components/Header/HeaderComponent";
import SliderComponent from "../components/Slider/SliderComponent";
import MovieDetailsPage from "./MovieDetailsPage";
import "./Tab1.scss";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent
        name="Movie Generator"
        showBtn={true}
        showSearchBar={false}
        parentCallback
      />
      <IonContent fullscreen>
        <SliderComponent title="Trends" isTrend={true} />
        <SliderComponent title="Top Rated" isTrend={false} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
