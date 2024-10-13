function Even() {
    const cleckHaldel = (e) => e.target.textContent = "Hello"
    return (

        <div>
            <button onDoubleClick={(e) => cleckHaldel(e)} className="bg-blue-700 p-2 text-white">cleck me</button>
        </div>
    )
}
export default Even