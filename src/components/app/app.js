import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../pages/characterPage/characterPage';
import gotService from '../../services/gotService';
import BooksPage from '../pages/booksPage/booksPage';
import BooksItem from '../pages/booksPage/booksItem';
import HousesPage from '../pages/housesPage/housesPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';


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
            <Router>
                <div className="app">
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

                    <Route path='/characters' component={CharacterPage} />
                    <Route path='/houses' component={HousesPage} />
                    <Route path='/books' exact component={BooksPage} />
                    <Route path='/books/:id' render={
                        ({match}) => {
                            const {id} = match.params;
                            
                            return <BooksItem bookId={id}/>
                        }
                        
                    } />
                </Container>
            </div>
            </Router>
        );
    }
};

