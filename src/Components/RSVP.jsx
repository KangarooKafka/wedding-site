import { useState } from "react";

// Blank object for form data
const formData = {
    p1Coming: "",
    p1Email: "",
    p2Coming: "",
    p2Email: "",
    chAttending: "",
    villaInt: "",
    roommates: "",
    foodRestricts: "",
    notes: "",
    rsvped: "true"
}

// Makes API request to update the guest data
async function updateGuest(id, form) {
    return fetch(`/api/guest/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
    })
}

export default function RSVP() {
    // Get Guest data to customize form
    const personOne = localStorage.getItem('p1FirstName');
    const personTwo = localStorage.getItem('p2FirstName');
    const children = localStorage.getItem('children');

    // Hooks for data that will change the form
    const [pOneAttend, setPOneAttend] = useState("");
    const [pTwoAttend, setPTwoAttend] = useState("");
    const [villaAttend, setVillaAttend] = useState("");
    const [rsvped, setRsvped] = useState(localStorage.getItem('rsvped'));
    const [finished, setFinished] = useState(false)

    // Delegates changes to form
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'pOneAttending':
                formData.p1Coming = e.target.value;
                setPOneAttend(e.target.value);
                break;
            case 'pTwoAttending':
                formData.p2Coming = e.target.value;
                setPTwoAttend(e.target.value);
                break;
            case 'villaAttending':
                formData.villaInt = e.target.value;
                setVillaAttend(e.target.value)
                break;
            case 'pOneEmail':
                formData.p1Email = e.target.value;
                break;
            case 'pTwoEmail':
                formData.p2Email = e.target.value;
                break;
            case 'chAttending':
                formData.chAttending = e.target.value;
                break;
            case 'sharing':
                formData.roommates = e.target.value;
                break;
            case 'food':
                formData.foodRestricts = e.target.value;
                break;
            case 'notes':
                formData.notes = e.target.value;
                break;
            default:
                break;
        }

        // Check is minimum requirements are met to allow RSVP submission
        if ((formData.p1Coming.length > 0 && personTwo.length === 0) ||
            (formData.p1Coming.length > 0 && formData.p2Coming.length > 0)) {
            setFinished(true)
        } else {
            setFinished(false)
        }
    }

    // Handles form submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Update local storage to show they've RSVPed
        localStorage.setItem('rsvped', 'true')

        // Set RSVPed state variable to remove form
        setRsvped('true')

        // Send the updated form to the API
        await updateGuest(localStorage.getItem('userID'), formData)
    }

    return (
        <article className="RSVP">
            <h1>RSVP page</h1>
            <section>
                {/* Display message or form, depending on if the guest has RSVPed already */}
                {rsvped === 'true' ? (
                <div className={'rsvped-message'}>
                    <p>Thank you for RSVPing!</p>
                    <p>If you need to make a change, please <a href={'mailto:kevindarke@gmail.com'}>contact us directly</a>.</p>
                </div>
                ) : (
                    <form onSubmit={handleSubmit} onChange={handleChange}>
                        <fieldset>
                            <label>
                                <p>Will {personOne} be attending?</p>
                                <select name={'pOneAttending'}>
                                    <option value={""}></option>
                                    <option value={"true"}>Yes</option>
                                    <option value={"false"}>No</option>
                                </select>
                            </label>
                            {pOneAttend === 'true' &&
                                <label>
                                    <p>What is the best email address for {personOne}?</p>
                                    <input name={'pOneEmail'}/>
                                </label>
                            }
                            {personTwo.length > 0 &&
                                <label>
                                    <p>Will {personTwo} be attending?</p>
                                    <select name={'pTwoAttending'}>
                                        <option value={""}></option>
                                        <option value={"true"}>Yes</option>
                                        <option value={"false"}>No</option>
                                    </select>
                                </label>
                            }
                            {pTwoAttend === 'true' &&
                                <label>
                                    <p>What is the best email address for {personTwo}?</p>
                                    <input name={'pTwoEmail'}/>
                                </label>
                            }
                            {(pOneAttend === 'true' || pTwoAttend === 'true') && children.length > 0 &&
                                <label>
                                    <p>Will {children} be attending?</p>
                                    <select name={'chAttending'}>
                                        <option value={""}></option>
                                        <option value={"true"}>Yes</option>
                                        <option value={"false"}>No</option>
                                    </select>
                                </label>
                            }
                            {(pOneAttend === 'true' || pTwoAttend === 'true') &&
                                <label>
                                    <p>Would you be interested in staying at the Villa?</p>
                                    <select name={'villaAttending'}>
                                        <option value={""}></option>
                                        <option value={"true"}>Yes</option>
                                        <option value={"false"}>No</option>
                                    </select>
                                </label>
                            }
                            {(pOneAttend === 'true' || pTwoAttend === 'true') && villaAttend === 'true' &&
                                <label>
                                    <p>Is there anyone you think is going who you would be okay sharing a multi-bed room
                                        with?</p>
                                    <textarea name={'sharing'}/>
                                </label>
                            }
                            {(pOneAttend === 'true' || pTwoAttend === 'true') &&
                                <label>
                                    <p>Do you have any food restrictions?</p>
                                    <textarea name={'food'}/>
                                </label>
                            }
                            <label>
                                <p>Are there any additional notes or messages you would like to add?</p>
                                <textarea name={'notes'}/>
                            </label>
                        </fieldset>
                        <button type={"submit"} disabled={!finished}>
                            Submit RSVP
                        </button>
                    </form>
                )}
            </section>
        </article>
    )
}