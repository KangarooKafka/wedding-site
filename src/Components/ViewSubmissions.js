import {useEffect, useState} from "react";
import urlUtil from "../Common/utils/urlUtil";
import GuestSubmissionListing from "./GuestSubmissionListing";
import PuzzleListing from "./PuzzleListing";

//http://localhost:4000/api/guest

// Function to get all guests from API
async function getAllGuests() {
    return await fetch(`${urlUtil}/api/guest`, {
        method: 'GET'
    })
        .then(data => data.json())
}

export default function ViewSubmissions() {
    // Get user
    const user = localStorage.getItem('username');

    // Hook to hold all guests
    const [guests, setGuests] = useState([]);

    // Function to get guests and add them to state
    useEffect(() => {
        let mounted = true;

        // Get guests from API
        getAllGuests()
            // Use hook to save guests and update state
            .then(async guests => {
                if (mounted) {
                    setGuests(await guests)
                }
            })
        return () => mounted = false;
    }, [])

    return (
        <article className="view-submissions">
            <h1>View Guest Submissions</h1>
            {user === 'kd@rk3' &&
                <section>
                    {guests.length > 0 ? (
                        <ul>
                            {/* For each guest, Map their answers*/}
                            {guests.map(guest =>
                                <li key={guest._id}><GuestSubmissionListing guest={guest}/></li>
                            )}
                        </ul>
                    ) : (
                        <p>No guests found</p>
                    )}
                </section>
            }
        </article>
    )
}