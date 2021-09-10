import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About'
import Home from '../pages/home/Home'
import Logout from '../pages/logout/Logout'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>

            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/about"  component={About} />
                <Route path="/logout"  component={Logout} />

            </Switch>

        </BrowserRouter>
    )
}

export default AppRouter
