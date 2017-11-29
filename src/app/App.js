import React, {Component} from 'react';
import '../style/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Grid, Row, Col} from 'react-flexbox-grid';
import BookItem from '../components/bookItemComponent';
import {books} from '../img/images';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton  from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {indigo500} from 'material-ui/styles/colors';

const style = {
    margin: 20,
    display: 'inline-block',
};

const muiTheme = getMuiTheme({
    appBar: {
        height: 50
    },
});

class App extends Component {

    _mapBooksItem(item, idx) {
        return (
            <BookItem title={item.title} urlImage={item.urlImage}/>
        );
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme} style={{width: '100%'}}>
                <AppBar
                    style={{width: '100%',background: indigo500}}
                    showMenuIconButton={false}
                    title="Mi librería"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Paper style={style} zDepth={1} rounded={false}>
                    <Row style={{padding: 20}}>
                        <Col xs={8} md={10} lg={10}>
                            <TextField floatingLabelText="Buscar libro" hintText="Buscar libro" fullWidth={true}/>
                        </Col>
                        <Col xs={4} md={2} lg={2}>
                            <RaisedButton style={{marginTop: 27}} label="Buscar" primary={true}/>
                        </Col>
                    </Row>
                    <Divider/>
                    <Grid fluid>
                        <Row>
                            {books.map(this._mapBooksItem)}
                        </Row>
                    </Grid>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default App;
