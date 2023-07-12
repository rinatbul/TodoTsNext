import { NextPage } from 'next';
import s from './page.module.css'

const Home: NextPage = () => {
    return (
        <div className={s.wrapper}>
            <form action="/todo">
                <button><h1>Todo App</h1></button>
            </form>
        </div>
    );
};

export default Home;