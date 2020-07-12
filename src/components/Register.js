import React from 'react';

function Register() {
  return (
    <section className='body-sign'>
      <div className='center-sign'>
        <a href='https://preview.oklerthemes.com/' className='logo float-left'>
          <img src='img/logo.png' height='54' alt='Porto Admin' />
        </a>

        <div className='panel card-sign'>
          <div className='card-title-sign mt-3 text-right'>
            <h2 className='title text-uppercase font-weight-bold m-0'>
              <i className='fas fa-user mr-1'></i> Sign Up
            </h2>
          </div>
          <div className='card-body'>
            <form>
              <div className='form-group mb-3'>
                <label>Name</label>
                <input name='name' type='text' className='form-control form-control-lg' />
              </div>

              <div className='form-group mb-3'>
                <label>E-mail Address</label>
                <input name='email' type='email' className='form-control form-control-lg' />
              </div>

              <div className='form-group mb-0'>
                <div className='row'>
                  <div className='col-sm-6 mb-3'>
                    <label>Password</label>
                    <input name='pwd' type='password' className='form-control form-control-lg' />
                  </div>
                  <div className='col-sm-6 mb-3'>
                    <label>Password Confirmation</label>
                    <input name='pwd_confirm' type='password' className='form-control form-control-lg' />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-8'>
                  <div className='checkbox-custom checkbox-default'>
                    <input id='AgreeTerms' name='agreeterms' type='checkbox' />
                    <label for='AgreeTerms'>
                      I agree with <a href='#!'>terms of use</a>
                    </label>
                  </div>
                </div>
                <div className='col-sm-4 text-right'>
                  <button type='submit' className='btn btn-primary mt-2'>
                    Sign Up
                  </button>
                </div>
              </div>

              <span className='mt-3 mb-3 line-thru text-center text-uppercase'>
                <span>or</span>
              </span>
              <p className='text-center'>
                Already have an account? <a href='pages-signin.html'>Sign In!</a>
              </p>
            </form>
          </div>
        </div>

        <p className='text-center text-muted mt-3 mb-3'>&copy; Copyright 2017. All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default Register;
