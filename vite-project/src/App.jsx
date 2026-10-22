import React from 'react'
import Counter from '../hooks/usestate/counter'
import FetchData from '../hooks/useeffect/FetchData'
import ChangeBG from '../hooks/UseLayoutEffect/ChangeBG'


const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <FetchData /> */}
      <ChangeBG />
    </div>
  )
}

export default App
