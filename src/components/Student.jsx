import PropType from "prop-types"
function Student(prop) {
    return (
        <div>
            <h1>My Name is {prop.uname.stuname}</h1>
            <p>Age: {prop.uname.age}</p>
            <p>Position: {prop.uname.position ? "IT":"HR"}</p>
        </div>
    )
}

export default Student