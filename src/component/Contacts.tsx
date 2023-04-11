import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
const Contacts = () => {
  return (
    <section id="contacts">
      <div className='text-center'>
        <p>
          Call us on <span className='text-blue-600 select-all'>+91 8226931447</span>
        </p>
        <div className="flex justify-center">
          DM us on Instagram
          <a href="https://instagram.com/kaulantech" rel="noreferrer" target="_blank">
            <AiOutlineInstagram  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={25}/>
            </a>
        </div>
      </div>
    </section>
  )
}

export default Contacts