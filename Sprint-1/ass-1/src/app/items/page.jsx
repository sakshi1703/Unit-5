
export default function Itemsmapp(){
    const items = [
        { name: "React", description: "A library for building user interfaces." },
        { name: "JavaScript", description: "A versatile programming language for the web." },
        { name: "Next.js", description: "A React framework with powerful features." },
      ];

      return(
        <div>
            <h1>Static Item List</h1>
            <ul>
                {
                    items.map((ele, i)=>(
                        <li>
                            <h1>{ele.name}</h1>
                            <p>{ele.description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
      )
}