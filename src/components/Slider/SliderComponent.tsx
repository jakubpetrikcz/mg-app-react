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
  IonCard,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./SliderComponent.scss";

interface ContainerProps {
  title: string;
}

const SliderComponent: React.FC<ContainerProps> = ({ title }) => {
  return (
    <>
      <IonItem lines="none">
        <IonLabel>{title}</IonLabel>
      </IonItem>
      <Swiper slidesPerView={2} loop={true}>
        <SwiperSlide>
          <IonCard>
            <div>
              <img src="../../assets/avatar-movie.jpg" alt="avatar" />
              <h4>Avatar</h4>
            </div>
          </IonCard>
        </SwiperSlide>
        <SwiperSlide>
          <IonCard>
            <div>
              <img src="../../assets/avatar-movie.jpg" alt="avatar" />
              <h4>Avatar</h4>
            </div>
          </IonCard>
        </SwiperSlide>
        <SwiperSlide>
          <IonCard>
            <div>
              <img src="../../assets/avatar-movie.jpg" alt="avatar" />
              <h4>Avatar</h4>
            </div>
          </IonCard>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderComponent;
