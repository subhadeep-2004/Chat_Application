import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
    return (

        <div>
        <form  className='flex items-center gap-2'>

            <input
                type='text'
                placeholder='Search…'
                className='input input-bordered rounded-full '
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            />

            <button type='submit' className='btn btn-circle bg-orange-400 hover:bg-orange-500 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>

        </form>


        </div>

       
    )
}

export default SearchInput
