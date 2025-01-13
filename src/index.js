import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Greeting from './components/Greet';



const BookList = () => {
    return (
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}




const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    )
}


const Image = () => (
    <img src='https://images-fe.ssl-images-amazon.com/images/I/71KXnI8VPqL._SY230_.jpg' alt='React.js＆Next.js超入門 第2版 Kindle版'/>
)
const Title = () => <h2>React.js＆Next.js超入門 第2版 Kindle版</h2>
const Author = () => {
    return <h2>掌田津耶乃</h2>
} 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

