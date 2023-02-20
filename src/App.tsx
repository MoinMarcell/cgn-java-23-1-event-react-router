import React from 'react';
import {Event} from "./models/Event";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import {Route, Routes} from "react-router-dom";
import EventGallery from "./components/EventGallery";
import EventDetailsPage from "./components/EventDetailsPage";

const events: Event[] = [
    {
        id: "1",
        title: "Event 1",
        description: "Ein cooles Event:)"
    },
    {
        id: "2",
        title: "Event 2",
        description: "Ein cooles Event:)"
    },
    {
        id: "3",
        title: "Event 3",
        description: "Ein cooles Event:)"
    },
    {
        id: "4",
        title: "Event 4",
        description: "Ein cooles Event:)"
    },
    {
        id: "5",
        title: "Event 5",
        description: "Ein cooles Event:)"
    },
    {
        id: "6",
        title: "Event 6",
        description: "Ein cooles Event:)"
    },
];

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/events"} element={<EventGallery events={events} />} />
                <Route path={"/events/:eventId"} element={<EventDetailsPage events={events} />} />
            </Routes>
        </div>
    );
}

export default App;
