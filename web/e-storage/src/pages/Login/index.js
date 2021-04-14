import React from "react";
import "./styles.css";

export default function Login() {
    return(
        <div className="login-container">
            <form>
                <h1>E-Storage</h1>
                {/* <div className="login-input">
                    <p>Usuário </p>
                    <input
                    type="text"
                    ></input>
                </div>
                <div className="login-input">
                    <p>Senha </p>
                    <input
                    type="password"
                    ></input>
                </div> */}
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
                <button className="button">Login</button>
            </form>
        </div>
    );
}
