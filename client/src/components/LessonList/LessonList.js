import React, { Component } from "react";

class LessonList extends Component {
    state = {
        lessonName: "",
        lessonNum: ""
    }

render() {
    return(
    <div>
        <p>Lesson {this.props.lessonNum}:    {this.props.lessonName}</p>
    </div>
    )
}

}

export default LessonList;