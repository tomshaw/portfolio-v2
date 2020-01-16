// ==========================================================================
// Routes
// ==========================================================================

import Home from '../containers/home';
import About from '../containers/about';
import Playlist from '../containers/music';
import MainGrid from '../containers/main/grid';
import MainView from '../containers/main/view';

const Routes = [{
  title: "Home",
  path: "/",
  component: Home
}, {
  title: "About",
  path: "/about",
  component: About
}, {
  title: "Work List",
  path: "/work",
  component: MainGrid
}, {
  title: "Work View",
  path: "/work/:id",
  component: MainView
}, {
  title: "Play List",
  path: "/play",
  component: MainGrid
}, {
  title: "Play View",
  path: "/play/:id",
  component: MainView
}, {
  title: "Gallery List",
  path: "/gallery",
  component: MainGrid
}, {
  title: "Gallery View",
  path: "/gallery/:id",
  component: MainView
}, {
  title: "Music",
  path: "/playlist",
  component: Playlist
}]

export default Routes