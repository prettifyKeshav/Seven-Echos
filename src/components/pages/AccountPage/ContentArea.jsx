import { useRouter } from 'next/navigation';
import MyProfile from './MyProfile';
import ChangePassword from './ChangePassword';
import MyWishlist from './MyWishlist';
import MyBooking from './MyBooking';

const ContentArea = ({ activeView }) => {
    const router = useRouter();

    const renderView = () => {
        switch (activeView) {
            case 'myprofile':
                return <MyProfile />;
            case 'mywishlist':
                return <MyWishlist />;
            case 'mybooking':
                return <MyBooking />;
            case 'password':
                return <ChangePassword />;
            case 'logout':
                return <LogoutView />;
            default:
                return <MyProfile />;
        }
    };

    return (
        <main className="contentArea">
            <div className="contentWrapper">
                {renderView()}
            </div>
        </main>
    );
};


function LogoutView() {
    const handleLogout = () => {
        router.push('/login');
    };

    return (
        <div className="textCenter">
            <h1 className="viewHeader">Logout</h1>
            <p>Are you sure you want to log out?</p>
            <button onClick={handleLogout} className="logoutButton">
                Confirm Logout
            </button>
        </div>
    );
}

export default ContentArea;