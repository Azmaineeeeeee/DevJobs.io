import { Link, useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    
    <div className="flex items-center justify-center h-[100vh] flex-col space-y-5">
     
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      
      <Link to= '/'><button className="btn btn-error">Go Back!</button></Link>
    </div>
  );
}