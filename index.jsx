class MyTimer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()}
        this.timer = null
    }

    // montage du component
    componentDidMount() {
        this.timer = window.setInterval(() => {
            this.setState({date: new Date()})
            console.log('un update a eu lieu');
        }, 1000);
    }

    // un component a été démonté
    componentWillMount() {
        this.timer = window.setInterval(() => {
            console.log('un update a eu lieu');
        }, 1000);
    }

    // démontage du component
    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

ReactDOM.render(<MyTimer/>, document.getElementById('app'));
