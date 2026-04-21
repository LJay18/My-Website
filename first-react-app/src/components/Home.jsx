import useFetch from "./Hooks/UseFetch";

function Home() {
    const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts")
    if (loading) return <h1>Loading...</h1> 
        return (
           <div>
             <nav>
                <h1>This is the home page </h1>
            </nav>

            <ul>
                {data.slice(0, 10).map(post =>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
           </div>
        )
    
}
export default Home;