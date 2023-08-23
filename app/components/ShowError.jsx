'use client'

const ShowError = () => {
  return (
    <div>
        <h2>ShowError</h2>
        <button className="bg-gray-300 rounded-xl text-black" onClick={()=>{
            throw new Error('Auth is required')
        }}>throw error</button>
    </div>
  )
}

export default ShowError