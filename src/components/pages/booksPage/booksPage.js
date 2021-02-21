import React from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/rowBlock'



export default class BooksPage extends React.Component {
    gotService = new gotService();



    state = {
        selectedItem: null,
        error: false
    };
    
    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }   
    
    render (){

        const itemList = ( <ItemList 
        onItemSelected={this.onItemSelected} 
        getData={this.gotService.getAllBooks}
        renderItem ={(item) => `${item.name}`}/> )

        const bookDetails = ( 
            <ItemDetails 
            itemId={this.state.selectedItem}
            updateBook> 
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='Number Of Pages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
            )

        return (
            <RowBlock left={itemList} right={bookDetails} />
        )
    }
};