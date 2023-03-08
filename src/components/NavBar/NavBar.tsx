import React from "react";
import classes from "./NavBar.module.css";
const NavBar = () => {
    return (
        <>
            <nav className={classes.nav}>
                <div className={classes.item}><a href="src/components">Profile</a></div>
                <div className={`${classes.item} ${classes.active}`}><a href="src/components">Messages</a></div>
                <div className={classes.item}><a href="src/components">News</a></div>
                <div className={classes.item}><a href="src/components">Music</a></div>
                <div className={classes.item}><a href="src/components">Settings</a></div>
            </nav>
        </>
    );
};

export default NavBar;