import Link from 'next/link';

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

export default async function Posts() {
    const posts = await fetchPosts();

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id} className="mb-2">
                        <Link className="text-blue-500 hover:underline" href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
