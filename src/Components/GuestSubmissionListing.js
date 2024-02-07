// Formats Boolean values so they view nicer on the screen

export default function GuestSubmissionListing(guestListing) {
    // Get the guest object out of the argument object
    const guest = guestListing.guest

    return (
        <section className="guest-puzzle">
            {/* Display the name of the guest or guests (depending on if there's two or one) */}
            {guest.p2FirstName.length > 0 ? (
                <h2>{guest.p1FirstName} & {guest.p2FirstName}</h2>
            ) : (
                <h2>{guest.p1FirstName}</h2>
                )
            }
            <ul>
                {/* For each guest, add them to the list */}
                {guest.puzzle_answers.map(puzzle =>
                    <li key={puzzle._id}>
                        {puzzle.correct ? (
                            <p className="correct-answer">{puzzle.label}:    "{puzzle.entry}"</p>
                        ) : (
                            <p className="incorrect-answer">{puzzle.label}:  "{puzzle.entry}"</p>
                            )
                        }
                    </li>
                )}
            </ul>
        </section>
    )
}