/** @jsx jsx */
import {css , jsx} from '@emotion/core';
import logo from "./logo192.png";
import {Link} from "react-router-dom";

const style = css`background:#5755d9; text-align:center;`;
const logocss = css`width:25px; length:25px;`;


function NavBar(){
    return(
        <div css={style}>
           <Link to='/'><img src={logo} css={logocss}></img></Link> 
        </div>


    )
}

export default NavBar;