
import EnergiaLimpa from "./EnergiaLimpa"
import FirstSection from "./FirstSection"
import Problema from "./Problema"
import Tecnologia from "./Tecnologia"
import Actions from "./Actions"

function Home() {
    return ( 
        <main>
        <section id="home">
          <FirstSection />
        </section>
        <section id="problema">
          <Problema />
        </section>
        <section id="energia-limpa">
          <EnergiaLimpa />
        </section>
        <section id="tecnologia">
          <Tecnologia />
        </section>
        <section id="acoes">
          <Actions />
        </section>
      </main>
     );
}

export default Home;