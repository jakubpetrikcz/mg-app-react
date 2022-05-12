import { IonContent, IonPage } from "@ionic/react";
import HeaderComponent from "../components/Header/HeaderComponent";
import SliderComponent from "../components/Slider/SliderComponent";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent name="Movie Generator" showBtn={true} />
      <IonContent fullscreen>
        <SliderComponent title="Trends" isTrend={true} />
        <SliderComponent title="Top Rated" isTrend={false} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
