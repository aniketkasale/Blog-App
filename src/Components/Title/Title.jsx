import {Jumbotron , Button} from 'react-bootstrap'
import { withRouter } from 'react-router';
function Title(props) {

  return (
    <div>
        
      <Jumbotron>
        
        <h2>{props.t}</h2>
        <br/>
        
          <Button variant="primary" onClick={()=>props.handleClick(props.postId)} >Click Here To Know More</Button>
        
      </Jumbotron>
    </div>
  );
}
export default withRouter(Title);
