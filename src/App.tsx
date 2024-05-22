import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './assets/hooks/useStore';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './assets/constants';
import { ArrowIcon } from './assets/components/Icons';
import { LanguageSelector } from './assets/components/LanguageSelector';
import { SectionType } from './types.d';
import { TextArea } from './assets/components/TextArea';

function App() {
    const { fromLanguage, toLanguage, interchangeLaguages, setFromLanguage, setToLanguage, fromText, result, setFromText, setResult, loading } = useStore()

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
                            <TextArea
                                type={SectionType.From}
                                value={fromText}
                                onChange={setFromText}
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
                            <TextArea
                                type={SectionType.To}
                                value={result}
                                onChange={setResult}
                                loading={loading}
                            />
                        </Stack>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default App
