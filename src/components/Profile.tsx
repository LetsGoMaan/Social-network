import React from "react";
import classes from "./Profile.module.css";


export const Profile = () => {
    return (
        <>
            <div className={classes.content}>
                <div>
                    <img src="https://i.ytimg.com/vi/ZXsQAXx_ao0/maxresdefault.jpg" alt=""/>
                </div>
                <div>
                    ava + descr
                </div>
                <div>
                    My posts
                    <div>
                        New posts
                    </div>
                    <div className={classes.posts}>
                        <div className={classes.post}>
                            Post 1
                        </div>
                        <div className={classes.post}>
                            Post 2
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

