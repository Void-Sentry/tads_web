import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import Bar from '../components/bar'
import Footer from '../components/footer'
import { Container, Jumbotron } from 'react-bootstrap'

function Docs_Outros(){
    return(
        <div>
            <Head>
                <title>Outros - TADS</title>
                <meta name = 'description' content = 'site de ... sobre ...' />
                <meta name = 'author' content = 'Oséias' />
            </Head>
            
            <Bar/>
            
                <h1 className = 'display-4 text-center'>Baixe alguns arquivos relevantes</h1>
                
            <Container className = 'col'>
                
                    
                        <Jumbotron>
                            <div>
                                <h2>Apresentação do Curso</h2>
                                <p><a className="btn btn-secondary" href="https://sigaa.ufrn.br/sigaa/verProducao?idProducao=6317924&key=a31c23b14d5d8950ce28d8cda7807d6c">Baixe PDF </a></p>
                            </div>
                            <div>
                                <h2>Estruturas Curriculares</h2>
                                <p><a className="btn btn-secondary" href="https://sigaa.ufrn.br/sigaa/verProducao?idProducao=6317915&key=300ba6bebacf53bae709c86d9662d6b9">Baixe PDF </a></p>
                            </div>
                            
                        </Jumbotron>
                        <Jumbotron>
                            
                            <div>
                                <h2>Modelo de TCC</h2>
                                <p><a className="btn btn-secondary" href="https://sigaa.ufrn.br/sigaa/verProducao?idProducao=7366824&key=357f7f588e16c4d39ffe23787710e6c2">Baixe DOC </a></p>
                            </div>
                            <div>
                                <h2>Orientações Sobre TCC</h2>
                                <p><a className="btn btn-secondary" href="https://sigaa.ufrn.br/sigaa/verProducao?idProducao=7365500&key=07fdfb60df3c137b305a22d9274833b2">Baixe PDF </a></p>
                            </div>
                        </Jumbotron>
                    
            </Container>
            <div className = 'text-center' id = 'rodape'>
            <style>{ '#rodape{ position: relative; bottom: 0; width: 100%; margin: auto auto; top: 4rem; }' }</style>
                <Footer />
            </div>
        </div>
    )
}

export default Docs_Outros