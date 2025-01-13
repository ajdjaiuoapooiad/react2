import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const books = [{
    author: '掌田津耶乃',
    title: 'React.js＆Next.js超入門 第2版 Kindle版',
    image: 'https://m.media-amazon.com/images/I/71KXnI8VPqL._SL1500_.jpg',

},{
    author: '掌田津耶乃',
    title: 'Ruby on Rails 6 超入門 Kindle版',
    image: 'https://m.media-amazon.com/images/I/71eRnFOgCEL._SL1500_.jpg',
},
]

const names = ['john','pater','yukito']
const newNames = names.map((name) => {
    return <h1>{name}</h1>
})
console.log(newNames);


const BookList = () => {
    return (
        <section className='booklist'>
            {names.map((name) => {
                return <h1>{name}</h1>
            })}
        </section>
    )
}




const book1 = {
    author: '掌田津耶乃',
    title: 'React.js＆Next.js超入門 第2版 Kindle版',
    image: 'https://m.media-amazon.com/images/I/71KXnI8VPqL._SL1500_.jpg',
}

const book2 = {
    author: '掌田津耶乃',
    title: 'Ruby on Rails 6 超入門 Kindle版',
    image: 'https://m.media-amazon.com/images/I/71eRnFOgCEL._SL1500_.jpg',
}



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

