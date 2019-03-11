import React from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../actions'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

var input = {
    startDate: new Date(),
}

var changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    input[name] = value
}

var changeNewDate = (value) => {
    input.startDate = value;
    console.log(input.startDate);
    return input;

}

const AddEvent = ({ dispatch }) => {

    return (
        <Card style={styles.card}>
            <CardContent>
                <div>
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            dispatch(addEvent(input))
                            console.log(input);
                            input = {};
                        }}
                    >
                        <div style={styles.inputFields}>
                            <label >Name:
                            <input type="text"
                                    name="name"
                                    onChange={changeHandler}
                                />
                            </label>
                        </div>
                        <div style={styles.inputFields}>
                            <label >City:
                        <input type="text"
                                    name="city"
                                    onChange={changeHandler}
                                />
                            </label>
                        </div>
                        <div style={styles.inputFields}>
                            <label>Type:
                        <input type="text"
                                    name="eventType"
                                    onChange={changeHandler}
                                />
                            </label>
                        </div>
                        <div style={styles.inputFields}>
                            <label>Date:
                        <DatePicker
                                    selected={input.startDate}
                                    onChange={(v) => changeNewDate(v)} />
                            </label>
                        </div>
                        <button type="submit">Add Event</button>
                    </form>
                </div>
            </CardContent>
        </Card >

    )
}

const styles = {
    inputFields: {
        marginBottom: 50,
    },
    card: {
        position: 'absolute',
        minWidth: 400,
        maxWidth: 400,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

export default connect()(AddEvent)
