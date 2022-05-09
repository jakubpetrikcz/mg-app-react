import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
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
import MovieDetailsPage from "./pages/MovieDetailsPage";

setupIonicReact();

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<any>("tab0");

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs onIonTabsWillChange={(e) => setSelectedTab(e.detail.tab)}>
          <IonRouterOutlet>
            {/* {pages.map((page, index) => {
              console.log(page.redirect);
              return (
                // <Route
                //   path={page.path}
                //   key={index}
                //   render={({ match: { url } }) => (
                //     <>
                //       <Route
                //         path={`${url}/`}
                //         component={page.component}
                //         exact
                //       />
                //       <Route path={`${url}/:id`} component={MovieDetailsPage} />
                //     </>
                //   )}
                // />
                <Route
                  path={page.path}
                  component={page.component}
                  key={index}
                />
              );
            })} */}
            <Route exact path="/">
              <Redirect to={pages.filter((page) => page.redirect)[0].path} />
            </Route>

            {/* <Route exact path="/">
              <Redirect to="/tab1" />
            </Route> */}
            {/* {/* <Route
              path="/tab1"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Tab1} exact />
                  <Route path={`${url}/:id`} component={MovieDetailsPage} />
                </>
              )}
            ></Route> */}
            <Route path="/tab1" component={Tab1} exact />
            <Route path="/tab2" component={Tab2} exact />
            <Route path="/tab3" component={Tab3} exact />
            <Route path="/tab1/:id" component={MovieDetailsPage} exact />
            <Route path="/tab2/:id" component={MovieDetailsPage} exact />
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
              if (page.icon) {
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
              }
            })}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
