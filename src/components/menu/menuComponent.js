import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {closeMenu, toggleMenu} from './actions';
import AppBar from 'material-ui/AppBar';
import {indigo500} from 'material-ui/styles/colors';
import {Link} from 'react-router-dom';
import {uniqueId} from 'lodash';

class Menu extends Component {

    constructor(props) {
        super(props);
        this._handleCloseMenu = this._handleCloseMenu.bind(this);
        this._handleToggleMenu = this._handleToggleMenu.bind(this);
        this._getItemMenu = this._getItemMenu.bind(this);
    }

    _handleCloseMenu() {
        this.props.closeMenu();
    }

    _handleToggleMenu() {
        this.props.toggleMenu();
    }


    _getItemMenu(item, idx) {
        return <Link key={uniqueId('Link_')+idx} style={{textDecoration: 'none'}} to={item.url}>
            <MenuItem key={uniqueId('Menu_')+idx} onClick={this._handleCloseMenu}>{item.title}</MenuItem>
        </Link>
    };



    render() {
        const isOpen = this.props.menu.get('isOpen');
        const menuOptions = this.props.menu.get('menuOptions');
        const title = this.props.menu.get('title');
        return (
            <div>
                <AppBar
                    style={{width: '100%', background: indigo500}}
                    showMenuIconButton={true}
                    onLeftIconButtonTouchTap={this._handleToggleMenu}
                    title={title}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Drawer
                    docked={false}
                    width={300}
                    open={isOpen}
                    onRequestChange={this._handleToggleMenu}
                >
                    {menuOptions.map(this._getItemMenu)}
                </Drawer>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeMenu,
        toggleMenu
    }, dispatch);
}


function mapStateToProps({menu}, ownerProps) {
    return {
        menu
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);