import React from "react"
import loginIcon from "../images/icons8-test-account-100.png"
import UIimage from "../images/Password reset.svg"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="login container mt-5">
      <div className="row">
        <div className="col col-lg-4 col-md-6 col-sm-12" style={{ margin: "150px 0px" }}>
          <img className="icon-image mx-auto" src={loginIcon} alt="login icon"></img>
          <form>
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block">
              Login
            </button>
            <br />
            <div className="text-left mt-3">
              <Link to="#">
                <small className="reset">Password Reset</small>||
              </Link>
              <Link to="#">
                <small className="reset col-ml-2">Quick Recover</small>
              </Link>
            </div>
          </form>
        </div>
        <div className="col col-lg-8 col-md-6 col-sm-12">
          <img className="img-fluid" style={{ maxWidth: "100%" }} src={UIimage} alt="UIimage"></img>
        </div>
      </div>
    </div>
  )
}

export default Login
