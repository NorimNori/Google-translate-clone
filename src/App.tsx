import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './assets/hooks/useStore';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './assets/constants';
import { ArrowIcon } from './assets/components/Icons';
import { LanguageSelector } from './assets/components/LanguageSelector';

function App() {
    const { fromLanguage, toLanguage, interchangeLaguages, setFromLanguage, setToLanguage } = useStore()

    return (
        <>
            <Container fluid>

                <Row>
                    <Col>
                        <LanguageSelector onChange={setFromLanguage}
                            type='from'
                            value={fromLanguage}
                        />
                        {fromLanguage}
                    </Col>

                    <Col>
                        <Button variant='link' disabled= {fromLanguage === AUTO_LANGUAGE} onClick={interchangeLaguages}>
                            <ArrowIcon />
                        </Button>
                    </Col>

                    <Col>
                        <LanguageSelector 
                            type='to'
                            value={toLanguage}
                            onChange={setToLanguage}
                        />
                        {toLanguage}
                    </Col>
                </Row>
                <h1>Google translate</h1>
            </Container>
        </>
    )
}

export default App
