import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
        <div className="container">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" /> 

                <div className="signup">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">
                            Registrate
                        </label>
                        <input type="text" name="txt" placeholder="User name" required="" />
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input
                            type="password"
                            name="pswd"
                            placeholder="Password"
                            required=""
                        />
                        <button>Registrate</button>
                    </form>
                </div>

                <div className="login">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">
                            Ingresar
                        </label>
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input
                          type="password"
                          name="pswd"
                          placeholder="Password"
                          required=""
                        />
                        <Link to="/Producto">
                            <button>Iniciar Sesion</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
