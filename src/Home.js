import React, { useEffect, useState } from 'react'

const Home = () => {

    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()

            setDetails(data)
            console.log(details)
        }
        fetchData()
    }, [])

    // Get current post 

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = details.slice(indexOfFirstPost, indexOfLastPost)

    console.log(details)

  return (
      <div style={{width: '50%', margin: 'auto'}}>
          {details && details.map(item => (
              <div key={item.id}>
                  <h3 style={{border: '1px solid red', margin: '1em 0', padding: '0.5em'}}>{item.title}</h3>  
              </div>
          ))}
    </div>
  )
}

export default Home