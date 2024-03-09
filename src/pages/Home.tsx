import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useLocation } from "react-router";

const Page: React.FC = () => {
  const { pathname } = useLocation<{ name: string }>();

  const getTitle = () => {
    switch (pathname) {
      case "/":
        return "Home";
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
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Page;
