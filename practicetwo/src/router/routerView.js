import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
function RouterView(props){
    let {routes}=props
    let routesAll = routes&&routes.filter(item=>!item.to)
    let redirectAll = routes&&routes.filter(item=>item.to)
    return <Switch>
        {
            routesAll&&routesAll.map((item,index)=>
            <Route key={index} path={item.path} render={(props)=>{
                return <item.component {...props} child={item.children}/>
            }}/>)
        }
        {
            redirectAll&&redirectAll.map((item,index)=>
            <Redirect key={index} from={item.from} to={item.to}/>)
        }
    </Switch>
}
export default RouterView