import Jumbotron from "../comps/jumbotron";
import Jumbodata from "../fixtures/jumbo.json"

function JumbotronContainer(){
  return (
    <div>
      <Jumbotron.Container>
        {Jumbodata.map((item) => (
          <Jumbotron key={item.id}
          direction={item.direction}>
              
            <div className="pane">
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </div>
            
            <div className="pane">
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </div>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  )
}

export default JumbotronContainer