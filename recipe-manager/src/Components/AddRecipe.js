import Container from "react-bootstrap/esm/Container";

function AddRecipe(props) {
  return (
    <Container bg={props.colorMode} data-bs-theme={props.colorMode}>
      <p>Add to recipe List</p>
    </Container>
  );
}

export default AddRecipe;