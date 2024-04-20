
import './App.css'
import Table from './components/table/Table';



function App() {

  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];
  const total = netIncomes.reduce((num, i) => {
  return num + i.income
  }, 0);
  const average = (total / netIncomes.length).toFixed();
  return (
    <>
      <Table netIncomes={netIncomes}/>
      <p>Promedios de los ingresos netos :{average}</p>
    </>
  )
}

export default App
