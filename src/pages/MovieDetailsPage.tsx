import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonImg,
  IonBadge,
  IonRow,
  IonCol,
  IonChip,
  IonListHeader,
  IonList,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ActorsComponent from "../components/Actors/ActorsComponent";
import ButtonAddComponent from "../components/ButtonAdd/ButtonAddComponent";
import DirectorsComponent from "../components/Directors/DirectorsComponents";
import { getCreditsList, getMovieDetailList } from "../services/ApiConnect";
import "./MovieDetailsPage.scss";

const MovieDetailsPage: React.FC = () => {
  const [item, setItem] = useState<any>([]);
  const [credits, setCredits] = useState<any>([]);
  const { id }: { id: string } = useParams();

  useEffect(() => {
    getMovieDetailList(id).then((data) => {
      setItem(data);
    });
    getCreditsList(id).then((data) => {
      setCredits(data);
    });
  }, [id]);

  const calcTime = (time: any) => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
  };

  const runTime = calcTime(item.runtime);

  const getItems = (data: any) => {
    const items: any[] = [];
    if (JSON.parse(localStorage.getItem("items") || "[]") === null) {
      items.push(data);
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      const localItems = JSON.parse(localStorage.getItem("items") || "[]");
      localItems.map((details: any) => {
        if (data.id !== details.id) {
          if (items[data.title] === undefined) {
            items[data.title] = data.title;
          }
          items.push(details);
        }
      });
      items.push(data);
      console.log(items);
      localStorage.setItem("items", JSON.stringify(items));
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle className="logo-container">
            <a href="/">
              <img src="../assets/mg-icon.png" alt="logo" />
            </a>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="main-content">
          <div className="images-content">
            <ButtonAddComponent getItems={() => getItems(item)} />
            {item.backdrop_path ? (
              <IonImg
                src={"https://image.tmdb.org/t/p/w500/" + item.backdrop_path}
              />
            ) : null}
            <IonBadge className="badge">
              <span>{item.vote_average}</span>
              <i className="fas fa-star"></i>
            </IonBadge>
          </div>
          <div className="information-container ion-margin-start ion-margin-end">
            <div className="ion-margin-bottom">
              <h1>{item.title}</h1>
              <IonRow className="ion-justify-content-start">
                <IonCol
                  className="ion-justify-content-start"
                  size="3"
                  sizeLg="1"
                  sizeMd="2"
                  sizeSm="3"
                  sizeXs="4"
                >
                  <span>{item.release_date}</span>
                </IonCol>
                <IonCol
                  className="ion-justify-content-start"
                  size="3"
                  sizeLg="1"
                  sizeMd="2"
                  sizeSm="3"
                  sizeXs="4"
                >
                  <span>{runTime}</span>
                </IonCol>
              </IonRow>
            </div>
            <IonToolbar>
              <div className="ion-margin-bottom">
                {item.genres?.map((item: any) => {
                  return <IonChip key={item.id}>{item.name}</IonChip>;
                })}
              </div>
            </IonToolbar>
            <p className="overview">{item.overview}</p>
          </div>
          <div className="ion-margin-end">
            <IonList>
              <IonListHeader>
                <h3>Director</h3>
              </IonListHeader>
              {credits.crew?.map((member: any, i: number) => {
                if (member.job === "Director" && member.profile_path) {
                  const directorName = member.name;
                  const directorImage =
                    "https://www.themoviedb.org/t/p/w138_and_h175_face/" +
                    member.profile_path;
                  return (
                    <DirectorsComponent
                      key={i}
                      profile_path={directorImage}
                      name={directorName}
                    />
                  );
                }
              })}
            </IonList>
          </div>
          <div className="ion-margin-end">
            <IonList>
              <IonListHeader>
                <h3>Casting</h3>
              </IonListHeader>
              {credits.cast?.map((member: any, i: number) => {
                if (member.profile_path) {
                  member.profile_path =
                    "https://www.themoviedb.org/t/p/w138_and_h175_face/" +
                    member.profile_path;
                }
                return (
                  <ActorsComponent
                    key={i}
                    profile_path={member.profile_path}
                    name={member.name}
                    character={member.character}
                  />
                );
              })}
            </IonList>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MovieDetailsPage;
