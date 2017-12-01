import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import BookItem from '../bookItemComponent';
import {Row, Col, Grid} from 'react-flexbox-grid';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getListAllBooks} from '../home/actions';
import {isEmpty} from 'lodash';
import {changeTitleMenu} from '../menu/actions';

const style = {
    margin: 20,
    width: '96%',
    display: 'inline-block',
};

function mapBookItem(item, idx) {
    return (
        <BookItem key={idx} title={item.title} urlImage={item.urlImage}/>
    );
}

class Home extends Component {
    componentWillMount() {
        const {getListAllBooks,changeTitleMenu} = this.props;
        getListAllBooks();
        // .then((data)=>{
        //     console.log("data",data);
        // });
        changeTitleMenu("Librería");
    }

    render() {
        const {books} = this.props;
        const data = books.get('books');
        return (
            <div>
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
                            {!isEmpty(data) ? data.map(mapBookItem) : <h2>No se encontraron libros.</h2>}
                        </Row>
                    </Grid>
                </Paper>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getListAllBooks,
        changeTitleMenu
    }, dispatch);
}


function mapStateToProps({books}, ownerProps) {
    return {
        books
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);