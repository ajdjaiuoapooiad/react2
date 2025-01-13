import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const books = [{
    author: '掌田津耶乃',
    title: 'React.js＆Next.js超入門 第2版 Kindle版',
    image: 'https://m.media-amazon.com/images/I/71KXnI8VPqL._SL1500_.jpg',
    id: 1,

},{
    author: '掌田津耶乃',
    title: 'Ruby on Rails 6 超入門 Kindle版',
    image: 'https://m.media-amazon.com/images/I/71eRnFOgCEL._SL1500_.jpg',
    id: 2,
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
            <Event />
            {books.map((book) => {
                return <Book {...book}
                key={book.id}
                />
            })}
        </section>
    )
}

const Book = (props) => {
    console.log(props);
    
    return (
        <article className='book'>
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>
    )
}


const Event = () => {
    const handleFormInput = () => {
        console.log('handle form input');
    }
    const handleButtonClick = () => {
        alert('handle button click')
    }

    return (
        <section>
            <form>
                <h2>Typical Form</h2>
                <input type='text' name='example' onChange={handleFormInput} style={{margin: '1rem 0'}} />
                <button onClick={handleButtonClick}>submit</button>
            </form>
        </section>
    )
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);


