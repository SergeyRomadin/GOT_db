import React from 'react';
import gotService from '../../../services/gotService';
import ItemDetails, {Field} from '../../itemDetails';

export default class BooksItem extends React.Component {
    gotService = new gotService();


    render() {
        return (
            <ItemDetails 
            itemId={this.props.bookId}
            updateBook> 
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='NumberOfPages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }

}
