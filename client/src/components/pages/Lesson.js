import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Learning from '../Learning/Learning'

class Lesson extends Component {
    state = {
        courseName: "Example Lesson",
        lessonPic: ["https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1", "https://images.code.org/ac720d8ae4d6380fc72c8d6659910bcf-image-1446407286955.png"],
        lessonMaterial: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit ipsum, commodo id mauris et, ullamcorper dignissim urna. Nullam sit amet ligula sit amet mi vestibulum tristique. Nunc iaculis, ipsum eu scelerisque viverra, tortor lorem efficitur felis, quis porta mi nisi eget nunc. Sed accumsan semper diam id porttitor. Praesent finibus, sem at tincidunt mattis, libero arcu semper leo, vitae egestas enim enim ac purus. Maecenas egestas aliquet facilisis. In hac habitasse platea dictumst. Mauris sapien massa, sagittis ut hendrerit in, ornare quis justo. Suspendisse ac diam dui. Duis aliquet nec metus sed luctus. Nulla nec metus ac velit semper euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam id massa vulputate, gravida justo quis, condimentum lectus. Sed mollis eros velit, ut porttitor elit posuere sed. Proin tempor tortor vitae dui scelerisque, non blandit tellus mollis. Nulla et lacus et arcu imperdiet viverra eu eu purus. Proin ac diam leo. Sed purus quam, sollicitudin sit amet ipsum lobortis, varius tempor augue. Aliquam pharetra sem ac mi imperdiet convallis. Nullam vel ornare lorem. Sed ut condimentum mi, a volutpat sem. Quisque faucibus ipsum ut mi molestie cursus. Morbi mattis leo et justo vulputate scelerisque. Mauris semper, magna tristique interdum lacinia, dolor turpis egestas dui, ut tempus neque mi nec augue. Morbi justo turpis, consequat sit amet tortor eget, tincidunt tristique turpis. Sed risus erat, varius ut velit vitae, pharetra porta augue. Sed efficitur magna ut turpis faucibus commodo. Nulla quis dolor mauris. Aenean feugiat cursus magna, quis congue nisl tincidunt sed. Aenean feugiat rhoncus ex, tempor ullamcorper lacus scelerisque vitae. Morbi rhoncus sagittis quam non aliquam. Etiam consequat arcu sed nisi consectetur, et rhoncus ligula convallis. Pellentesque placerat est et luctus congue. Fusce maximus fermentum nisl vitae pretium. Suspendisse sollicitudin vel nisi non eleifend. Pellentesque risus lacus, ullamcorper sed mauris at, ultricies tempus lectus. Integer in vulputate mi, id placerat tortor. Donec ultricies eget enim eget feugiat. Phasellus pellentesque pellentesque orci, a vestibulum turpis tempus at. Sed imperdiet bibendum maximus. Fusce rutrum libero id justo rhoncus, at laoreet dui aliquet. Ut eros libero, varius a aliquam eget, mattis ut justo. Nam commodo, justo non lacinia sollicitudin, tortor turpis lacinia ante, ut tincidunt turpis risus quis arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, ligula sollicitudin blandit efficitur, dolor mi varius sem, quis tristique urna justo quis massa. Nullam feugiat diam eu lorem scelerisque aliquet. Nulla id dui augue. Phasellus eu ante in lorem sodales dignissim. Nulla facilisi. Nullam pharetra quam luctus orci interdum congue. Suspendisse faucibus libero metus, in scelerisque risus dignissim vel. Etiam tempor ipsum ut enim ultrices blandit. Phasellus accumsan ligula sed augue dictum finibus. Sed at sagittis lacus. Pellentesque finibus dictum consectetur. Duis mollis viverra auctor. Vestibulum at ante vel arcu fringilla facilisis vel ac risus. Pellentesque fermentum magna nulla, vel cursus dui cursus quis."],
        quizzes: [{
            question: "Test Question 1?",
            choice: ["a", "b", "c", "d"],
            correctAnswer: "c"
        },
        {
            question: "Test Question 2?",
            choice: ["1", "2", "3", "4"],
            correctAnswer: "1"
        }
        ]
    };

    render() {
        return (
            <div>
                <Navbar courseTitle={this.state.courseName}/>
                <Learning 
                courseName={this.state.courseName} 
                lessonPic={this.state.lessonPic[0]} 
                lessonMaterial={this.state.lessonMaterial[0]}
                quizQuestion={this.state.quizzes[0].question}
                choice0={this.state.quizzes[0].choice[0]}
                choice1={this.state.quizzes[0].choice[1]}
                choice2={this.state.quizzes[0].choice[2]}
                choice3={this.state.quizzes[0].choice[3]}
                >
                </Learning>
            </div>
        )
    }
}

export default Lesson;