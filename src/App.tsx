import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './assets/hooks/useStore';
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './assets/constants';
import { ArrowIcon } from './assets/components/Icons';
import { LanguageSelector } from './assets/components/LanguageSelector';
import { SectionType } from './types.d';

function App() {
    const { fromLanguage, toLanguage, interchangeLaguages, setFromLanguage, setToLanguage } = useStore()

    return (
        <>
            <Container fluid>
                <h2>Google translate</h2>

                <Row>
                    <Col>
                        <Stack gap={2}>
                            <LanguageSelector onChange={setFromLanguage}
                                type={SectionType.From}
                                value={fromLanguage}
                            />
                            <Form.Control
                                as='textarea'
                                placeholder='Introducir texto'
                                autoFocus
                                style={{ height:'150px'}}
                            />
                        </Stack>
                    </Col>

                    <Col xs='auto'>
                        <Button variant='link' disabled= {fromLanguage === AUTO_LANGUAGE} onClick={interchangeLaguages}>
                            <ArrowIcon />
                        </Button>
                    </Col>

                    <Col>
                        <Stack gap={2}>
                            <LanguageSelector 
                                type={SectionType.To}
                                value={toLanguage}
                                onChange={setToLanguage}
                            />
                            <Form.Control
                                as='textarea'
                                placeholder='Traduccion'
                                style={{ height:'150px'}}
                            />
                        </Stack>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default App
