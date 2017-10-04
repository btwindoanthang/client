import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import TodoLists from '../components/TodoLists';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux'
import { connect, } from 'react-redux';
import * as TodoActions from '../actions/TodoAction';
import HeaderTodo from '../components/HeaderTodo';
import {detailTodo} from '../actions/action';
import axios from 'axios';
class Todos extends Component {

    constructor(props) {
        super(props);

    }
    
    componentWillMount(){
        axios({
            method:'get',
            url:'http://localhost:8000/api/v1/todos',
          })
            .then(function(response) {
            console.log(response);
          });
        this.props.dispatch(detailTodo(123));
    }

    handleSave() {
        console.log('thag');
        TodoActions.addTodo("thang test");
    }
    render() {
        return (
            <div style={styles.container}>
                <Paper style={styles.paper}>
                    <HeaderTodo />
                    <TodoLists todos={this.props.todos} />
                </Paper>
                <Paper style={styles.paper}>
                    {this.props.detail}
                </Paper>

            </div>
        );
    }
}
const style = {
    margin: 12,
};

const styles = {
    paper: {
        flex: 1,
        minHeight: '100px',
        margin: '20px 10px 0 10px',
        padding: '10px',
        height: 'calc(100vh - 90px)',
        overflow:'scroll'
    },
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    },
    item: {
        textAlign: "left",
    }

};



function mapStatetoProps(state) {
    console.log(state);
    return {
        todos: state.todos,
        detail:state.appData.detail,
    };
}

export default connect(mapStatetoProps)(Todos);
