import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  bookmarkOutline,
  ellipse,
  home,
  homeOutline,
  homeSharp,
  searchOutline,
  square,
  triangle,
} from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.scss";
import { useState } from "react";
import { pages } from "./pages";

setupIonicReact();

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<any>("tab0");

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs onIonTabsWillChange={(e) => setSelectedTab(e.detail.tab)}>
          <IonRouterOutlet>
            {pages.map((page, index) => {
              return (
                <Route
                  path={page.path}
                  component={page.component}
                  key={index}
                />
              );
            })}
            <Route exact path="/">
              <Redirect to={pages.filter((page) => page.redirect)[0].path} />
            </Route>
          </IonRouterOutlet>
          <IonTabBar
            style={{
              backgroundColor: "#495057",
              borderRadius: "15px 15px 0 0",
              border: "unset",
              width: "100%",
              margin: "0 auto",
              maxHeight: "56px",
              height: "56px",
            }}
            slot="bottom"
          >
            {pages.map((page, index) => {
              const isSelected = selectedTab === `tab${index}`;
              return (
                <IonTabButton
                  style={{
                    color: "white",
                    colorSelected: "white",
                    backgroundColor: "#495057",
                    borderRadius: "15px 15px 0 0",
                  }}
                  tab={`tab${index}`}
                  href={page.path}
                  key={index}
                >
                  <IonIcon
                    style={{ fontSize: "1.4rem" }}
                    icon={isSelected ? page.selectedIcon : page.icon}
                  />
                </IonTabButton>
              );
            })}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
