import React, {Component} from 'react';
import './itemDetails.css';
import gotService from '../../services/gotService';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}


export default class ItemDetails extends Component {


    gotService = new gotService();

    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }

    updateItem() {
        if (this.props.updateChar) {
            this.updateChar();
        } else {
            if (this.props.updateBook) {
                this.updateBook();
            } else {
                if (this.props.updateHouse) {
                    this.updateHouse();
                }
            }
        }
        
    }

    updateChar() {
        const {itemId} = this.props;
        if (!itemId){
            return;
        }

        this.gotService.getCharacter(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    updateBook() {
        const {itemId} = this.props;
        if (!itemId){
            return;
        }

        this.gotService.getBook(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    updateHouse() {
        const {itemId} = this.props;
        if (!itemId){
            return;
        }

        this.gotService.getHouse(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    render() {

        if (!this.state.item) {
            return <span className="select-error">Please select character</span>
        }

        const {item} = this.state;
        const {name} = item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        } )
                    }
                </ul>
            </div>
        );
    }
}