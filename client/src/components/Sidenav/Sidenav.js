import React, { Component } from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import LessonList from "../LessonList/LessonList";

const style = {

    one: {
        backgroundColor: "blue",
        height: "auto",
        paddingBottom: "100px",
        color: "white",
        fontSize: "1.75em",
        position: "absolute",
        top: "110px",
        marginBottom: "50px"
    },

}


class Sidenav extends Component {


render() {
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
                        <NavText>Home</NavText>
                    </NavItem>

                    <NavItem eventKey="completedLessons">
                        
                        <NavIcon><i className="far fa-check-square"></i></NavIcon>
                        <NavText>All lessons</NavText>
                        <NavItem eventKey="lesson1">
                            <NavText>
                            {this.props.lessons.map(lesson => (
                                        <LessonList
                                            lessonName={lesson.lessonMaterial}
                                            lessonNum={lesson.lessonNum}
                                            />))}
                        </NavText>
                        </NavItem>
                        {/* <NavItem eventKey="lesson2">
                        <NavText>
                            Lesson 2
                        </NavText>
                        </NavItem> */}

                    </NavItem>


                    
                </SideNav.Nav>
            </SideNav>
        </div>
    )

}
}
export default Sidenav;