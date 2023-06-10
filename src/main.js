import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import "./assets/styles/base.scss";
import store from "./store/index";
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import "boxicons/css/boxicons.min.css";
import {
  faMagnifyingGlass,
  faAngleDown,
  faBars,
  faXmark,
  faAngleLeft,
  faAngleRight,
  faHeart,
  faCartShopping,
  faChevronRight,
  faTableCellsLarge,
  faTableCells,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faMagnifyingGlass,
  faAngleDown,
  faBars,
  faXmark,
  faAngleLeft,
  faAngleRight,
  faHeart,
  faCartShopping,
  faChevronRight,
  faTableCellsLarge,
  faTableCells,
  faTableList
  );
  import { registerGlobalComponents } from "./utils/import";
  import VueObserveVisibility from 'vue-observe-visibility'

  const app = createApp(App)
  
  registerGlobalComponents(app);
  app.use(VueObserveVisibility)
  app.component("font-awesome-icon", FontAwesomeIcon);
  app.use(router);
  app.use(store);
  app.mount("#app");
  