/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import './Css/about.css'
import git from './imagenes/github.png'
import mail from './imagenes/gmail.png'
import linkedin from './imagenes/linkedin.png'
import drag from './imagenes/draga.jpg'

export default function About(){ 
    
    return (
    
    <div class="container centered">
    <header class="perfil">
      <img src={drag} alt=""/>
      <div class="titleA">
        <h7 className='h4' >Lizhana Campos</h7>
        <h5 className='h5' >Student Full Stack Developer</h5>
        <p><strong> Henry</strong> </p>
        <a title="Codepen" class="link-icon" target="_blank" href="mailto:lizhanita@gmail.com">
          <i class="fab fa-codepen"> <img src={mail} alt="" width='20px'/>
           
          </i>
        </a>

        <a title="GitHub" class="link-icon" target="_blank" href="https://github.com/lizhana">
          <i class="fab fa-github-square"> <img src={git} alt="" width='20px'/></i>
        </a>

        <a title="Linkedin" class="link-icon" target="_blank" href="https://www.linkedin.com/in/lizhana-campos"> <img src={linkedin} alt="" width='20px' />
          <i class="fab fa-twitter-square"></i>
        </a>
      </div>
    </header>

    <main class="projetos">
      <div class="container-projetos">
        <h4>Videogames</h4>
        <p class="line-1 anim-typewriter">Is an individual project done for Henry's bootcamp </p>
        <p class="line-1 anim-typewriter">Some of its features and content</p>
        <ul>
          <li><a target="_blank">▤   Databases: Sequelize</a></li>
          <li><a target="_blank">↱   Routes: Express Js</a></li>
          <li><a target="_blank">⫘   Login</a></li>
          <li><a target="_blank">▶   Landing</a></li>
          <li><a  target="_blank">‿★   Home</a></li>
          <li><a target="_blank">⊹   Search</a></li>
          <li><a  target="_blank">⌁⌁   NavBar</a></li>
          <li><a target="_blank">✓    creation form</a></li>
          <li><a target="_blank">Page 404...and Oters components</a></li>
        </ul>
      </div>
    </main>
  </div>
  )
}