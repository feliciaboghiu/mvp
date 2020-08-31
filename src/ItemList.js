import React from 'react';


class ItemList extends React.Component {
    
    render() {
        let listJsx = (
            this.props.items.map((l) =>
                <li key={l.title}>
                <h2>{l.title}</h2>
                <button>Edit List Title</button>
                <button>Delete List</button>
                <ul>
                    {this.props.items.map((n) => 
                    <li key={n.name}>{n.name}
                        <button>Edit Item</button>
                        <button>Delete Item</button>
                    </li>)}
                </ul>
            </li>))

        return (
            <div className="itemList">
                <h2>Item List</h2>
                <ul>
                    {listJsx}
                </ul>
            </div>
        )
    }
}

export default ItemList;