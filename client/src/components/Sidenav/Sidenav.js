import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const style = {

    one: {
        backgroundColor: "blue",
        height: "40vh",
        paddingBottom: "100px",
        color: "white",
        fontSize: "1.75em",
        position: "absolute",
        top: "110px",
        marginBotom: "50px"
    },

}



function Sidenav2() {
    return (
        <div className="container">
            <SideNav style={style.one}
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <a href="/"><i className="fa fa-fw fa-home" /></a>
                        </NavIcon>
                        <NavText>
                            Home
            </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fas fa-spinner"></i>
                        </NavIcon>
                        <NavText>
                            In Progress
            </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Lesson 3
                </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Lesson 4
                </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="far fa-check-square"></i>                        </NavIcon>
                        <NavText>
                            Completed
            </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Lesson 1
                </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Lesson 2
                </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </div>
    )
}

export default Sidenav2;