
export default function UserDetails({Userdetails}) {
    return(
        <div>
            <h2>User Information</h2>
            <p><strong>Name:</strong>{Userdetails.name}</p>
            <p><strong>Email:</strong>{Userdetails.email}</p>
        </div>
    )
}