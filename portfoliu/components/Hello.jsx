const Hello = () => {
  return (
    <section className='w-full flex justify-center '>
      <div className='grid grid-cols-2 w-3/4 py-10'>
        <div className='flex items-center cols-span-1'>
          <h2 className='text-slate-900 text-9xl font-bold'>
            Antonio Eduardo Silva dos Santos
          </h2>
        </div>
        <div className='cols-span-1 relative'>
          <div className='h-[350px] w-[350px] bg-cyan-200 absolute rounded-full blur-lg translate-x-22 translate-y-26  hover:opacity-0 duration-500 hover:translate-x-36 ' />
          <div className='h-[400px] w-[400px] bg-cyan-400 absolute rounded-full blur-lg translate-x-32 translate-y-36  hover:opacity-0 duration-500 hover:translate-x-56' />
          <div className='h-[450px] w-[450px] bg-cyan-600 absolute rounded-full blur-lg  translate-x-64 translate-y-60  hover:opacity-0 duration-500 hover:translate-x-36' />
        </div>
      </div>
    </section>
  );
};

export default Hello;
