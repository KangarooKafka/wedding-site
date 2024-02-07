// Formats Boolean values so they view nicer on the screen

import {useState} from "react";
import urlUtil from "../Common/utils/urlUtil";

// Makes API call to delete puzzle
async function deletePuzzle(id) {
    return fetch(`${urlUtil}/api/admin/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
}

export default function PuzzleListing(puzzleListing) {
    // Get the guest object out of the argument object
    const puzzle = puzzleListing.puzzle

    const [deleting, setDeleting] = useState(false);

    const handleFirstDelete = async (e) => {
        e.preventDefault();
        if (deleting) {
            setDeleting(false);
        } else {
            setDeleting(true);
        }
        e.target.reset();
    }

    const handleFinalDelete = async (e) => {
        e.preventDefault();
        deletePuzzle(puzzle._id);
        setDeleting(false)
        e.target.reset();
    }

    return (
        <section className="puzzle">
            {puzzle.solved ? (
                <div>
                    <p className="solved-puzzle" >{puzzle.label}</p>
                    <p>Solution: {puzzle.answer}</p>
                </div>
            ) : (
                <div>
                    <p className="unsolved-puzzle" >{puzzle.label}</p>
                    <p>Solution: {puzzle.answer}</p>
                </div>
            )
            }
            {puzzle.solved ? (
                <div>
                <p>The puzzle has been solved!</p>
                <p>Puzzle first solved by: {puzzle.first_solved_by}</p>
                <p>Puzzle first solved at: {puzzle.first_solved_date}</p>
                <p>Eveyone who has solved the puzzle:</p>
                <ul>
                {/* For each puzzle, list everyone who solved */}
                    {puzzle.everyone_who_solved.map(guest =>
                    <li key={guest}>
                        <p>{guest}</p>
                    </li>
                    )}
                </ul>
                </div>
            ) : (
                <p>The puzzle has not been solved yet!</p>
            )}
            <form onSubmit={handleFirstDelete}>
                <button>DELETE</button>
            </form>
            {deleting &&
                <form onSubmit={handleFinalDelete}>
                    <button>ARE YOU SURE YOU WANT TO DELETE?</button>
                </form>
            }
        </section>
    )
}