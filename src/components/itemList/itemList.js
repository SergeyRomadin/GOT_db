import React, {useState, useEffect} from 'react';
import Spinner from '../spinner/spinner';
import './itemList.css';
import { v4 as uuidv4 } from 'uuid';


function ItemList({getData, onItemSelected, renderItem}) {
    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
            .then( (data) => {
                updateList(data)
            })        
    }, [])

    function renderItems(arr) {
        
        return arr.map((item, i) => {
            const label = renderItem(item);
            const key = uuidv4();
            return (

                <li 
                    key={key}
                    className="list-group-item"
                    onClick={() => onItemSelected(i+1)}
                    >
                    {label}
                </li>
            )
        })
    }

    if (!itemList) {
        return <Spinner/>
    }

    const items = renderItems(itemList);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

export default ItemList;