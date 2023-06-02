import { useState } from "react";
import urlUtil from "../Common/utils/urlUtil";
import emailjs from '@emailjs/browser';

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
    return fetch(`${urlUtil}/api/guest/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
    })
}

// Sends confirmation emails
async function sendConfirmation(form) {
    /** Hey, get outa here Peter, Noonan, or Ian! Don't look at my keys, it's rude!
    If you must know, I left these here because I don't fully trust my work on the back end and wanted a way
     to retain RSVP info using only the front end. That way if someone RSVPed and the back end was down, I'd
    at least still get the email confirmation. **/
    emailjs.sendForm('service_tcga8ya', 'template_w9zmef9', form, '7Zx6gmCsuXWw8oqbB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
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

        // Send form data for confirmation email to be sent
        await sendConfirmation(e.target)

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
                    <p>If you said that you were interested in staying at the Villa, we will
                        reach out to you when more people have RSVPed and let you know if
                        there is space or if you will be needing to book a hotel.</p>
                    <p>If you need to make a change, please <a href={'mailto:kevindarke@gmail.com'}>contact us directly</a>.</p>
                </div>
                ) : (
                    <form onSubmit={handleSubmit} onChange={handleChange} aria-label={"RSVP Submission form"}>
                        <fieldset>
                            <label>
                                <p>Will {personOne} be attending?</p>
                                <select name={'pOneAttending'}>
                                    <option value={""}></option>
                                    <option value={"will be attending"}>Yes</option>
                                    <option value={"will NOT be attending"}>No</option>
                                </select>
                            </label>
                            {pOneAttend === 'will be attending' &&
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
                                        <option value={"will be attending"}>Yes</option>
                                        <option value={"will NOT be attending"}>No</option>
                                    </select>
                                </label>
                            }
                            {pTwoAttend === 'will be attending' &&
                                <label>
                                    <p>What is the best email address for {personTwo}?</p>
                                    <input name={'pTwoEmail'}/>
                                </label>
                            }
                            {(pOneAttend === 'will be attending' || pTwoAttend === 'will be attending') && children.length > 0 &&
                                <label>
                                    <p>Will {children} be attending?</p>
                                    <select name={'chAttending'}>
                                        <option value={""}></option>
                                        <option value={"will be attending"}>Yes</option>
                                        <option value={"will NOT be attending"}>No</option>
                                    </select>
                                </label>
                            }
                            {(pOneAttend === 'will be attending' || pTwoAttend === 'will be attending') &&
                                <label>
                                    <p>Would you be interested in staying at the Villa?</p>
                                    <select name={'villaAttending'}>
                                        <option value={""}></option>
                                        <option value={"yes"}>Yes</option>
                                        <option value={"no"}>No</option>
                                    </select>
                                </label>
                            }
                            {(pOneAttend === 'will be attending' || pTwoAttend === 'will be attending') && villaAttend === 'yes' &&
                                <label>
                                    <p>Is there anyone you think is going who you would be okay sharing a multi-bed room
                                        with?</p>
                                    <textarea name={'sharing'}/>
                                </label>
                            }
                            {(pOneAttend === 'will be attending' || pTwoAttend === 'will be attending') &&
                                <label>
                                    <p>Do you have any food restrictions?</p>
                                    <textarea name={'food'}/>
                                </label>
                            }
                            <label>
                                <p>Are there any additional notes or messages you would like to add?</p>
                                <p>(If you would be up for helping cook a meal, please let us know!)</p>
                                <textarea name={'notes'}/>
                            </label>
                            <input type={"hidden"} name={'p1FirstName'} value={personOne}/>
                            <input type={"hidden"} name={'p2FirstName'} value={personTwo}/>
                            <input type={"hidden"} name={'children'} value={children}/>
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