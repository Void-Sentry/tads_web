import 'bootstrap/dist/css/bootstrap.min.css'
import Bar from '../components/bar'
import Head from 'next/head'
import Footer from '../components/footer'
import { Container, Jumbotron } from 'react-bootstrap'

function Calendario(){
    return(
        <div>
            <Head>
                <title>Outros - TADS</title>
                <meta name = 'description' content = 'site de ... sobre ...' />
                <meta name = 'author' content = 'Oséias' />
            </Head>

            <Bar />
            <h1 className = 'display-4 text-center'>Calendário</h1>
            <Container className = 'col' id = 'ct'>
                            <style>{ '#ct{ width: 75rem; float: bottom; top: 4rem; }' }</style>
                            
                                
                            <Jumbotron className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">04.01.2021 - 11.01.2021</th>
                                    <th scope="col">18.01.2021 - 19.01.2021</th>
                                    <th scope="col">18.01.2021</th>
                                    <th scope="col">25.01.2021</th>
                                    <th scope="col">19.02.2021</th>
                                    <th scope="col">30.04.2021</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    
                                    <td>Matrícula para o período 2020.1</td>
                                    <td>Re-matrícula para o período 2020.1</td>
                                    <td>Início do período letivo 2020.1</td>
                                    <td>Início do período trancamento de turma 2020.1</td>
                                    <td>Término do período trancamento de turma 2020.1</td>
                                    <td>Término do período letivo 2020.1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Jumbotron>
                            
                            <Jumbotron className="table-responsive">
                            
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">04.01.2021 - 11.01.2021</th>
                                    <th scope="col">18.01.2021 - 19.01.2021</th>
                                    <th scope="col">18.01.2021</th>
                                    <th scope="col">25.01.2021</th>
                                    <th scope="col">19.02.2021</th>
                                    <th scope="col">30.04.2021</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    
                                    <td>Matrícula para o período 2020.2</td>
                                    <td>Re-matrícula para o período 2020.2</td>
                                    <td>Início do período letivo 2020.2</td>
                                    <td>Início do período trancamento de turma 2020.2</td>
                                    <td>Término do período trancamento de turma 2020.2</td>
                                    <td>Término do período letivo 2020.2</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        
                        </Jumbotron>
                            
                        </Container>
            <div className = 'text-center fixed-bottom'>
                <Footer/>
            </div>
        </div>
    )
}

export default Calendario