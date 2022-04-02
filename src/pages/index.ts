import {
  bookmark,
  bookmarkOutline,
  ellipse,
  home,
  homeOutline,
  homeSharp,
  search,
  searchOutline,
  square,
  triangle,
} from "ionicons/icons";
import { withRouter } from "react-router-dom";
import MovieDetailsPage from "./MovieDetailsPage";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

export const pages = [
  {
    path: "/tab1",
    icon: homeOutline,
    selectedIcon: home,
    component: Tab1,
    redirect: true,
  },
  {
    path: "/tab2",
    icon: searchOutline,
    selectedIcon: search,
    component: Tab2,
    redirect: false,
  },
  {
    path: "/tab3",
    icon: bookmarkOutline,
    selectedIcon: bookmark,
    component: Tab3,
    redirect: false,
  },
  // {
  //   path: "/tab1/:id",
  //   component: MovieDetailsPage,
  //   redirect: false,
  // },
];
