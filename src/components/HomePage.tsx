import { useUserStore } from '../store';
import Header from './Header';
export default function HomePage() {

    const { username } = useUserStore();

    return (
        <div>
            <Header />
            <div>
                <h1>Home Page</h1>
                <p>Welcome to the home page {username}</p>
            </div>

        </div>
    )
}