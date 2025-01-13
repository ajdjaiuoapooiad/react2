import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




const BookList = () => {
    return (
        <section className='booklist'>
            <Book author={author} title={title} image={image} />
            <Book author={author} title={title} image={image} />
           
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
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
            <p>{props.job}</p>
            <p>{props.number}</p>


        </article>
    )
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

