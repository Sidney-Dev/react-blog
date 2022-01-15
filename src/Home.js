import { useEffect, useState } from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
   
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
            setIsPending(false)
        })
    }, [])

    return ( 
        <div className="home">
            { isPending && <div className="loading">Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
    );
}
 
export default Home;