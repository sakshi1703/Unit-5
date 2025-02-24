
export async function GET(req, {params}) {

    const posts = [
        {id: 1, title: "First Page", content: "This is first page of blog"},
        {id: 2, title: "Second Page", content: "This is second page of blog"}
    ];

    const post = posts.find((p)=>p.id=== parseInt(params.id));

    if(!post){
        return new Response(JSON.stringify({error: "Post not found"}),{
            status: 404,
            headers: {"Content-Type": "application/json"}
        });
    }

    return new Response(JSON.stringify(post),{
        headers: {"Content-Type": "application/json"}
    })
}