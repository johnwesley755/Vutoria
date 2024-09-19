import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
      <div className='flex gap-3 mb-4'>
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className='flex flex-col pb-16'>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque delectus beatae est dignissimos fugit error suscipit? Molestiae optio expedita eveniet minima ducimus aliquam. Quos sint est magnam ea omnis impedit excepturi? Suscipit architecto aliquid impedit accusantium voluptatem neque maxime sunt, optio, nulla ab odit natus quia quod. Ipsam, doloremque cupiditate?</p>
       <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe dicta iure repellendus voluptate asperiores eaque ut nesciunt voluptas, culpa temporibus eum natus similique amet earum! Incidunt, nesciunt doloribus.</p> 
      </div>
    </div>
  );
}

export default ProductDescription