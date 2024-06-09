import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
// import { useConversation } from '../../zustand/useConversation';
import { useConversation } from '../../zustand/useConversation';
import useGetConverstaion from '../../hooks/useGetConversation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const SearchInput = () => {
    const [search, setSearch] = useState("");
    // const { conversations } = useConversation();
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConverstaion();
    const handleSubmit =(e)=>{


        e.preventDefault()
        if (!search) return toast.error("Empty search");
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}
        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
			setSelectedConversation(conversation)  ;
			setSearch("");
		} else toast.error("No such user found!");
    }


    return (

        <div>
        <form onSubmit={handleSubmit}  className='flex items-center gap-2'>

            <input
                type='text'
                placeholder='Search…'
                className='input input-bordered rounded-full '
            value={search}
            onChange={(e)=>{ 
                e.preventDefault() 
                setSearch(e.target.value) }}
            />

            <button type='submit' className='btn btn-circle bg-orange-400 hover:bg-orange-500 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none px' />
            </button>

        </form>


        </div>

       
    )
}

export default SearchInput
