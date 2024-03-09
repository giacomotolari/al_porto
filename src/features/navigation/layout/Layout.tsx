import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Menu from "../../../components/Menu";
import Routes from "../routing/Routes";

export default function Layout() {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Routes />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
}
