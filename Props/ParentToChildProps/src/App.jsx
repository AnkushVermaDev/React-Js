import Children from "./Children";
function App() {







  // sending the function to children file

  function displayer(){
    console.log("message is clicked");
    
    }








  return (
    <>



    <Children displayer={displayer} />


    </>
      
  )
}

export default App
