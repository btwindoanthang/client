import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import { connect, } from 'react-redux';
import { completeTodo } from '../actions/TodoAction'
import {detailTodo} from '../actions/action'

class TodoLists extends Component {
    
    insideAvatarFunction= (id,e)=> {
        e.stopPropagation();
        this.props.dispatch(completeTodo(id));
        
    }

    handleOpen = (id,e) => {
        this.props.dispatch(detailTodo(id));
    };
    createListItem(todos){
        return todos.map((todo, i) => {
            return (
                <ListItem
                key={todo.id}
                primaryTogglesNestedList={true}
                onClick={(evt)=>this.handleOpen(todo.id)}
                style={styles.item}
                leftCheckbox={<Checkbox
                    checked={todo.completed}
                    label=""
                    //style={styles.checkbox}
                    onClick={(evt) => this.insideAvatarFunction(todo.id, evt)}
                />}
                primaryText={todo.name}
                rightIconButton={rightIconMenu}
                secondaryText={
                    <p>
                        <span style={{ color: darkBlack }}>{todo.des}</span>
    </p>
                }
                secondaryTextLines={2}
            />
            
            
            );
        })
    }
    
    render() {
        const { todos } = this.props;
        return (
            <div>
                <List>
                    {this.createListItem(todos)}
                    
                </List>
            </div>
        );
    }
}

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);


const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

const styles = {

    item: {
        textAlign: "left",
    }

};


export default connect()(TodoLists);

