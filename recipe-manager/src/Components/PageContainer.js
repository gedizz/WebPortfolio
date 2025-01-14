import Container from "react-bootstrap/Container";

function PageContainer({ children, colorMode }) {
  return (
    <Container
      className="d-flex flex-column mt-4 justify-content-start align-items-center"
      bg={colorMode}
      data-bs-theme={colorMode}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </Container>
  );
}

export default PageContainer;
