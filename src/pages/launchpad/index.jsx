import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Import Pages
import LaunchpadHome from './LaunchpadHome'
import LaunchpadDetail from './LaunchpadDetail'

function LaunchpadPages() {
    return (
        <>
            <Switch>
                <Route path="/launchpad/:id" component={LaunchpadDetail}/>
                <Route path="/launchpad/my-portofolio"/>
                <Route path="/launchpad" component={LaunchpadHome} exact/>
            </Switch>
        </>
    )
}

export default LaunchpadPages
