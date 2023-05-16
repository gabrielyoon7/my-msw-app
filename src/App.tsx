import './App.css'

function App() {

  const fetchLogin = async () => {
    const response = await fetch('/login', {
      method: 'POST',
    });
    console.log(JSON.stringify(response));
  }

  const fetchUser = async () => {
    const response = await fetch('/user');
    console.log(JSON.stringify(response));
  }

  return (
    <>
      <div>
        <img src="https://placehold.it/200x200" />
      </div>
      <div>
        <button onClick={() => fetchLogin()}>
          login
        </button>
        <button onClick={() => fetchUser()}>
          user
        </button>
      </div>
    </>
  )
}

export default App
