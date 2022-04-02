import {
  IonCol,
  IonContent,
  IonGrid,
  IonList,
  IonPage,
  IonRow,
} from "@ionic/react";
import { useEffect, useState } from "react";
import HeaderComponent from "../components/Header/HeaderComponent";
import MovieCardComponent from "../components/MovieCard/MovieCardComponent";
import { getPopularList } from "../services/ApiConnect";
import "./Tab2.scss";

const Tab2: React.FC = () => {
  const [listPopular, setListPopular] = useState<any>([]);

  useEffect(() => {
    getPopularList(1).then((data) => {
      setListPopular(data.results);
    });
  }, []);

  return (
    <IonPage>
      <HeaderComponent name="Search" showBtn={false} showSearchBar={true} />
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
                        isAddBtn={false}
                        isRatingBtn={true}
                        isRemoveBtn={false}
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

export default Tab2;
