import React from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock'



export default class CharacterPage extends React.Component {
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
        getData={this.gotService.getAllCharacters}
        renderItem ={(item) => `${item.name}`}/> )

        const charDetails = ( 
            <ItemDetails itemId={this.state.selectedItem}> 
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
            )

        return (
            <RowBlock left={itemList} right={charDetails} />
        )
    }
};