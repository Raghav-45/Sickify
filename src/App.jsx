function App() {
  return (
    <div className='h-[100vh] bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80")]'>
      <h1 className='text-3xl font-bold underline'>
        Hello world!
      </h1>
      <footer className='bg-black text-xl text-white backdrop-blur-md text-center fixed inset-x-0 bottom-0'>
        This is sticky fixed Footer.
      </footer>
    </div>
  )
}

export default App
