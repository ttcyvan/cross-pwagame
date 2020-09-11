import Jeu1 from "./component/jeu1";
import Jeu2 from "./component/jeu2";
import Jeu3 from "./component/jeu3";

export default[
    {path: "/", exact:true, component:Jeu1},
    {path: "/jeu1", component:Jeu1},
    {path: "/jeu2", component:Jeu2},
    {path: "/jeu3", component:Jeu3}
];