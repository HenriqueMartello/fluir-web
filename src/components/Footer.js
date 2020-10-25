import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Inscreva-se para receber nossos e-mails promocionais!
        </p>
        <p className='footer-subscription-text'>
          Você pode se desinscrever a qualquer momemto!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu e-mail'
            />
            <Button buttonStyle='btn--outline'>Inscreva-se</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre Nós</h2>
            <Link to='/sign-up'>Funcionamento</Link>
            <Link to='/'>Clientes</Link>
            <Link to='/'>Colaboradores</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contato</h2>
            <Link to='/'>Contato</Link>
            <Link to='/'>Suporte</Link>
            <Link to='/'>E-mail</Link>
            <Link to='/'>Nossa sala?</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Algo?</h2>
            <Link to='/'>Algo?</Link>
            <Link to='/'>Algo?</Link>
            <Link to='/'>Algo?</Link>
            <Link to='/'>Algo?</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Redes Sociais</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img alt='Fluir' src='imgs/logo-fluir.png' />
            </Link>
          </div>
          <small class='website-rights'>Érik Soluções © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
