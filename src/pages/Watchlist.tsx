import {
  IonCol,
  IonContent,
  IonGrid,
  IonList,
  IonPage,
  IonRow,
  useIonViewWillEnter,
} from "@ionic/react";
import { useState } from "react";
import HeaderComponent from "../components/Header/HeaderComponent";
import MovieCardComponent from "../components/MovieCard/MovieCardComponent";
import "./Watchlist.scss";

const Watchlist: React.FC = () => {
  const [listLocalStorage, setListLocalStorage] = useState<any>([]);

  useIonViewWillEnter(() => {
    getData();
  });

  const getData = () => {
    setListLocalStorage(JSON.parse(localStorage.getItem("items") || "[]"));
  };

  const removeItem = (e: any, i: number) => {
    const items: any[] = [];
    var array = [...listLocalStorage];
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
          {listLocalStorage.length !== 0 ? (
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
                          imgSrc={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                          router={"/watchlist/" + item.id}
                          isRemoveBtn={true}
                          removeFunction={() => removeItem(item, i)}
                        />
                      </IonCol>
                    );
                  })}
                </IonRow>
              </IonGrid>
            </div>
          ) : (
            <div className="ion-text-center">
              <h2>Watchlist is empty!</h2>
            </div>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Watchlist;
