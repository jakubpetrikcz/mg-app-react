import {
  bookmark,
  bookmarkOutline,
  home,
  homeOutline,
  search,
  searchOutline,
} from "ionicons/icons";
import MovieDetailsPage from "./MovieDetailsPage";
import Home from "./Home";
import Search from "./Search";
import Watchlist from "./Watchlist";

export const pages = [
  {
    path: "/home",
    icon: homeOutline,
    selectedIcon: home,
    component: Home,
    redirect: true,
  },
  {
    path: "/search",
    icon: searchOutline,
    selectedIcon: search,
    component: Search,
    redirect: false,
  },
  {
    path: "/watchlist",
    icon: bookmarkOutline,
    selectedIcon: bookmark,
    component: Watchlist,
    redirect: false,
  },
  {
    path: "/home/:id",
    component: MovieDetailsPage,
    redirect: false,
  },
  {
    path: "/search/:id",
    component: MovieDetailsPage,
    redirect: false,
  },
  {
    path: "/watchlist/:id",
    component: MovieDetailsPage,
    redirect: false,
  },
];
