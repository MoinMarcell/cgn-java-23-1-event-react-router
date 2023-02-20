import {Event} from "../models/Event";
import "./EventCard.css"
import {useNavigate} from "react-router-dom";

type EventCardProps = {
    event: Event,
}

export default function EventCard(props: EventCardProps){

    const navigate = useNavigate();

    function onDetailsClick(){
        navigate("/events/" + props.event.id)
    }

    return(
        <div className={"event-card"}>
            <h3>{props.event.title}</h3>
            <p>{props.event.description}</p>
            <button onClick={onDetailsClick}>Details</button>
        </div>
    );
}