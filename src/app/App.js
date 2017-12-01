import React, {Component} from 'react';
import '../style/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Root from '../components/root'
import Store from '../store/store';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Root store={Store}>
                </Root>
            </MuiThemeProvider>
        );
    }
}

export default App;
