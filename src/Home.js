import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "Welcome back", body: "lorem ipsum...", author: 'melodia', id: 1},
        { title: "Walk the dog", body: "lorem ipsum...", author: 'melodia', id: 2},
        { title: "My new website", body: "lorem ipsum...", author: 'melodia', id: 3},
    ])
   

    return ( 
        <div className="home">
            <BlogList blogs={blogs} />
        </div>
    );
}
 
export default Home;