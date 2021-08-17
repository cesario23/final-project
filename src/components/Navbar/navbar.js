import React, {useContext, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import {NavLink, Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'


const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1
    },
    menuButton:{
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

function Navbar() {

    const classes = useStyles();
    const{
        state:{user},
        dispatch,
    } = useContext()

    

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                        <Link to="/">Home</Link>
                    </Typography>

                    <NavLink activeStyle={{color:"red"}} exact to= "/login">
                        <Button color="inherit" style={{color: "white"}}>
                            Sign in
                        </Button>
                    </NavLink>

                    <NavLink activeStyle={{color:"red"}} exact to= "signup">
                        <Button color="inherit" style={{color: "white"}}>
                            Sign up
                        </Button>
                    </NavLink>
                </Toolbar>

            </AppBar>
       
        </div>
    )
}

export default Navbar;
