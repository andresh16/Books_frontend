import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {deleteBook} from '../adminBooks/actions';
import {getListAllBooks} from '../home/actions';
import _ from 'lodash';

class ButtonDelete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDeleteBook = this.handleDeleteBook.bind(this);
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleDeleteBook() {
        const {deleteBook, getListAllBooks} = this.props;
        deleteBook(this.props.id).then((data) => {
            if (_.get(data, 'payload.status') === 201) {
                getListAllBooks();
                this.handleClose();
            }else{
                console.error("No fue posible eliminar el libro:",this.props.title," con id: ",this.props.id);
            }
        });
    }


    render() {
        const actions = [
            <FlatButton
                label="No"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Si"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleDeleteBook}
            />
        ];
        return (
            <div>
                <IconButton onClick={this.handleOpen}>
                    <ActionDelete/>
                </IconButton>
                <Dialog
                    title="Eliminar libro"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    ¿Esta seguro que desea eliminar el libro: {this.props.title}?
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDelete);
