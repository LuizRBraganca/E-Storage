import React from "react";
import {Link, useHistory} from 'react-router-dom';
import "./styles.css";


export default function Login() {
    return(
        <div className="login-container">
            <form>
                <h1>E-Storage</h1>
                <div className="login-input">
                   <section>
                       <p>Usuario</p>
                       <p>Senha</p>
                   </section>
                   <section>
                        <input
                            type="text"
                        ></input>
                        <input
                        type="password"
                        ></input>
                   </section>
                </div>
                <Link className="button" to='/menu'>Login</Link>
                {/* <button className="button">Login</button> */}
            </form>
        </div>
    );
}
