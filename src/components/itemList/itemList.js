import React, {Component} from 'react';
import Spinner from '../spinner/spinner';
import './itemList.css';
import { v4 as uuidv4 } from 'uuid';


export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;
        
        getData()
            .then( (itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    


    renderItems(arr) {
        
        return arr.map((item, i) => {
            const label = this.props.renderItem(item);
            const key = uuidv4();
            console.log(key);
            return (

                <li 
                    key={key}
                    className="list-group-item"
                    // onClick={() => this.props.onItemSelected(41 + i)}
                    onClick={() => this.props.onItemSelected(i+1)}
                    >
                    {label}
                </li>
            )
        })
    }

    render() {
        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}