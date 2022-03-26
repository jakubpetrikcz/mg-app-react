import React, { useEffect, useState } from "react";
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
import { getTopRatedList, getTrendingList } from "../../services/ApiConnect";
import MovieCardComponent from "../MovieCard/MovieCardComponent";

interface ContainerProps {
  title: string;
  isTrend: boolean;
}

const SliderComponent: React.FC<ContainerProps> = ({ title, isTrend }) => {
  const [listItems, setListItems] = useState<any>([]);
  const [listTop, setListTop] = useState<any>([]);

  useEffect(() => {
    getTrendingList().then((data) => {
      setListItems(data.results);
    });
    getTopRatedList().then((data) => {
      setListTop(data.results);
    });
  }, []);
  //console.log(listItems);

  return (
    <>
      <IonItem lines="none">
        <IonLabel>{title}</IonLabel>
      </IonItem>
      <Swiper slidesPerView={2} loop={true}>
        {isTrend
          ? listItems.map((item: any, i: number) => {
              return (
                <SwiperSlide key={i}>
                  <MovieCardComponent
                    title={item.title}
                    imgSrc={`http://image.tmdb.org/t/p/original/${item.poster_path}`}
                  />
                </SwiperSlide>
              );
            })
          : listTop.map((item: any, i: number) => {
              return (
                <SwiperSlide key={i}>
                  <MovieCardComponent
                    title={item.title}
                    imgSrc={`http://image.tmdb.org/t/p/original/${item.poster_path}`}
                  />
                </SwiperSlide>
              );
            })}
      </Swiper>
    </>
  );
};

export default SliderComponent;
