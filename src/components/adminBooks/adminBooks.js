import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Grid} from 'react-flexbox-grid';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getListAllBooks} from '../home/actions';
import {changeTitleMenu} from '../menu/actions';
import TableBooks from '../tableBooks/tableBooksComponent';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    margin: 20,
    width: '96%',
    display: 'inline-block',
};

const styleButton = {
    float: 'right',
    display: 'block',
    position: 'fixed',
    bottom: '20px',
    right: '20px'
};

class AdminBooks extends Component {


    componentWillMount() {
        const {getListAllBooks, changeTitleMenu} = this.props;
        getListAllBooks();
        changeTitleMenu("Administrar libros");
    }

    render() {
        return (
            <div>
                <Paper style={style} zDepth={1} rounded={false}>
                    <Grid fluid style={style}>
                        <TableBooks/>
                    </Grid>
                </Paper>
                <FloatingActionButton style={styleButton}>
                    <ContentAdd/>
                </FloatingActionButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminBooks);