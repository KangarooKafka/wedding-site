import {useReducer, useState} from "react";

const formReducer = (state, e) => {
    console.log(e)
    return {

        [e.name]: e.value
    }
}

const RSVP = () => {
    const personOne = localStorage.getItem('p1FirstName');
    const personTwo = localStorage.getItem('p2FirstName');
    const children = localStorage.getItem('children');

    const [formData, setFormData] = useReducer(formReducer,{
        pOneAttending: "",
        pTwoAttending: "",
    });
    const [attending, setAttending] = useState(false);

    const handleChange = (e) => {
        setFormData({
            name: e.target.name,
            value: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <article className="RSVP">
            <h1>RSVP page</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label>
                            <p>Will {personOne} be attending?</p>
                            <select
                                name={'pOneAttending'}
                                onChange={handleChange}
                                value={formData.pOneAttending}
                            >
                                <option value={""}></option>
                                <option value={"true"}>Yes</option>
                                <option value={"false"}>No</option>
                            </select>
                        </label>
                        {formData.pOneAttending === 'true' &&
                            <label>
                                <p>What is the best email address for {personOne}?</p>
                                <input/>
                            </label>
                        }
                        {personTwo.length > 0 &&
                            <label>
                                <p>Will {personTwo} be attending?</p>
                                <select
                                    name={'pTwoAttending'}
                                    onChange={handleChange}
                                    value={formData.pTwoAttending || ''}
                                >
                                    <option value={""}></option>
                                    <option value={"true"}>Yes</option>
                                    <option value={"false"}>No</option>
                                </select>
                            </label>
                        }
                        {formData.pTwoAttending === 'true' &&
                            <label>
                                <p>What is the best email address for {personTwo}?</p>
                                <input/>
                            </label>
                        }
                        {attending && children.length > 0 &&
                            <label>
                                <p>Will {children} be attending?</p>
                                <select>
                                    <option value={""}></option>
                                    <option value={"true"}>Yes</option>
                                    <option value={"false"}>No</option>
                                </select>
                            </label>
                        }
                        {attending &&
                            <label>
                                <p>Would you be interested in staying at the Villa?</p>
                                <select>
                                    <option value={""}></option>
                                    <option value={"true"}>Yes</option>
                                    <option value={"false"}>No</option>
                                </select>
                            </label>
                        }
                        {attending &&
                            <label>
                                <p>Is there anyone you think is going who you would be okay sharing a multi-bed room
                                    with?</p>
                                <textarea/>
                            </label>
                        }
                        {attending &&
                            <label>
                                <p>Do you have any food restrictions?</p>
                                <textarea/>
                            </label>
                        }
                        <label>
                            <p>Are there any additional notes or messages you would like to add?</p>
                            <textarea/>
                        </label>
                    </fieldset>
                    <button type={"submit"}>
                        Submit RSVP
                    </button>
                </form>
            </section>
        </article>
    )
}

export default RSVP;