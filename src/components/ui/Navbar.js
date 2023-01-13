import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';

import {Online,Offline} from 'react-detect-offline'

export const Navbar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                { name }
            </span>
            
            <Online>
                <span className='text-success'>online</span>
            </Online>
            <Offline>
            <span className='text-danger'>offline - peticiones guardadas</span>
            </Offline>
            <button 
                className="btn btn-outline-danger"
                onClick={ handleLogout }
            >
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>

        </div>
    )
}
