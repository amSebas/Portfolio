import '../styles/home.css'
import CV1 from '../images/CV1.png'

export default function Home () {
    return(
        <div className='home'>
            <h1>Home</h1>
            <div className='box-1'>
                <div className='text-box'>
                    <h2>Hola!, Soy sebas</h2>
                    <h3>Desarrollador web front-end</h3>
                    <h3>Como desarrollador front-end me especializo en crear sitios web dinamicos y responsivos haciendo uso de herramientas como HTML5, CSS3, JavaScript,Figma, librerias como react.js,
                        node.js y conocimiento de metodologias agiles.
                    </h3>
                    <a className='btn' href='./AboutMe'>Mas acerca de mi</a>
                    <a className='btn' href='/'>Descargar cv</a>
                    <div className='social-media'>
                        <a href='/'><i className="fa-brands fa-linkedin"></i></a>
                        <a href='/'><i className="fa-brands fa-github"></i></a>
                        <a href='/'><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
                <div className='photo-presentation'>
                    <img src={CV1} alt="CV" />
                </div>
            </div>
        </div>  
    );
}