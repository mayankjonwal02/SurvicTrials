import { faUserPlus ,faUsers , faBookMedical , faRightFromBracket} from "@fortawesome/free-solid-svg-icons";

const sidebaritems = [
    {
        title: "Create User",
        path: "/admintask/createuser",
        icon: faUserPlus,
    },
    {
        title: "View Users",
        path: "/admintask/viewusers",
        icon: faUsers,
    },
    {
        title: "Data",
        path: "/admintask/data",
        icon: faBookMedical,
    },
    {
        title: "Logout",
        path: "/admin",
        icon: faRightFromBracket,
    }
];
export default sidebaritems