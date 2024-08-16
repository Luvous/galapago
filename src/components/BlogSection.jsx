// import React, { useEffect, useState } from 'react';
// import axios from 'axios'

// function BlogSection() {

//     const [posts, setPosts] = useState([]);
//     const getPostData = () => {
//         axios
//             .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@studio.galapago")
//             .then((res) => {
//                 setPosts(res.data.items);
//             })
//             .catch((error) => {
//                 console.error("Error fetching blog posts:", error);
//             });
//     };
//     useEffect(() => {
//         getPostData();
//     }, []);

//     console.log(posts[0]);


//     return (
//         <section id='Articles'>
//             <div className='grid'>
//                 <div className='col'>
//                     <div className='article-box'>
//                         <img src={posts[0].description.toString().match(/<img[^>]+src="([^">]+)"/)[1]} />
//                         <h3>{posts[0].title}</h3>
//                         <p>aaa</p>
//                     </div>
//                 </div>
//                 <div className='col'>
//                     <div className='article-box'>
//                         <img src={posts[0].description.toString().match(/<img[^>]+src="([^">]+)"/)[1]} />
//                         <div>
//                             <h3>{posts[0].guid}</h3>
//                             <p>aaa</p>
//                         </div>
//                     </div>
//                     <div className='article-box'>
//                         <img src={posts[0].description.toString().match(/<img[^>]+src="([^">]+)"/)[1]} />
//                         <div>
//                             <h3>{posts[0].guid}</h3>
//                             <p>aaa</p>
//                         </div>
//                     </div>
//                     <div className='article-box'>
//                         <img src={posts[0].description.toString().match(/<img[^>]+src="([^">]+)"/)[1]} />
//                         <div>
//                             <h3>{posts[0].guid}</h3>
//                             <p>aaa</p>
//                         </div>
//                     </div>


//                 </div>
//                 <div className='col'>
//                     <div className='article-box'>
//                         <img src={posts[0].description.toString().match(/<img[^>]+src="([^">]+)"/)[1]} />
//                         <h3>{posts[0].guid}</h3>
//                         <p>aaa</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default BlogSection