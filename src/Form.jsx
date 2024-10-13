import { useState } from "react";
function Form() {
    const [inputs, setName] = useState({});
    const haedlUser = (e) => {
        const username = e.target.username
        const val = e.target.val
        setName(values => ({ ...values, [username]: val }))

    }
    const handSubmit = (e) => {
        e.preventDefault();
        alert("Thank you!")
    }
    return (

        <form onSubmit={handSubmit} className="container m-auto my-4 ml-6">
            <div className=" mb-3">
                <input type="text" name="uname" id="uname"
                    value={inputs.uname || " "}
                    className="text-sm"
                    onChange={haedlUser}
                    placeholder="User name" />
            </div>
            <div>
                <input type="text" name="age" id="age"
                    className="text-sm"
                    value={inputs.age || " "}
                    onChange={haedlUser}
                    placeholder="Age" />
            </div>

            <input type="submit" />
        </form>

    )
}
export default Form