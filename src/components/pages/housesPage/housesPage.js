import React from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/rowBlock'



export default class HousesPage extends React.Component {
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
        getData={this.gotService.getAllHouses}
        renderItem ={(item) => `${item.name}`}/> )

        const bookDetails = ( 
            <ItemDetails 
            itemId={this.state.selectedItem}
            updateHouse> 
                <Field field='name' label='Name'/>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='ancestralWeapons' label='AncestralWeapons'/>
            </ItemDetails>
            )

        return (
            <RowBlock left={itemList} right={bookDetails} />
        )
    }
};