import { useEffect, useState } from "react";
import "../../assets/login.css"
import { Link } from "react-router-dom";
import BackIcon from "../icons/BackIcon";
import { createUser, handleLogin } from "./login-service";
import { connect } from "http2";


const Login: React.FC = () => {
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);


  return (
    <>
      <form className="login-card" action=""
        onSubmit={(e) => {
          isCreating
            ? createUser(e, { nickname, password, email })
            : handleLogin(e, { nickname, password }).then((value) => (value ? setIsLoggedIn(true) : setIsLoggedIn(value)))
        }}
      >

        <p>Login</p>


        {isCreating &&
          <div className="login-field">
            {/* {validCredentials && password === '' && <p>Set a password</p>} */}
            <label htmlFor="email">Email</label><input type="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        }

        <div className="login-field">
          {/* {validCredentials && userName === '' && <p>Set a username</p>} */}
          <label htmlFor="Username">Username</label><input type="text" value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="login-field">
          {/* {validCredentials && password === '' && <p>Set a password</p>} */}
          <label htmlFor="Password">Password</label><input type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>



        <button className="login-button"
          onSubmit={
            (e) => {
              isCreating
                ? createUser(e, { nickname, password, email })
                : handleLogin(e, { nickname, password })
            }
          }
        >submit</button>

        <a onClick={(e) => {
          e.preventDefault()
          setIsCreating(!isCreating)
          console.log(isCreating)
        }}>
          {isCreating ? "create account" : "connect"}</a>

      </form >

      {isLoggedIn && <p>Logged in</p>}



      <Link to="/">
        <BackIcon />
      </Link>

    </>
  )
}

export default Login;