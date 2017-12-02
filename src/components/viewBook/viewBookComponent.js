import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {deleteBook} from '../adminBooks/actions';
import {getListAllBooks} from '../home/actions';
import _ from 'lodash';


class ButtonViewBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };


    render() {
        const actions = [
            <FlatButton
                label="Cerrar"
                primary={true}
                onClick={this.handleClose}
            />
        ];
        const {title, synopsis, pages, editorial, author, language, gender} = this.props;
        return (
            <div>
                <FlatButton label="Ver libro" onClick={this.handleOpen}/>
                <Dialog
                    title="Información del libro"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <b>Título: </b>{title}<br/>
                    <b>Sinopsis: </b>{synopsis}<br/>
                    <b>Páginas: </b>{pages}<br/>
                    <b>Editorial: </b>{editorial}<br/>
                    <b>Autor: </b>{author}<br/>
                    <b>Lenguaje: </b>{language}<br/>
                    <b>Género: </b>{gender}<br/>
                </Dialog>
            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteBook, getListAllBooks}, dispatch);
}


function mapStateToProps({}, ownerProps) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonViewBook);
