import { NextPage } from 'next';

const HomePage: NextPage = () => {
    return (
        <div>
            <h1>Todo App</h1>
                <a href="/todo">Go to Todo</a>
        </div>
    );
};

export default HomePage;