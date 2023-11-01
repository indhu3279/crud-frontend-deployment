import {Link} from 'react-router-dom';

function Navigationbar(){
    return(
        <nav class="navbar bg-warning px-3" style={{fontFamily:"Butcherman"}}>
            <Link to="/" class="navbar-brand text-dark" style={{textDecoration:"None"}}>CRUD Operations</Link>
            <div className="nav">
                <Link to="/create-student" class="nav-link text-dark">Create Student</Link>
                <Link to="/student-list" class="nav-link text-dark">Student List</Link>
            </div>
        </nav>
    )
}
export default Navigationbar;