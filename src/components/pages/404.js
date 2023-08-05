import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div>
        <ErrorMessage/>
        <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>The page does not exist!</p>
        <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px',
        'marginTop': '30px', 'textDecoration': 'underline'}} to="/">Back to the main page</Link>
    </div>
  )
}

export default Page404;