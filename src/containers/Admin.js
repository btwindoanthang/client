import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {
  BrowserRouter as Router,
  Route,
  Link, Switch, withRouter
} from 'react-router-dom';

import Todos from './Todos';
import Users from './Users';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  _toggle() {
    //e.preventDefault();
    //this.refs.leftNav.toggle();
    this.setState({ open: !this.state.open });
    console.log(this.state.open);
  }
  render() {
    return (
      <div>
        <AppBar
          title="A Team"
          onLeftIconButtonTouchTap={this._toggle.bind(this)}
          style={{ position: 'fixed', left: this.state.open ? 257 : 0, top: 0 }}
        />
        <Drawer open={this.state.open}
          docked={true}
        //containerStyle={{ height: 'calc(100% - 64px)', top: 64 }}
        >
          <MenuItem href="/admin/users">Users</MenuItem>
          <MenuItem href="/admin/todos">Todos</MenuItem>
        </Drawer>
        <div style={{ marginTop: '60px', marginLeft: this.state.open ? '257px' : '0' }}>
          <Switch >
            <Route path="/admin/users" component={Users} />
            <Route path="/admin/todos" component={Todos} />
          </Switch>
        </div>
      </div>
    );
  }
}

const style = {
  AppBar: {
    marginLeft: '326px'
  }
}

export default Admin;
