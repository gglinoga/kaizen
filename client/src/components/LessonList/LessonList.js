import React, { Component } from "react";

class LessonList extends Component {
  

render() {
    return(
    <div>
        <p>Lesson {this.props.lessonNum}:    {this.props.lessonName}</p>
    </div>
    )
}

}

export default LessonList;