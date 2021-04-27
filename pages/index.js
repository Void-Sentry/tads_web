import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import Bar from '../components/bar'
import Footer from '../components/footer'
import { Container } from 'react-bootstrap'

function Home(){
    return(
        <div>
            <Head>
                <title>Início - TADS</title>
                <meta name = 'description' content = 'site de ... sobre ...' />
                <meta name = 'author' content = 'Oséias' />
            </Head>
            <Bar/>
            <div fluid className = 'cover-container d-flex h-100 p-3 mx-auto flex-column' id = 'root'>
            
                <style>{'.root{ color: #fff; text-shadow: 0 0.05rem .1rem rgba(0, 0, 0, .5); box-shadow: inset 0 0 5rem rgba(0, 0, 0,) }'}</style>
                <Container className = 'text-center'>
                    <div>
                        <h1 className = 'display-4'>Apresentação</h1>
                        <p className = 'lead text-justify'>O Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) tem como objetivo a formação de profissionais capazes de compreender 
                            o processo de construção e reconstrução do conhecimento no domínio da análise e desenvolvimento de sistemas e, dessa forma, realizar atividades de 
                            concepção, especificação, projeto, implementação, avaliação, suporte e manutenção de sistemas computacionais, orientando sua ação na sociedade em 
                            geral e no mundo do trabalho em particular para a busca de soluções para o setor produtivo (notadamente o setor primário da economia) e para a melhoria 
                            da qualidade de vida das populações. Os profissionais formados atuarão na área de análise e desenvolvimento de sistemas, podendo exercer atividades no 
                            campo da análise de sistemas, engenharia de software, gerência de projetos e administração de bancos de dados.

                            Além da formação geral em Tecnologia em Análise e Desenvolvimento de Sistemas, o curso tem objetivo de promover a integração entre as ciências agrárias 
                            e a denominada Tecnologia da Informação (TI) com suas diversas subáreas, obtendo-se assim uma gama de benefícios e ampliação do espectro de formação 
                            profissional em nível superior, considerando que um curso desta natureza permitirá ao egresso propor soluções tecnológicas em software e/ou hardware 
                            para as ciências agrárias ou, usando uma nomenclatura mais específica e mercadológica, para a cadeia do agronegócio e da agricultura familiar, sendo, 
                            nesse sentido estratégico para o desenvolvimento regional e nacional. Tais objetivos baseiam-se na formação de Tecnólogos com capacidade técnico-científica 
                            e visão integral, ética e humanística, comprometidos com o bem estar da sociedade envolvida e com o desenvolvimento sustentável, exercendo todas as 
                            competências relacionadas à profissão.
                        </p>
                    </div>
                    <div>
                        <div class="row">
                            <div class="col-lg-4">
                                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                                <h2>Monografias</h2>
                                <p className = 'text-center'>Caracteríscas gerais a serem vistas aqui.</p>
                                <p><a class="btn btn-secondary" href="/monografias">Conheça &raquo;</a></p>
                            </div>
                            <div class="col-lg-4">
                                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                                <h2>Artigos</h2>
                                <p className = 'text-center'>Caracteríscas gerais a serem vistas aqui.</p>
                                <p><a class="btn btn-secondary" href="/artigos">Busque &raquo;</a></p>
                            </div>
                            <div class="col-lg-4">
                                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                                <h2>Memoriais</h2>
                                <p className = 'text-center'>Caracteríscas gerais a serem vistas aqui.</p>
                                <p><a class="btn btn-secondary" href="/memoriais">Explore &raquo;</a></p>
                            </div>
                            
                        </div>
                        
                    </div>
                    

                </Container>
                
            </div>
            <div className = 'text-center fixed-bottom'>
                <Footer />
            </div>
        </div>
    )
}

export default Home