import UserDetails from '../Components/User'

export default function Home(){
    const Userdetails = {name: "John Doe", email: "john.doe@gmail.com"}
    return(
        <div>
            <h1>Welcome to Parent Component!</h1>
            <User Userdetails = {Userdetails} />
        </div>
    )
}