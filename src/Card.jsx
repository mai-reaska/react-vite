import profile from "../src/assets/image/pr.jpg"
import Button from "./Button/Button"
function Card() {
    const user = {
        uname: "Mai Reaksa",
        age: "21",
        position: "IT"
    }
    return (
        <div>
            <div className=" bg-slate-500 w-52 container m-auto mt-5">
                <img src={profile} alt="user imagae" className="w-40 rounded-full m-auto mt-3" />
                <div className="ml-3 mt-2 text-white font-semibold">
                    <h1>Name: {user.uname}</h1>
                    <p>Age: {user.age}</p>
                    <p>Position: {user.position}</p>
                </div>
                <Button />  
            </div>

        </div>
    )
}
export default Card