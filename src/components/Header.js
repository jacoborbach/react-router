import { Link, withRouter } from 'react-router-dom';

const Header = (props) => {
    function back() {
        props.history.goBack()
    }
    function route(path) {
        props.history.push(path)
    }
    console.log(props)
    return (
        <div>Header
            <nav>
                <button onClick={() => route('/info')}>Info</button>
                <br />
                <button onClick={() => route('/about')}>About</button>
                <br />
                <button onClick={() => route('/')}>Go Home</button>
                <button onClick={() => back()}>Go Back</button>
            </nav>
        </div>
    )
}

export default withRouter(Header) 