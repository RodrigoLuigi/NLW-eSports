interface ButtonProps {
  title: string;
}


function Button(props: ButtonProps){
  return(
    <button>
      {props.title}
    </button>
  );
}

function App() {
  return (
    <>
    <Button title="btn 1"/>
    <Button title="btn 2"/>
    <Button title="btn 3"/>
    </>
  );
}

export default App
