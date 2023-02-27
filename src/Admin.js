import {useEffect, useState} from "react";
import GuestListing from "./GuestListing";

async function getAllGuests() {
    return await fetch(`http://localhost:4000/guest`, {
        method: 'GET'
    })
        .then(data => data.json())
}

export default function Admin() {
    const [guest, setGuest] = useState([]);

    useEffect(() => {
        let mounted = true;
        getAllGuests()
            .then(async guests => {
                if (mounted) {
                    setGuest(await guests)
                }
            })
        return () => mounted = false;
    }, [])


    return (
        <article className="admin">
            <h1>View RSVPs</h1>
            <section>
                <ul>
                    {guest.map(guest =>
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