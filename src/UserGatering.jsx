function UserGatering(prop) {

    const isLogin = <h1 className=" bg-slate-800 text-yellow-300">Well Come! {prop.user.name}</h1>
    const validation = <p className=" bg-slate-100 text-yellow-600">User Under login by token</p>
    return(prop.isLogin ? isLogin:validation)
}
export default UserGatering