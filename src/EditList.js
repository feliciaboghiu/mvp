import React from 'react';
import { render } from '@testing-library/react';
import { Switch, Route, Link, NavLink} from "react-router-dom";

class EditList extends React.Component {

render() {
    let listJsx = (
        this.props.lists.map((l) => (
            <li key={l.title}>
                <div>
                    <h3>{l.title}</h3>
                </div>
                <div 
                    className={ this.state.isShown ? 'display' : 'hide'}
                    onMouseOver={(e, i) => this.handleClick(e, i)}>
                    <button onClick={()=>this.setEditedListId(l.id)}><Link to={'/additem/'+l.id}>ADD ITEM</Link></button>
                    {/*<button>Edit List Title</button>*/}
                    <button><Link to={'/editlist/'+l.id}>EDIT LIST</Link></button>
                    <button onClick={()=>this.handleListDelete(l.id)}>DELETE LIST</button>
                </div>
                
                <ul>
                    {l.name.map((n) => (
                        <div 
                            className={ this.state.isShown ? 'underlined' : 'none'}>
                                <li key={n}>
                                    <div contentEditable="true">
                                        {n}
                                    </div>
                                    {/*<button>Edit Item</button>*/}
                                    <button onClick={(e, n)=>this.findIx(e, n)} 
                                        className={ this.state.isShown ? 'display' : 'hide'}
                                    >DELETE ITEM                                        
                                    </button>
                                </li>
                        </div>))}
                    </ul>
                </li>))
                
    ) 

    return(
        <div>
            
        
        return (
            <div className="itemList">
                <h2>Item List</h2>
                <ul>
                    {listJsx}
                </ul>
            </div>
        )

        </div>
    )
    }

}

export default EditList;