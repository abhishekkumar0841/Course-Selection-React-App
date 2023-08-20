import React from 'react'

const Filter = ({ filterData, category ,setCategory}) => {

    function filterHandler(title){
        setCategory(title)
    }

  return (
    <div className='flex flex-wrap items-center gap-5 m-2 justify-center'>
      {
        filterData.map((d)=>{
            return <button onClick={()=>filterHandler(d.title)} className={`bg-gray-900 rounded-lg font-bold text-white text-2xl pt-2 pb-2 pl-5 pr-5 ${category === d.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent" } `} key={d.id}>{d.title}</button>
        })
      }
    </div>
  )
}

export default Filter
