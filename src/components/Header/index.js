import React, { Component } from 'react'
export default class index extends Component {
    render() {
        return (
            <div>
            <header>
        {/* Fixed navbar */}
        <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
          <a className='navbar-brand' href='/'>
            Home
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='/test'>
                  test <span className='sr-only'>(current)</span>
                </a>
              </li>
            </ul>
            <form className='form-inline mt-2 mt-md-0'>
              <input className='form-control mr-sm-2' type='text' placeholder='Search' aria-label='Search' />
              <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
      <br />
      <br />
            </div>
        )
    }
}
