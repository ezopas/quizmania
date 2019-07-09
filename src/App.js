import React, {Fragment, Component} from 'react';
import Question from "./components/Question";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Info from "./components/Info";
import Answer from "./components/Answer";
import Timer from "./components/Timer";
import Score from "./components/Score";
import IndexOfQuestion from "./components/IndexOfQuestion";



class App extends Component {
    constructor(props){
        super(props);
    }

    getInitialState = () => ({
        data: [],
        checked: [],
        currentQuestion: 0,
        finished: false,
        score: 0
    });

    state = () => ({
        data: [],
        checked: [],
        currentQuestion: 0,
        finished: false,
        score: 0
    });

    componentDidMount() {
            fetch('/questions.json').then((response) => {
                return response.json();
            }).then((data) => {
                this.setState({ data });
            });
    }

    render () {
        const { data, currentTicket } = this.state;
        const question = data && data.length > 0 ? data[currentTicket].question : '';
        return (
            <Fragment>
              <h1>Testas</h1>
              <div>
                <div>
                  <Question question={question} />
                </div>
                <div>
                  <Button name="Next question" handler={() => this.nextTicket} />
                </div>
              </div>
            </Fragment>
        );
    }
}

export default App;