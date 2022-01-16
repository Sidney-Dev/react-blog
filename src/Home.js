import { useEffect, useState } from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
   
    useEffect(() => {
        fetch("http://localhost:8000/blogss")
        .then(res => {
            if(!res.ok) {
                throw Error("Could not fetch the data for the resource")
            }
            return res.json()
        })
        .then(data => {
            setBlogs(data)
            setIsPending(false)
            setError(null)
        })
        .catch(e => {
            setError(e.message)
            setIsPending(false)
        })
        
    }, [])

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div className="loading">Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
    );
}
 
export default Home;