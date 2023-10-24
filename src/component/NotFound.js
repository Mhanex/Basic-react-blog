import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Ooops!!!</h2>
            <p>The page you requested is not found on this server</p>
            <Link to="/">Go Back</Link>
        </div>
     );
}
 
export default NotFound;