export default function Header() {
  return (
    <header className='bg-blue-500 flex flex-col md:flex-row items-center gap-5 justify-evenly py-5 min-w-full h-fit'>
      <h1 className='text-5xl'>Eduardo</h1>
      <nav className='flex gap-10 text-lg'>
        <a href='#about'>
          <button className='btn'>Sobre mim</button>
        </a>
        <a href='#projects'>
          <button className='btn'>Projetos</button>
        </a>
        <a href='#contact'>
          <button className='btn'>Contato</button>
        </a>
      </nav>
    </header>
  );
}
