import React, {Component} from 'react'
import {hashHistory, Link} from 'react-router'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {fullWhite} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import style from './style.css'

class Top extends Component {
  handleIndex(){
    hashHistory.push('/')
  }

  handleContact(){
    hashHistory.push('/contact')
  }

  handleJobs(){
    hashHistory.push('/jobs')
  }

  handleAbout(){
    hashHistory.push('/about')
  }

  handleService(){
    hashHistory.push('/service')
  }

  handleGirlService(){
    hashHistory.push('/girl-service')
  }

  render() {
    let header_class=style.header +" clearfix"
    return (
      <div className={header_class}>
        <Link to="/">
          <img src="/img/logo.png" />
        </Link>
            <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon color={fullWhite} /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            className={style.menu}
            >
              <MenuItem primaryText="首页" onTouchTap={this.handleIndex} />
              <MenuItem primaryText="联系我们" onTouchTap={this.handleContact} />
              <MenuItem primaryText="工作招聘" onTouchTap={this.handleJobs} />
              <MenuItem primaryText="关于我们" onTouchTap={this.handleAbout} />
              <MenuItem primaryText="售后服务" onTouchTap={this.handleService} />
              <MenuItem primaryText="特色服务" onTouchTap={this.handleGirlService} />
          </IconMenu>
      </div>
    )
  }
}

export default Top
