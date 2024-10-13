import { useState } from "react"
function EvenChange() {
    const [shpping, setShipping] = useState("")
    const [payment, setPayment] = useState("ABA")
    const paymentTracking = (ev) => {
        setPayment(ev.target.value)
        console.log(payment)
    }
    return (
        <div>
            <select name="" id="" value={payment} onChange={paymentTracking}>
                <option value="select">Select Payment Method</option>
                <option value="ABA">ABA</option>
                <option value="PiPay">PiPay</option>
                <option value="AliPay">AliPay</option>
            </select>
            <p>Payment Procss: {payment}</p>
            <p>Process Delivery </p>
            <label htmlFor="">Check Up</label>
            <input type="radio" name="" id="" value="Check Up" checked/> <br />
            <label htmlFor="">Dalivery</label>
        </div>
    )
}
export default EvenChange