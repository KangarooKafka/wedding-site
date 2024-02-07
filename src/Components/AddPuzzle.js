import {useState} from "react";
import urlUtil from "../Common/utils/urlUtil";

// Makes API call to add a new puzzle
async function addPuzzle() {
    return fetch(`${urlUtil}/api/admin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
}

// Makes API call to add the new tracker
async function addTracker() {
    return fetch(`${urlUtil}/api/admin/status/delete-and-add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trackerFormData)
    })
}

// Displays timed success message
function successMessage(setSuccess) {
    setSuccess(true)
    setTimeout(() => {
        setSuccess(false)
    }, 2000)

}

function rewardSuccessMessage(setSuccess) {
    setSuccess(true)
    setTimeout(() => {
        setSuccess(false)
    }, 2000)

}

// Blank form for new puzzle
let formData = {
    label: "",
    answer: [],
}

// Blank tracker form to reset tracker
let trackerFormData = {
    reward: ""
}

export default function AddPuzzle() {
    // Get user
    const user = localStorage.getItem('username');

    // Hook for success message
    const [success, setSuccess] = useState(false);
    const [rewardSuccess, setRewardSuccess] = useState(false);

    // Hook for completed form
    const [finished, setFinished] = useState(false)
    const [rewardFinished, setRewardFinished] = useState(false)

    // Delegates form change and adds it to appropriate form field
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'label':
                formData.label = e.target.value;
                break;
            case 'answer':
                formData.answer = e.target.value.toLowerCase().split(', ');
                break;
            default:
                break;
        }

        // Check if form is valid enough to be submitted
        if (formData.label.length > 0 &&
            formData.answer.length > 0) {
            setFinished(true)
        }
    }

    // Delegates form change and adds it to appropriate form field
    const handleRewardChange = (e) => {
        switch (e.target.name) {
            case 'reward':
                trackerFormData.reward = e.target.value;
                break;
            default:
                break;
        }

        // Check if form is valid enough to be submitted
        if (trackerFormData.reward.length > 0) {
            setRewardFinished(true);
        }
    }

    // Handles submit by adding the puzzle to the database
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Add puzzle to the API
        await addPuzzle()

        console.log(formData)

        // Reset form data
        formData = {
            label: "",
            answer: [],
        }

        // Set success message, reset button and clear fields
        successMessage(setSuccess)
        setFinished(false)
        e.target.reset()
    }

    // Handles submit by resetting the tracker data
    const handleRewardSubmit = async (e) => {
        e.preventDefault()

        // Add puzzle to the API
        await addTracker()

        console.log(trackerFormData)

        // Reset form data
        trackerFormData = {
            reward: ""
        }

        // Set success message, reset button and clear fields
        rewardSuccessMessage(setRewardSuccess)
        setRewardFinished(false)
        e.target.reset()
    }

    return (
        <article className="add-puzzle">
            <h1>Add Puzzles</h1>
            {user === 'kd@rk3' &&
                <div>
                    <form onChange={handleRewardChange} onSubmit={handleRewardSubmit}>
                        <fieldset>
                            <div className={'add-header'}>
                                <h2>Reset final reward</h2>
                                {/* Timed message if new puzzle successfully added */}
                                {rewardSuccess &&
                                    <p> Reward reset</p>
                                }
                            </div>
                            <div className={'form-boxes'}>
                                <label>
                                    <p>Final Reward:</p>
                                    <input name={'reward'}/>
                                </label>
                            </div>
                        </fieldset>
                        <button disabled={!rewardFinished}>Submit</button>
                    </form>
                    <form onChange={handleChange} onSubmit={handleSubmit}>
                        <fieldset>
                            <div className={'add-header'}>
                                <h2>Add A Puzzle</h2>
                                {/* Timed message if new puzzle successfully added */}
                                {success &&
                                    <p> New puzzle added!</p>
                                }
                            </div>
                            <div className={'form-boxes'}>
                                <label>
                                    <p>Puzzle Label:</p>
                                    <input name={'label'}/>
                                </label>
                                <label>
                                    <p>Puzzle Answers:</p>
                                    <input name={'answer'}/>
                                </label>
                            </div>
                        </fieldset>
                        <button disabled={!finished}>Add Puzzle</button>
                    </form>
                </div>
            }
        </article>
    )
}