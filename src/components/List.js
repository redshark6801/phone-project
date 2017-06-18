import React from 'react';
import Item from './Item';
import './List.css';

class List extends React.Component {
    
    render(){
        
        return (
            <div className="row">
                <div className="title">
                    <input type="text" placeholder="To Do?"/>
                </div>
                <Item/>
            </div>
        )
    }
}

export default List;