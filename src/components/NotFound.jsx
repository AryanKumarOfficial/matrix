import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
            <Link to="/" className="text-lg text-blue-500 hover:underline">
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;
