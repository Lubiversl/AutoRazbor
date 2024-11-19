import React, { Component } from 'react'
import Item from "./Item"

export class Items extends Component {
    render() {
        return (
            <main>
                <h3 style={{ color: 'White' }}>Not broken cars, only fresh!</h3>
                {this.props.items.map(el => (
                    <Item key={el.id} item={el} onAdd={this.props.onAdd} />
                ))}
            </main>
        );
    }
}


export default Items
