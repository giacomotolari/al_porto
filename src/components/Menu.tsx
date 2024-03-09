import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";
import { book, bookmark, heart, home } from "ionicons/icons";
import { useLocation } from "react-router-dom";
import "./Menu.css";
import { paths } from "../features/navigation/layout/paths";

interface AppPage {
  title: string;
  url: string;
  icon: string;
}

const appPages: AppPage[] = [
  {
    title: "Home",
    url: paths.home,
    icon: home,
  },
  {
    title: "Book",
    url: paths.book,
    icon: book,
  },
  {
    title: "Favorites",
    url: paths.favorites,
    icon: heart,
  },
  {
    title: "Bookmark",
    url: paths.about,
    icon: bookmark,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Contact</IonListHeader>
          <IonNote>al_porto@gmail.com</IonNote>
          {appPages.map((appPage) => {
            return (
              <IonMenuToggle key={appPage.title} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    icon={appPage.icon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
