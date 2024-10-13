import { useState } from "react"
function State() {
    const [name, setName] = useState("Panding")
    const [staff, setStaff] = useState(true)
    const [pr, setPr] = useState(0)

    const setUser = () => {
        setName("Done")
    }
    const tragStaff = () =>{
        setStaff(!staff)
    }
    const setCounting = () =>{
        let tax = 0.01
        setPr(pr + 1 * tax)
    }
    console.log(pr)
    return (
        <div>
            <p>Status: {name}</p>
            <button onClick={setUser} className="bg-blue-500 p-1 text-white">Procheus</button>
            <p>Validation: {staff ? "Yes":"NO"}</p>
            <button onClick={tragStaff} className="bg-blue-500 p-1 text-white">Staff Check</button>
            <p>Count: {pr}</p>
            <button onClick={setCounting} className="bg-blue-500 p-1 text-white">Add to Card</button>
        </div>
    )
}
export default State