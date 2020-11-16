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
            <h2>Redes Sociais</h2>
            <a href='https://www.instagram.com/fluirti/' target='_blank' rel='noopener noreferrer'>Instagram</a>
            <a href='https://www.facebook.com/fluirti/' target='_blank' rel='noopener noreferrer'>Facebook</a>
            <a href='https://www.linkedin.com/company/fluir-soluções-em-ti/' target='_blank' rel='noopener noreferrer'>Linkedin</a>
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
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/fluirti/'
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/fluirti/'
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/company/fluir-soluções-em-ti/'
              rel='noopener noreferrer'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
