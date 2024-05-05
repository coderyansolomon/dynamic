export default async function Post({params}){
    console.log({params})
    const {id} = params
    const posts = await Promise.all(
        id.map(async (id) => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            return await res.json()
        })
    )
    return (
        <>
         {
            posts.map((post) => (
            <div className="p-5">
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <p className="mt-2">{post.body}</p>
            </div>
            ))
        }
        </>
    )
}