import React, {FC} from 'react';
import {Route, Switch} from "react-router-dom";
import {NavBar} from "../../components/NavBar/NavBar";
import {Registration} from "../Registration/Registration";
import {Login} from "../Login/Login";
import {MailSentScreen} from "../MailSentScreen";
import {Footer} from "../../components/Footer/Footer";


const App: FC = () => {
  return (
      <>
        <NavBar/>
        <Switch>
            <Route exact path="/register" component={Registration}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register/mail-sent" component={MailSentScreen}/>
        </Switch>
        <Footer/>
      </>
  );
}

export default App;
