import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { ReactNode } from "react";
import { useLocation } from "react-router";
import { pathNotExists } from "../routing/paths";
import { pages } from "../../../pages/pages";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { pathname } = useLocation<{ name: string }>();

  const getTitle = () => {
    switch (true) {
      case pathname === "/":
        return pages.home;
      case pathNotExists(pathname):
        return pages.notFound;
      default:
        return pathname.charAt(1).toUpperCase() + pathname.slice(2);
    }
  };

  const title = getTitle();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonPage>
  );
}
