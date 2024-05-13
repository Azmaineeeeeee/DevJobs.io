import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../public/image_processing20230720-3307-dkrs6s.gif';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5">
      <img src={errorImage} className="w-48 h-48 mb-5" alt="Error" />
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <Link to="/">
        <button className="btn btn-error mt-5">Go Back!</button>
      </Link>
    </div>
  );
}
