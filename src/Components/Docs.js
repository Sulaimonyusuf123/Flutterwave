import React from 'react'
import { useState } from 'react'

const Docs = () => {
  const [user, userName] = useState({
    name: 'john',
    Age: 20,
  })
  const updateName = (newName, newAge) => {
  
userName({
  ...user,
  name: newName,
  Age: newAge,
})
};
const handleName = (event) =>{
  updateName(event.target.value, (user.name))
}
const handleAge = (event) =>{
  updateName(user.name, parseInt(event.target.value, 10) || 0);
}
  
  return (
    <div className='mt-48'>
      <p>Name: {user.name}</p>
      <p>Age:{user.Age}</p>
      <label> 
      <input type='text' value={user.name} onChange={handleName} className=''></input>
      </label><br/>
      <label>
      <input type='number' value={user.Age} onChange={handleAge} className='mt-4'></input><br/>
      </label><br/>
      <button onClick={() => updateName('') }>update info</button>
    </div>
  )
}

export default Docs

















// import React from 'react'
// import { useState } from 'react'

// const Docs = () => {
//   const [user, userName] = useState({name: 'john' , age: 25})

//   const updateName = () =>{
//     userName(user.name)
//   }
//   const updateAge = () =>{
//     userName(user.age)
//   }
//   return (
//     <div className='mt-48'>
//      <p>name: {user.name}</p>
//      <p>Age: {user.age}</p>
//       <button onClick={ () => updateName('jane')}>update name</button>
//       <button onClick={ () => updateAge(20)}>update age</button>
//     </div>
//   )
// }

// export default Docs








// import React from 'react'
// import { useState } from 'react'

// const Docs = () => {
//   const [count, setCount] = useState('')
//   const plus = () => {
//     setCount(count + 1)
//   };
//   const minus = () =>{
//     setCount(count - 1)
//   }
//   return (
//     <div className='mt-48'>
//       <p>count : {count}</p>
//       <button onClick={plus}> increament</button><br/>
//       <button onClick={minus}>decreament</button>
//     </div>
//   )
// }

// export default Docs













// import React from 'react'
// import { useState, useEffect } from 'react'

// const Docs = () => {
//   const [input, inputValue] = useState('');
//   const handleChange = (e) =>{
//     inputValue(e.target.value);
//   };
//   return (
//     <div className='mt-40'>
//       <div>
// <input type='text' value={input} onChange={handleChange}></input>
// <p>you typed:{input}</p>

//       </div>
//     </div>
//   )
// }

// export default Docs

