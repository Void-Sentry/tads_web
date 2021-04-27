import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import Bar from '../components/bar'
import Footer from '../components/footer'
import Form from '../components/form'

function Forms(){
    return(
        <>
            <Head>
                <title>Formulário - TADS</title>
                <meta name = 'description' content = 'site de ... sobre ...' />
                <meta name = 'author' content = 'Oséias' />
            </Head>
            <Bar/>
            <div fluid className = 'cover-container d-flex h-100 p-3 mx-auto flex-column' id = 'root'>
            
                <style>{'.root{ color: #fff; text-shadow: 0 0.05rem .1rem rgba(0, 0, 0, .5); box-shadow: inset 0 0 5rem rgba(0, 0, 0,) }'}</style>
                <Form>
                    A
                </Form>
            </div>
            <div className = 'text-center fixed-bottom'>
                <Footer />
            </div>
        </>
    )
}

export default Forms