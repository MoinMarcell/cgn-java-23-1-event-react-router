import "./Header.css";
import {Link, useNavigate} from "react-router-dom";

export default function Header(){

    //const navigate = useNavigate();

    //function onClick(){
        //navigate("/events")
    //}

    return(
        <header>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/events"}>Events</Link></li>
                </ul>
            </nav>
        </header>
    );
}