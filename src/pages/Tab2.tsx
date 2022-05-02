import {
  IonCol,
  IonContent,
  IonGrid,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonPage,
  IonRow,
  useIonViewWillEnter,
} from "@ionic/react";
import { useEffect, useState } from "react";
import HeaderComponent from "../components/Header/HeaderComponent";
// import InfiniteScrollComponent from "../components/InfiniteScroll/InfiniteScrollComponent";
import MovieCardComponent from "../components/MovieCard/MovieCardComponent";
import { getPopularList, getSearchList } from "../services/ApiConnect";
import "./Tab2.scss";

const Tab2: React.FC = () => {
  // const [listPopular, setListPopular] = useState<any>([]);

  const [searchText, setSearchText] = useState("");
  const [item, setItem] = useState<any>([]);

  // const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    filterData();
  }, [searchText, page]);

  // useEffect(() => {
  //   setPage(page + 1);
  // }, []);

  const segmentChanged = (ev: any) => {
    // setItem([]);
    setPage(1);
    setSearchText(ev.target.value);
    filterData();
  };

  const filterData = () => {
    console.log(searchText);
    console.log(page);
    console.log("ahoj");

    if (searchText.length !== 0) {
      getSearchList(page, searchText).then((r) => {
        // this.popularList = this.popularList.concat(r.results);
        if (page > 1) {
          setItem([...item, ...r.results]);
        } else {
          console.log("ahoj");
          setItem([...r.results]);
        }
        // setItem([...item, ...r.results]);
      });
    } else {
      getPopularList(page).then((r) => {
        // this.popularList = this.popularList.concat(r.results);
        // setItem(item.concat(r.results));
        // setItem([...item, ...r.results]);
        if (page > 1) {
          setItem([...item, ...r.results]);
        } else {
          // console.log("ahoj");
          setItem([...r.results]);
        }
        // setItem([...item, ...r.results]);
        console.log(r.results);
      });
    }
  };

  const searchNext = (event: any) => {
    setPage(page + 1);

    filterData();
    console.log("Loaded data");
    event.target.complete();
    // ($event.target as HTMLIonInfiniteScrollElement).complete();
  };

  // useIonViewWillEnter(() => {
  //   filterData();
  // });

  // console.log("page", page);

  return (
    <IonPage>
      <HeaderComponent
        name="Search"
        showSearchBar={true}
        searchText={searchText}
        setSearchText={segmentChanged}
      />
      <IonContent fullscreen>
        <IonList>
          <div>
            <IonGrid>
              <IonRow>
                {item.map((item: any, i: number) => {
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
                        router={"/tab2/" + item.id}
                        voterRating={item.vote_average}
                        isAddBtn={false}
                        isRatingBtn={true}
                        isRemoveBtn={false}
                      />
                    </IonCol>
                  );
                })}
              </IonRow>
            </IonGrid>
            <IonInfiniteScroll threshold="100px" onIonInfinite={searchNext}>
              <IonInfiniteScrollContent
                loadingSpinner="bubbles"
                loadingText="Loading more data..."
              ></IonInfiniteScrollContent>
            </IonInfiniteScroll>
          </div>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
