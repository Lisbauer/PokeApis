import React from 'react'
import pokebola from '../../imagenes/pokebola.png'
import './Navbar.css'

function Navbar() {
    return(
        <nav>

            <div className='poke-div'>
               <a href='/'> <img className='pokebola' src={pokebola}></img></a>
            </div>

            <div className='search-div'>
                <button>Search</button>

                <form>
                    <input></input>
                </form>
            </div>

        </nav>
    )
    
}

export default Navbar