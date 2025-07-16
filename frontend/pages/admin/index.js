import withAuth from '../../components/withAuth';
import { useRouter } from 'next/router';

const AdminDashboard = () => {
    const router = useRouter();

    const logout = () => {
        localStorage.removeItem('token');
        router.push('/login');
    };

    return (
        <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <button onClick={logout} className="bg-red-500 text-white p-2 rounded mt-4">
                Logout
            </button>
        </div>
    );
};

export default withAuth(AdminDashboard);
