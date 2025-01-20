import Offcanvas from 'react-bootstrap/Offcanvas';
import PageContainer from './PageContainer';

function RecipeInfo(props) {

  if (props.recipe == null){
    return (<Offcanvas show={false}></Offcanvas>);
  }
  return (
    <Offcanvas show={props.show} onHide={props.hide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{props.recipe.name}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {props.recipe.description}
      </Offcanvas.Body>
    </Offcanvas>

  );
}

export default RecipeInfo;