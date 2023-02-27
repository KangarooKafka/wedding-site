import { useState } from "react";

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

async function updateGuest(id, form) {
    return fetch(`http://localhost:4000/guest/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
    })
}

const RSVP = () => {
    const personOne = localStorage.getItem('p1FirstName');
    const personTwo = localStorage.getItem('p2FirstName');
    const children = localStorage.getItem('children');

    const [pOneAttend, setPOneAttend] = useState("");
    const [pTwoAttend, setPTwoAttend] = useState("");
    const [villaAttend, setVillaAttend] = useState("");
    const [rsvped, setRsvped] = useState(localStorage.getItem('rsvped'));

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
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        localStorage.setItem('rsvped', 'true')
        setRsvped('true')
        await updateGuest(localStorage.getItem('userID'), formData)
    }

    return (
        <article className="RSVP">
            <h1>RSVP page</h1>
            <section>
                {rsvped === 'true' &&
                <div className={'rsvped-message'}>
                    <p>
                        Thank you for RSVPing!
                    </p>
                    <p>
                        If you need to make a change, please <a href={'mailto:kevindarke@gmail.com'}>contact us directly</a>.
                    </p>
                </div>
                }
                {rsvped !== 'true' &&
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
                        <button type={"submit"}>
                            Submit RSVP
                        </button>
                    </form>
                }
            </section>
        </article>
    )
}

export default RSVP;