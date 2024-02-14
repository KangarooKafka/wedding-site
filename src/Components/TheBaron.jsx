import {useEffect, useState} from "react";
import urlUtil from "../Common/utils/urlUtil";

// Blank object for form data
let formData = {
    puzzle_answers: [],
}

let whoSolved = "";
let trackerId = "";

// Displays timed message
function setMessage(setSubmitted, setThinking, setSolved, setWrong, setPuzzleDone, setSolution, puzzleDone, result) {
    setSubmitted(true)
    setTimeout(() => {
        setSubmitted(false)
        setThinking(true)
        setTimeout(() => {
            setThinking(false)
            if (result) {
                setPuzzleDone(true);
                if (!puzzleDone) {
                    whoSolved = "You";
                    if (localStorage.getItem('p2FirstName').length > 0){
                        updateTracker(trackerId, {
                            puzzle_finished: true,
                            who_solved_first: `${localStorage.getItem('p1FirstName')} & ${localStorage.getItem('p2FirstName')}`,
                            solved_time: Date.now().toString(),
                        })
                    } else {
                        updateTracker(trackerId, {
                            puzzle_finished: true,
                            who_solved_first: `${localStorage.getItem('p1FirstName')}`,
                            solved_time: Date.now().toString(),
                        })
                    }
                }
                setSolved(true)
            } else {
                setWrong(true)
                setTimeout(() => {
                    setWrong(false)
                }, 5000)
            }
        }, 3000)
    }, 3000)
}

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

// Makes API call to get overall enigma status
async function updateTracker(id, form) {
    return fetch(`${urlUtil}/api/admin/status/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
    })
        .then(data => data.json())
}

// Makes API call to check answers
async function checkEntries(id, form) {
    return fetch(`${urlUtil}/api/admin/check/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
    })
        .then(data => data.json())
}

export default function TheBaron() {

    // Puzzles hook
    const [puzzles, setPuzzles] = useState([]);
    const [solved, setSolved] = useState(false);
    const [wrong, setWrong] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [thinking, setThinking] = useState(false);
    const [puzzleDone, setPuzzleDone] = useState(false);
    const [solution, setSolution] = useState("");

    // Gets all guests from API and loads them into state variable
    useEffect(() => {
        let mounted = true;
        getAllPuzzles()
            .then(async puzzles => {
                if (mounted) {
                    setPuzzles(await puzzles)
                }
            })
        getTracker()
            .then(async enigma_status => {
                if(mounted) {
                    whoSolved = enigma_status.who_solved_first;
                    setSolution(enigma_status.reward);
                    trackerId = enigma_status._id;
                    if (enigma_status.puzzle_finished){
                        setPuzzleDone(true)
                    }
                }
            })
        return () => mounted = false;
    }, [])

    // Handles form submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Iterate over every form input and add them to the submission form
        for(let i = 1; i < e.target.length -1; i++){
            if(e.target[i].value.length > 0){
                formData.puzzle_answers.push(
                    {
                        _id: e.target[i].name,
                        entry: e.target[i].value.toLowerCase(),
                    }
                );
            }
        }

        // Log form results for testing
        console.log(formData)

        // Send the updated form to the API
        const res = await checkEntries(localStorage.getItem('userID'), formData);

        setMessage(setSubmitted, setThinking, setSolved, setWrong, setPuzzleDone, setSolution, puzzleDone, res.correct >= puzzles.length)
        console.log(res)
        // Reset form
        formData = {
            puzzle_answers: [],
        };
    }

    return (
        <article className="TheBaron">
            <h1>The Baron's Enigma</h1>
            <section>
                <div className={'solved-header'}>
                    {puzzleDone &&
                        <h2>The Baron's Enigma has been solved! {whoSolved} submitted the correct answers!
                        The solution to the final puzzle is {solution}</h2>
                    }
                </div>
                <form onSubmit={handleSubmit} aria-label={"Enigma riddles"}>
                    <fieldset>
                        <p>The Baron wishes to inform you that he is now on Instagram: @TheFirstBaronOfReading</p>
                        <p>The Baron also requests that your answers contain no commas</p>
                        {puzzles.length > 0 ? (
                                <ul>
                                    {/* For each guest, add them to the list */}
                                    {puzzles.map(puzzle =>
                                        <li key={puzzle._id}>
                                            <label>{puzzle.label}</label>
                                            <input name={puzzle._id}/>
                                        </li>
                                    )}
                                </ul>
                            ) : (
                                <p>No puzzles found</p>
                            )}
                            <div className={'submission-header'}>
                                {/* Timed messages */}
                                {submitted && <p> Your answers have been submitted for processing. </p>}
                                {thinking && <p> The Baron is checking your answers... </p>}
                                {solved && <p> Congratulations!!! You've solved The Baron's enigma!!!</p>}
                                {wrong && <p> Some, or all, of your submissions were incorrect. </p>}
                            </div>
                        </fieldset>
                    <button type={"submit"}>
                        Are these correct?
                    </button>
                </form>
            </section>
        </article>
    )
}