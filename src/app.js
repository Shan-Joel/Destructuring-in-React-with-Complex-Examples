import './styles.css';

const employee = {
   id: 'ABC',
   name: 'Joel',
   salary: '$20',
   address: {
      salary: '$200',
      no: 123,
      street: 'washington',
      country: 'USA',
      // nested objects
      zones: {
         plantZone: '7B',
         codes: {
            washington: 5000,
         },
      },
   },
};

function App() {
   // object destructuring
   const { id, name, address, salary: employeeSalary } = employee;
   const { no, street, country, zones, salary: addressSalary } = address;
   const {
      plantZone,
      codes: { washington },
   } = zones;

   return (
      <div className="App">
         <h1>{id}</h1>
         <h1>{name}</h1>
         <h1>{`${no}, ${street}, ${country}`}</h1>
         <h1>{`Zone is: ${plantZone}`}</h1>

         {/* giving alias for the same variable names */}
         <h1>{employeeSalary}</h1>
         <h1>{addressSalary}</h1>

         <h2>{`Washington code is ${washington}`}</h2>
      </div>
   );
}

export default App;
