import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function Event(props) {
    const { event, onClick } = props;

    return (
        <Card style={styles.card}>
            <CardContent>
                <Typography>
                    {event.city}
                </Typography>
                <Typography variant="h5" component="h2">
                    {event.name}
                </Typography>
                <Typography>
                    {event.type}
                </Typography>
                <Typography>
                    {event.startDate}
                </Typography>
                <Typography>
                    Is favourite: {event.favourite.toString()}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onClick} size="small">Add to favourites</Button>
            </CardActions>
        </Card>
    );
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}

const styles = {
    card: {
        minWidth: 700,
        maxWidth: 700,
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

export default withStyles(styles)(Event);
