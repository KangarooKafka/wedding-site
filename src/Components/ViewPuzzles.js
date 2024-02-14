import {useEffect, useState} from "react";
import urlUtil from "../Common/utils/urlUtil";
import PuzzleListing from "./PuzzleListing";

//http://localhost:4000/api/guest

let enigma_finished = false;
let who_solved_first = "";
let solved_time = "";

// Makes API call to get all puzzles
async function getAllPuzzles() {
    return await fetch(`${urlUtil}/api/admin`, {
        method: 'GET'
    })
        .then(data => data.json())
}

// Makes API call to get the tracker
async function getTracker() {
    return await fetch(`${urlUtil}/api/admin/status/all`, {
        method: 'GET'
    })
        .then(data => data.json())
}

export default function ViewPuzzles() {
    // Get user
    const user = localStorage.getItem('username');

    // Hook to hold all guests
    const [puzzles, setPuzzles] = useState([]);

    // Function to get guests and add them to state
    useEffect(() => {
        let mounted = true;

        // Get puzzles from API
        getAllPuzzles()
            // Use hook to save guests and update state
            .then(async puzzles => {
                if (mounted) {
                    setPuzzles(await puzzles)
                }
            })
        getTracker()
            .then(async enigma_status => {
                if(mounted) {
                    enigma_finished = enigma_status.puzzle_finished;
                    who_solved_first = enigma_status.who_solved_first;
                    solved_time = enigma_status.solved_time;
                }
            })
        return () => mounted = false;
    }, [])

    return (
        <article className="view-puzzles">
            <h1>View Puzzle Status</h1>
            {user === 'kd@rk3' &&
                <section>
                    {enigma_finished ? (
                        <div>
                            <h2>The Baron's Enigma has been solved!!!</h2>
                            <p>{who_solved_first} solved the final enigma first</p>
                            <p>The enigma was finally solved at {solved_time}</p>
                        </div>
                    ) : (
                            <h2>The Baron's Enigma has yet to be solved!</h2>
                    )}
                    {puzzles.length > 0 ? (
                        <ul>
                            {/* For each puzzle, Map their contents*/}
                            {puzzles.map(puzzle =>
                                <li key={puzzle._id}><PuzzleListing puzzle={puzzle}/></li>
                            )}
                        </ul>
                    ) : (
                        <p>No puzzles found</p>
                    )}
                </section>
            }
        </article>
    )
}