import { Link } from 'react-router-dom'

const Head = (props) => {
    return (
        <nav className = 'nav'>
            <Link to  = "/">
                <div>People App</div>
            </Link>
        </nav>
    )
}

export default Head;