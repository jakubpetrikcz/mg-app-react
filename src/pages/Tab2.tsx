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
import ExploreContainer from "../components/ExploreContainer";
import HeaderComponent from "../components/Header/HeaderComponent";
import "./Tab2.scss";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <HeaderComponent name="Search" showBtn={false} showSearchBar={true} />
      <IonContent fullscreen>
        <IonList>
          <div>
            <IonGrid>
              <IonRow>
                <IonCol size-lg="2" size-md="4" size-sm="6" size-xs="6">
                  <div className="card">
                    <div className="card-content">
                      <img src="../../assets/avatar-movie.jpg" alt="avatar" />
                      <h4>Ahoj</h4>
                    </div>
                  </div>
                </IonCol>
                <IonCol size-lg="2" size-md="4" size-sm="6" size-xs="6">
                  <div className="card">
                    <div className="card-content">
                      <img src="../../assets/avatar-movie.jpg" alt="avatar" />
                      <h4>Ahoj</h4>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
