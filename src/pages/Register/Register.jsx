import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div>
        <body>
          <header>
          <div class="container-header">
            <div class="header-container container-logo">
            <img src="../img/oneL2.png" alt="logo" class="img-logo"></img>
            </div>
            <div class="header-container container-searchbar">
              <form action= "" method="post">
                <div class="input-searchbar">
                  <input type="search" class="input-addon input-search" id="search" name="search" placeholder="Search" autoComplete="off" required/>
                </div>
                <button type="submit" class="submit-searchbar">
                  <i class="material-icons">search</i>
                </button>
              </form>
            </div>
            <div class="header-container container-access">
              <button class="access-button" onClick="location='#'">Log in</button>
            </div>
          </div>
          </header>
          <div id="container-register">
            <div id="title">
              <i class="material-icons lock"></i> Register
            </div>
            <form>
              <div class="input">
                <div class="input-addon">
                  <i class="material-icons">email</i>
                </div>
                <input id="email" placeholder="Email" type="email" required class="validate" autoComplete="off"/>
              </div>
              <div class="clearfix"></div>
              <div class="input">
                <div class="input-addon">
                  <i class ="material-icons">face</i>
                </div>
              </div>
            </form>
          </div>
        </body>
    </div>
  );
};

export default Register;
