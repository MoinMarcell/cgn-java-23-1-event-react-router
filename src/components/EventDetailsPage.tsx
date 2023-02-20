import {useParams} from "react-router-dom";
import {Event} from "../models/Event";

type EventDetailsPageProps = {
    events: Event[],
}
export default function EventDetailsPage(props: EventDetailsPageProps) {

    const params = useParams()
    const id: string | undefined = params.eventId

    const event: Event | undefined = props.events.find((event) => event.id === id);

    return (
        <div>
            <h1>
                {
                    event && event.title
                }
            </h1>
            <p>
                {
                    event && event.description
                }
            </p>
        </div>
    );
}