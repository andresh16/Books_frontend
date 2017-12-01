import FlatButton from 'material-ui/FlatButton';
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';

const style = {
    width: 250,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class BookItemComponent extends Component {
    render() {
        const {title, urlImage} = this.props;
        return (
            <Paper style={style} zDepth={2}>
                <Card>
                    <CardMedia actAsExpander={true}>
                        <img style={{height:'230px',width:'230px'}} src={urlImage} alt="" />
                    </CardMedia>
                    <CardTitle subtitle={title} />
                    <CardActions>
                        <FlatButton label="Ver libro" />
                    </CardActions>
                </Card>
            </Paper>
        );
    }
}

export default BookItemComponent;
