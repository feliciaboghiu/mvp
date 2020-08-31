import React from 'react';


class ItemList extends React.Component {
    
    render() {
        {/*let titleJsx = this.props.items.map((t) => <li key={t.title}>{t.title}<button onClick={(e) => this.props.changeView(e)}>Add Item</button><button>Edit List Title</button><button>Delete List</button></li>)
        let nameJsx = this.props.items.map((i) => <li key={i.name}>{i.name}<button>Edit Item</button><button>Delete Item</button></li>)
    */}

        return (
            <div className="itemList">
                <h1>Item List</h1>
            {/*    <ul>
                    <h2>{titleJsx[0]}</h2>
                    <ul>
                        {nameJsx[0]}
                    </ul>
                </ul>
                <ul>
                    <h2>{titleJsx[1]}</h2>
                    <ul>
                        {nameJsx[1]}
                    </ul>
            </ul>*/}
            </div>
        )
    }
}

export default ItemList;