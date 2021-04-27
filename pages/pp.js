import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import Bar from '../components/bar'
import Footer from '../components/footer'
import { Jumbotron } from 'react-bootstrap'

function Pp(){

    

    return(
        <div>
            <Head>
                <title>Projeto Pedagógico - TADS</title>
                <meta name = 'description' content = 'site de ... sobre ...' />
                <meta name = 'author' content = 'Oséias' />
                
            </Head>
            <Bar/>
            <div fluid className = 'cover-container d-flex h-100 p-3 mx-auto flex-column' id = 'root'>
                <style>{'.root{ color: #fff; text-shadow: 0 0.05rem .1rem rgba(0, 0, 0, .5); box-shadow: inset 0 0 5rem rgba(0, 0, 0,) }'}</style>
                <div className = 'text-center'>
                        <h1 className = 'display-4'>Projeto Pedagógico do Curso</h1>
                        
                </div>
                <Jumbotron className = 'text-center' id = 'pp'>
                    <style>{ '#pp{ background-color: #fff; }' }</style>
                    
                    <div className = 'justify-content-center'>
                        <div class="row">
                            <div class="col-lg-4 fixed-center">
                                <h2>Perfil Profissional</h2>
                                <p className = 'text-justify'>
                                    <ul id = 'show'>
                                        <li> Ser atento ao impacto das Tecnologias da Informação e Comunicação no atendimento e antecipação estratégica das necessidades da sociedade e das organizações </li>

                                        <li> Ser criativo, crítico e sistêmico na análise, compreensão e resolução de problemas da área de análise e desenvolvimento de sistemas computacionais </li>

                                        <li> Ser empreendedor na geração e identificação de oportunidades de negócios na área de análise e desenvolvimento de sistemas computacionais </li>

                                        <li> Ser ético e responsável perante as questões sociais, profissionais, ambientais, legais, políticas, humanísticas e tecnológicas </li>

                                        <li> Ser comprometido com o desenvolvimento contínuo de conhecimentos, competências e habilidades, e com a evolução da tecnologia, da sociedade e do mundo do trabalho </li>

                                        <li> Ser colaborativo na atuação em equipes multidisciplinares </li>
                                    </ul>
                                </p>
                               
                            </div>
                            <div class="col-lg-4">

                                <h2>Competências e Habilidades</h2>
                                <p className = 'text-justify'>
                                    <ul id = 'show'>
                                       <li> Interpretar e elaborar documentos, gráficos, tabelas e diagramas </li>

                                       <li> Analisar, projetar, documentar, implementar, testar, implantar e manter sistemas computacionais </li>

                                        <li> Gerenciar projetos de software </li>

                                        <li> Identificar, analisar e modelar processos de negócio, possibilitando ações empreendedoras </li>

                                        <li> Definir, modelar, implementar, adequar e melhorar processos de desenvolvimento de software </li>

                                        <li> Gerenciar configurações do projeto de software </li>

                                        <li> Promover a qualidade do processo de desenvolvimento e do produto de software; </li>

                                        <li> Elaborar e manter a documentação pertinente ao processo de software </li>

                                        <li> Avaliar, selecionar e utilizar ferramentas, metodologias e tecnologias adequadas ao problema e ao contexto para a produção de sistemas computacionais; </li>

                                        <li> Desenvolver programas de computador empregando linguagens de programação e raciocínio lógico </li>

                                        <li> Projetar o armazenamento e o tratamento dos dados, e realizar sua implementação </li>

                                        <li> Especificar e gerenciar requisitos de software e o projeto de interfaces </li>
                                        
                                    </ul>
                                </p>
                               
                            </div>
                            <div class="col-lg-4">
                                <h2>Avaliação do Curso</h2>
                                <p className = 'text-justify'>
                                
                                    <ul id = 'show'>
                                        <li> Avaliações in loco do INEP/MEC; </li>
                                        <li> Relatórios de ENADE; </li>
                                        <li> Autoavaliações coordenadas pela Assessoria Acadêmica de Graduação da EAJ </li>
                                        <li> Diálogo junto aos docentes (incluindo os orientadores acadêmicos) e discentes </li>
                                        <li> Relatórios das avaliações docentes pelos discentes </li>
                                        <li> Relatórios das avaliações da infraestrutura pelos discentes </li>                                    
                                    </ul>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
            <div className = 'text-center' id = 'rodape'>
            <style>{ '#rodape{ position: relative; bottom: 0; width: 100%; margin: auto auto; top: 4rem; }' }</style>
                <Footer />
            </div>
        </div>
    )
}

export default Pp