import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage'
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import gotService from '../../services/gotService';


export default class App extends React.Component {
    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false
    };

    componentDidCatch() {
        console.log();
        this.setState({
            error: true
        })
    }

    toggledRandomChar = () => {
        this.setState((state) => {
            return{
                showRandomChar: !state.showRandomChar
            }
        })
    }
    
    render(){

        const char = this.state.showRandomChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <>
            
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button onClick={this.toggledRandomChar}>Toggle Random Char</button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onItemSelected={this.onItemSelected} 
                            getData={this.gotService.getAllBooks}
                            renderItem ={(item) => `${item.name}`}/>
                        </Col>
                        <Col md='6'>
                            <ItemDetails itemId={this.state.selectedItem} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onItemSelected={this.onItemSelected} 
                            getData={this.gotService.getAllHouses}
                            renderItem ={(item) => `${item.name}`}/>
                        </Col>
                        <Col md='6'>
                            <ItemDetails itemId={this.state.selectedItem} />
                        </Col>
                    </Row>
                </Container>
            
            </>
        );
    }
};

