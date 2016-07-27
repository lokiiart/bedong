import React, {
  Component
} from 'react'
import Top from '../../components/Top'
import Bottom from '../../components/Bottom'
import {
  pink500
} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import style from './style.css'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: pink500,
  },
});

class Home extends Component {
  render() {
    const {
      children
    } = this.props
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Top />
          {children}
          <Bottom />
          <a href="http://pgt.zoosnet.net/LR/Chatpre.aspx?id=PGT57696928&lng=cn">
          <img className={style.customerService} src="/img/1.png" />
          </a>
        </div>
      </MuiThemeProvider>

    )
  }
}

export default Home
