import React, { useEffect, useState } from 'react'

const FetchData = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const FetchDataApi = async () => {
      const api = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await api.json();
      setUser(data);
      console.log(data);

    }
    FetchDataApi();
  }, [])
  return (
    <div>
      {
        user.map((data) => (
          <div key={data.id}>
            <div>{data.name}</div>
          </div>
        ))
      }
    </div>
  )
}

export default FetchData
















// import React, { useEffect, useState } from 'react'

// const FetchData = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//      console.log("running time Error")
//      document.title = counter;
//   },[counter])

//   return (
//     <div>
//      <h1>{counter}</h1>
//      <button onClick={()=>{setCounter(counter+1)}}>Inc</button>
//      <button onClick={()=>{setCounter(counter-1)}}>Decc</button>
//     </div>
//   )
// }

// export default FetchData
