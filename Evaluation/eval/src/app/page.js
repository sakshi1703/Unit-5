import Image from "next/image";
import styles from "./page.module.css";

import { Suspense } from "react";

export default async function Home() {

  try{
    const res = await fetch("http://localhost:3000/api/posts", {
      headers: {Authorization: "Bearer my-secret-token"},
    });

    if(!res.ok) throw new Error("no posts");

    const posts = await res.json();

    return(
      <main>
        <h1>Blog</h1>
        <ul>
          {
            posts.map((post)=>(
              <li key={post.id}>
                <a href={'/post/${post.id}'}>{post.title}</a>
              </li>
            ))
          }
        </ul>
      </main>
    );
  }
  catch(error){
    console.error("Error")
    return <h1>Error</h1>
  }
}
