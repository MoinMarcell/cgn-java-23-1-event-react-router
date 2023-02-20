import {Event} from "../models/Event";
import EventCard from "./EventCard";

type EventGalleryProps = {
    events: Event[],
}

export default function EventGallery(props: EventGalleryProps){

    const eventCards = props.events.map((event) => {
        return(
            <EventCard event={event} key={event.id} />
        );
    });

    return(
        <div>
            <h1>Welcome to the EventPage</h1>
            {eventCards}
        </div>
    );

}