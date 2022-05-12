import {
  IonCol,
  IonContent,
  IonGrid,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonPage,
  IonRow,
} from "@ionic/react";
import { useEffect, useState } from "react";
import HeaderComponent from "../components/Header/HeaderComponent";
// import InfiniteScrollComponent from "../components/InfiniteScroll/InfiniteScrollComponent";
import MovieCardComponent from "../components/MovieCard/MovieCardComponent";
import { getPopularList, getSearchList } from "../services/ApiConnect";
import "./Search.scss";

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [item, setItem] = useState<any>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    filterData();
  }, [searchText, page]);

  useEffect(() => {
    setPage(1);
  }, [searchText]);

  const segmentChanged = (ev: any) => {
    setSearchText(ev.target.value);
    console.log(page);
    filterData();
  };

  const filterData = () => {
    if (searchText.length !== 0) {
      loadSearchContainer();
    } else {
      getPopularMovies();
    }
  };

  const loadSearchContainer = () => {
    getSearchList(page, searchText).then((r) => {
      if (page > 1) {
        setItem([...item, ...r.results]);
        console.log("ahoj");
      } else {
        setItem([...r.results]);
      }
    });
  };

  const getPopularMovies = () => {
    getPopularList(page).then((r) => {
      if (page > 1) {
        setItem([...item, ...r.results]);
      } else {
        setItem([...r.results]);
      }
    });
  };

  const searchNext = (event: any) => {
    setPage(page + 1);

    if (searchText.length !== 0) {
      loadSearchContainer();
    } else {
      getPopularMovies();
    }
    console.log("Loaded data");
    event.target.complete();
  };

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
                        isRatingBtn={true}
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

export default Search;
