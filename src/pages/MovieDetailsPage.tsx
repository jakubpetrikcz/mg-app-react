import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import HeaderComponent from "../components/Header/HeaderComponent";
import SliderComponent from "../components/Slider/SliderComponent";
import { getMovieDetailList } from "../services/ApiConnect";
import "./Tab1.scss";

const MovieDetailsPage: React.FC = () => {
  //   const params = useParams<{ id: string }>();
  const [item, setItem] = useState(null);
  //   const { id } = sumParams();
  //   console.log(id);
  //   const { id }: { id: string } = useParams();
  let location = useLocation();
  const id = location.pathname.toString().split("/")[2];
  //   const params = useParams();

  //   console.log(params);

  useEffect(() => {
    console.log(id);
    getMovieDetailList(id).then((data) => {
      setItem(data);
      console.log(data);
    });
  }, []);

  //   useEffect(() => {
  //     console.log(location.pathname.toString().split("/")[2]);
  //   }, []);
  return (
    <IonPage>
      <IonContent>
        <h1>ahoj</h1>
      </IonContent>
    </IonPage>
  );
};

export default MovieDetailsPage;
