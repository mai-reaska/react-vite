import Student from "./components/Student"
import UserGatering from "./UserGatering"
import List from "./ListArray"
import ListObject from "./ListObject"
import Even from "./Button/Even"
import State from "./State"
function App() {
  const stuInfo = {
    stuname: "Mai Reaksa",
    age: "21",
    position: true
  }
  const admin = {
    name: "isadmin",
    status: 1,
    api: "001"
  }
  const cars = ['Ford', 'BMW', 'Audi'];
  const car = [
    { id: 1, brand: 'Ford', price: 1335.21 },
    { id: 2, brand: 'BMW', price: 2305.51 },
    { id: 3, brand: 'Audi', price: 1735.71 },
    { id: 4, brand: 'TOYOTA', price: 999.71 },
    { id: 5, brand: 'LEXUS', price: 988.99 }
  ];
  car.sort((a, b) => b.price - a.price)
  const product = car.filter(product_price => product_price.price < 1000)
  const car_pr = [
    { id: 1, brand: 'Ford', price: 1335.21 },
    { id: 2, brand: 'BMW', price: 2305.51 },
    { id: 3, brand: 'Audi', price: 1735.71 }
  ];
  return (
    <>
      <hr />
      <Student uname={stuInfo} />
      <hr />
      <UserGatering isLogin={true} sender={stuInfo} user={admin} />
      <hr />
      <h1>List reandering React</h1>
      <ul className="">
        {cars.map((cars) => <List brand={cars} />)}
      </ul>
      <hr />

      <div className="flex justify-between">
        <div>
          <h1>List reading object array</h1>
          <ul>
            {car_pr.map((car_pr) => <ListObject brand={car_pr.brand} price={car_pr.price} key={car_pr.id} />)}
          </ul>
        </div>
        <div>
          <h1>List as method short</h1>
          <ul>
            {car.map((car) => <ListObject brand={car.brand} price={car.price} key={car.id} />)}
          </ul>
        </div>
        <div>
          <h1>List as method fultter</h1>
          <ul>
            {product.map((car) => <ListObject brand={car.brand} price={car.price} key={car.id} />)}
          </ul>
        </div>
      </div>
      <hr />
      <h1>Even </h1>
      <Even />
      <hr />
      <State />
    </>
  )
}

export default App
