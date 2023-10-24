import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isAdding, setisAdding] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setisAdding(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog Added");
            setisAdding(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog Body</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog Author</label>
                <select 
                required
                value={author} 
                onChange={(e) => setAuthor(e.target.value)}> 
                    <option value="">Select</option>
                    <option value="michael jason">Michael Jason</option>
                    <option value="temitope orojo">Temitope Orojo</option>
                    <option value="nathaniel martins">Nathaniel Martins</option>
                    <option value="programmer mine">Programmer Mine</option>
                </select>

               {!isAdding && <button>Add Blog</button> }
               {isAdding && <button disabled>Creating blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;