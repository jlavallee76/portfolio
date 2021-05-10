import React from 'react'
import "./topbar.scss"
import {Phone, Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar" id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Josh Lavallee.</a>
                    <div className="itemContainer">
                        <Phone className="icon"/>
                        <span>(204) 297-2126</span>
                    </div>

                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>joshlavallee@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    This is right
                </div>
            </div>
        </div>
    )
}
