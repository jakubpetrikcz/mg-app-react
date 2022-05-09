import {
  IonCol,
  IonContent,
  IonGrid,
  IonList,
  IonPage,
  IonRow,
  useIonViewWillEnter,
} from "@ionic/react";
import { useEffect, useState } from "react";
import HeaderComponent from "../components/Header/HeaderComponent";
import MovieCardComponent from "../components/MovieCard/MovieCardComponent";
import "./Tab3.scss";

const Tab3: React.FC = () => {
  const [listLocalStorage, setListLocalStorage] = useState<any>([]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(listLocalStorage));
  }, [listLocalStorage]);

  useIonViewWillEnter(() => {
    getData();
  });

  const getData = () => {
    setListLocalStorage(JSON.parse(localStorage.getItem("items") || "[]"));
  };

  const removeItem = (e: any, i: number) => {
    const items: any[] = [];
    var array = [...listLocalStorage];
    console.log(e);
    // this.results = JSON.parse(localStorage.getItem('items'));
    console.log("event", listLocalStorage);
    JSON.parse(localStorage.getItem("items") || "[]").map((data: any) => {
      if (data.id !== e.id) {
        items.push(data);
      } else {
        array.splice(i, 1);
        setListLocalStorage(array);
      }
    });
    localStorage.setItem("items", JSON.stringify(items));

    if (items.length === 0) {
      localStorage.clear();
    }
  };

  return (
    <IonPage>
      <HeaderComponent name="Watchlist" />
      <IonContent fullscreen>
        <IonList>
          <div>
            <IonGrid>
              <IonRow>
                {listLocalStorage.map((item: any, i: number) => {
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
                        voterRating={""}
                        isAddBtn={false}
                        isRatingBtn={false}
                        isRemoveBtn={true}
                        removeFunction={removeItem}
                        movies={item}
                        index={i}
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
