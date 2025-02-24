import { notFound } from "next/navigation";

export default async function Post({params}) {
    try{
        const res = await fetch("http://localhost:3000/api/posts/${params.id}",{
            headers: {Authorization: "Bearer-my-secret-token"},
        });

        if(res.status === 404){
            notFound();
        }

        if(!res.ok) throw new Error("error")

            const post = await res.json();

            return(
                <main>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </main>
            )
    }
    catch{
        console.error("error")
        return <h1>post not Found!</h1>
    }

}