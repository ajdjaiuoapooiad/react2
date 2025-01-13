import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




const BookList = () => {
    return (
        <section className='booklist'>
            <Book job='developer' />
            <Book title='random title' number={22} />
           
        </section>
    )
}


const title = 'React.js＆Next.js超入門 第2版 Kindle版'
const author = '掌田津耶乃'
const image = 'https://m.media-amazon.com/images/I/71KXnI8VPqL._SL1500_.jpg'




const Book = (props) => {
    console.log(props);
    
    return (
        <article className='book'>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <p>{props.job}</p>
            <p>{props.title}</p>
            <p>{props.number}</p>


        </article>
    )
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

