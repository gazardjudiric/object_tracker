import {
  IconesBookmarkStarFill,
  IconesHeadset,
  IconesMdiLock,
  IconesMdiMapMarkerRadius,
} from "../../Assets/Icones/Icones";

export const FeaturesList = [
  {
    icon: <IconesHeadset />,
    title: "Commande vocal",
    text: `La commande vocale offre une expérience utilisateur optimale et rapide.`,
  },
  {
    icon: <IconesMdiMapMarkerRadius />,
    title: "Geo - localisation",
    text: `Si l'objet ne peut pas être localisé via Bluetooth, l'application bascule automatiquement sur la technologie GPS pour aider à localiser l'objet`,
  },
  {
    icon: <IconesMdiLock />,
    title: "Mode perdue",
    text: `Grâce au mode perdu, toute personne ayant trouvé votre objet et scanné le code QR situé à l'arrière de celui-ci sera automatiquement redirigée vers une page web contenant un message personnalisé`
  },
  {
    icon: <IconesBookmarkStarFill />,
    title: "Historiques",
    text: `L'onglet historique fournira au propriétaire une liste précise des lieux où l'objet égaré a été localisé au cours des dernières 72 heures.`,
  },
];
