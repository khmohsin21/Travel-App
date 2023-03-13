import{Nav} from './Mycomponents/Nav'
import {Hero} from './Mycomponents/Hero'
import Data from './Mycomponents/Data'
import './Mycomponents/stylecss/Main.css'
function App() {
  const Real=Data.map(data=>{
    return <Hero key={data.id} items={data}/>
  })
  return (
    <div>
      <Nav/>
        <section className='main'>
          {Real}
        </section>
    </div>
  );
}

export default App;
