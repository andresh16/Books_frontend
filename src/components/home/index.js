import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import BookItem from '../bookItemComponent';
import {Row, Col, Grid} from 'react-flexbox-grid';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getListAllBooks,findBooksByTitleAuthor,changeFilter} from './actions';
import {isEmpty} from 'lodash';
import {changeTitleMenu} from '../menu/actions';

const style = {
    margin: 20,
    width: '96%',
    display: 'inline-block',
};

function mapBookItem(item, idx) {
    return (
        <BookItem key={idx} title={item.title} urlImage={item.urlImage}
                  synopsis={item.synopsis} pages={item.pages} editorial={item.editorial}
                  author={item.author} language={item.language} gender={item.gender}
        />
    );
}

class Home extends Component {

    constructor(props){
        super(props);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
        this._findBooks = this._findBooks.bind(this);

    }

    componentWillMount() {
        const {getListAllBooks,changeTitleMenu} = this.props;
        getListAllBooks();
        changeTitleMenu("Librería");
    }

    _findBooks(){
        const {findBooksByTitleAuthor, books} = this.props;
        const keyWord = books.get('keywordTitleAuthor');
        findBooksByTitleAuthor(keyWord);
    }

    handleChangeFilter(e){
        this.props.changeFilter(e.target.value);
        if (e.keyCode === 13 || e.which === 13) {
            this.props.findBooksByTitleAuthor(e.target.value);
        }
        if(isEmpty(e.target.value)){
            this.props.getListAllBooks();
        }
    }

    render() {
        const {books} = this.props;
        const data = books.get('books');
        const keyWord = books.get('keywordTitleAuthor');
        return (
            <div>
                <Paper style={style} zDepth={1} rounded={false}>
                    <Row style={{padding: 20}}>
                        <Col xs={8} md={10} lg={10}>
                            <TextField onKeyPress={this.handleChangeFilter} floatingLabelText="Buscar libro" hintText="Buscar libro" fullWidth={true} value={keyWord} onChange={this.handleChangeFilter}/>
                        </Col>
                        <Col xs={4} md={2} lg={2}>
                            <RaisedButton style={{marginTop: 27}} label="Buscar" primary={true} onClick={this._findBooks}/>
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
        changeTitleMenu,
        findBooksByTitleAuthor,
        changeFilter
    }, dispatch);
}


function mapStateToProps({books}, ownerProps) {
    return {
        books
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);