import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import ActionEdit from 'material-ui/svg-icons/image/edit';
import ButtonDelete from '../buttonDelete/buttonDeleteComponent';
import IconButton from 'material-ui/IconButton';

const style = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: true,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: false,
    showCheckboxes: false,
    height: '100%',
};

class TableBooks extends Component {


    render() {
        const {books} = this.props;
        const data = books.get('books');
        return (
            <Table
                height={style.height}
                fixedHeader={style.fixedHeader}
                fixedFooter={style.fixedFooter}
                selectable={style.selectable}
                multiSelectable={style.multiSelectable}
            >
                <TableHeader
                    displaySelectAll={style.showCheckboxes}
                    adjustForCheckbox={style.showCheckboxes}
                    enableSelectAll={style.enableSelectAll}
                >
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Título">Título</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Autor">Autor</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Editorial">Editorial</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Género">Género</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Lenguaje">Lenguaje</TableHeaderColumn>
                        <TableHeaderColumn tooltip="# Páginas"># Páginas</TableHeaderColumn>
                        <TableHeaderColumn>Eliminar</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={style.showCheckboxes}
                    deselectOnClickaway={style.deselectOnClickaway}
                    showRowHover={style.showRowHover}
                    stripedRows={style.stripedRows}
                >
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <TableRowColumn>{index + 1}</TableRowColumn>
                            <TableRowColumn>{row.title}</TableRowColumn>
                            <TableRowColumn>{row.author}</TableRowColumn>
                            <TableRowColumn>{row.editorial}</TableRowColumn>
                            <TableRowColumn>{row.gender}</TableRowColumn>
                            <TableRowColumn>{row.language}</TableRowColumn>
                            <TableRowColumn>{row.pages}</TableRowColumn>
                            <TableRowColumn>
                                    <ButtonDelete title={row.title} id={row._id}/>
                            </TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter
                    adjustForCheckbox={style.showCheckboxes}
                >
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Título</TableHeaderColumn>
                        <TableHeaderColumn>Autor</TableHeaderColumn>
                        <TableHeaderColumn>Editorial</TableHeaderColumn>
                        <TableHeaderColumn>Género</TableHeaderColumn>
                        <TableHeaderColumn>Lenguaje</TableHeaderColumn>
                        <TableHeaderColumn># Páginas</TableHeaderColumn>
                        <TableHeaderColumn>Eliminar</TableHeaderColumn>
                    </TableRow>
                </TableFooter>
            </Table>);
    }

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}


function mapStateToProps({books}, ownerProps) {
    return {
        books
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableBooks);

