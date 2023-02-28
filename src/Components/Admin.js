import {useEffect, useState} from "react";
import GuestListing from "./GuestListing";

// Function to get all guests from API
async function getAllGuests() {
    return await fetch(`http://localhost:4000/guest`, {
        method: 'GET'
    })
        .then(data => data.json())
}

export default function Admin() {
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
        <article className="admin">
            <h1>View RSVPs</h1>
            <section>
                <ul>
                    {/* For each guest, if they have RSVPed, add them to the list */}
                    {guests.map(guest =>
                        <>
                        {guest.rsvped === 'true' &&
                            <li key={guest._id}><GuestListing guest={guest}/></li>
                        }
                        </>
                    )}
                </ul>
            </section>
        </article>
    )
}