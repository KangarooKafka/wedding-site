// Formats Boolean values so they view nicer on the screen

export default function GuestListing(guestListing) {
    // Get the guest object out of the argument object
    const guest = guestListing.guest

    return (
        <section className="guest">
            {/* Display the name of the guest or guests (depending on if there's two or one) */}
            {guest.p2FirstName.length > 0 ? (
                <h2>{guest.p1FirstName} & {guest.p2FirstName}</h2>
            ) : (
                <h2>{guest.p1FirstName}</h2>
                )
            }
            <p>{guest.p1FirstName} {guest.p1LastName} coming: <span>{guest.p1Coming}</span></p>
            <p>{guest.p1FirstName}'s email: <span>{guest.p1Email}</span></p>
            {/* Only display if there is an invited partner */}
            {guest.p2FirstName.length > 0 &&
                <>
                    <p>{guest.p2FirstName} {guest.p2LastName} coming: <span>{guest.p2Coming}</span></p>
                    <p>{guest.p2FirstName}'s email: <span>{guest.p2Email}</span></p>
                </>
            }
            {/* Only display if there are children */}
            {guest.children.length > 0 &&
                <p>{guest.children}: <span>{guest.chAttending}</span></p>
            }
            <p>Interested in the villa: <span>{guest.villaInt}</span></p>
            <p>Roommates: <span>{guest.roommates}</span></p>
            <p>Food Restrictions: <span>{guest.foodRestricts}</span></p>
            <p>Notes: <span>{guest.notes}</span></p>
        </section>
    )
}