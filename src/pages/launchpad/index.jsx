import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Import Pages
import LaunchpadHome from './LaunchpadHome'
import LaunchpadDetail from './LaunchpadDetail'
import LaunchpadPorto from './LaunchpadPorto'
import LaunchpadPortoDetail from './LaunchpadPortoDetail'
import LaunchpadSub from './Projectsubmission'

function LaunchpadPages() {
    return (
        <>
            <Switch>
                <Route path="/launchpad" component={LaunchpadHome} exact/>
                <Route path="/launchpad/project-submission" component={LaunchpadSub} exact/>
                <Route path="/launchpad/my-portofolio" component={LaunchpadPorto} exact/>
                <Route path="/launchpad/my-portofolio/:idCoin" component={LaunchpadPortoDetail} exact/>
                <Route path="/launchpad/:id" component={LaunchpadDetail}/>
            </Switch>
        </>
    )
}

export default LaunchpadPages
