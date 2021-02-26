import React from 'react';
import ItemList from '../../itemList';
import gotService from '../../../services/gotService';
import {withRouter} from 'react-router-dom';


class BooksPage extends React.Component {
    gotService = new gotService();



    state = {
        error: false
    };
    

    render (){

        return (
            <ItemList 
        onItemSelected={(itemId) => {
            this.props.history.push(`${itemId}`)
        }} 
        getData={this.gotService.getAllBooks}
        renderItem ={(item) => `${item.name}`}/>
        )
    }
};

export default withRouter(BooksPage);