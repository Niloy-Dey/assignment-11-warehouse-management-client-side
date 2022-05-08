import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='m-5 pt-5'>
           <div className='blog'>
            <h4>Difference between javascript and nodejs</h4>
                <p> <b>ANS: </b>  Main differences between JavaScript and Node.js </p>
                <p>It is a programming language. It works in any browser that has a proper browser engine.	</p>
                <p>It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately.</p>
            </div>            
            <div className="blog">
                <h4>When should you use nodejs and when should you use mongodb</h4>
                <p><b>ANS: </b>when we need store data then we used  MongoDB  where we can store data and </p>
                <p>when we need our client site connect to database it's server site then we used node js  .</p>
            </div>
            <div className="blog">
                <h4>Differences between sql and nosql databases</h4>
                <p>These databases are best suited for complex queries	and vertically Scalable	</p>
                <p>These databases are not so good for complex queries and Horizontally scalable</p>
            </div>
            <div className="blog">
                <h4>What is the purpose of jwt and how does it work</h4>
                <p>Ans: JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. </p>
            </div>
            
            {/* https://stackoverflow.com/users/16990191/niloy-dey?tab=answers */}

        </div>
    );
};

export default Blog;