import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Auth from './Components/Auth'
import Wizard from './Components/Wizard'
import Wizard2 from './Components/Wizard2'
import Wizard3 from './Components/Wizard3'
import Wizard4 from './Components/Wizard4'
import Wizard5 from './Components/Wizard5'
import Dashboard from './Components/Dashboard'
// import step1 from './Components/Wizard'




export default(
    <Switch>
        <Route exact path= '/' component={Auth} />
        <Route exact path= '/dashboard' component={Dashboard} />
        <Route exact path= '/wizard/1' component={Wizard} />
        <Route exact path= '/wizard/2' component={Wizard2} />
        <Route exact path= '/wizard/3' component={Wizard3} />
        <Route exact path= '/wizard/4' component={Wizard4} />
        <Route exact path= '/wizard/5' component={Wizard5} /> 
    </Switch>

)