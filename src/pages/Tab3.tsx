import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import HeaderComponent from "../components/Header/HeaderComponent";
import MovieCardComponent from "../components/MovieCard/MovieCardComponent";
import { getPopularList } from "../services/ApiConnect";
import "./Tab3.scss";

const Tab3: React.FC = () => {
  const [listPopular, setListPopular] = useState<any>([]);

  useEffect(() => {
    getPopularList(1).then((data) => {
      setListPopular(data.results);
    });
  }, []);
  return (
    <IonPage>
      <HeaderComponent name="Watchlist" showBtn={false} showSearchBar={false} />
      <IonContent fullscreen>
        <IonList>
          <div>
            <IonGrid>
              <IonRow>
                {listPopular.map((item: any, i: number) => {
                  return (
                    <IonCol
                      size-lg="2"
                      size-md="4"
                      size-sm="6"
                      size-xs="6"
                      key={i}
                    >
                      <MovieCardComponent
                        title={item.title}
                        imgSrc={`http://image.tmdb.org/t/p/original/${item.poster_path}`}
                        router={item.id}
                        isAddBtn={false}
                        isRatingBtn={false}
                        isRemoveBtn={true}
                      />
                    </IonCol>
                  );
                })}
              </IonRow>
            </IonGrid>
          </div>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
