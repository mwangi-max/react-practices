import {mps} from './mps';
import Show from './Show';

function App() {

  
  return (
    <div className="App">

       <h1>Kiambu County Members of Parliament</h1>
      <section>


        
        {
          mps.map((mp)=>{
            console.log(mp)
            // const {id,image,name,constituency} = mp;
            return <Show key={mp.id} {...mp}/>
        
           
            
            })
        }
        
        
      
    
      </section>
    
      
    </div>
  );
}

export default App;
