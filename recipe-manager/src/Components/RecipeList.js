import PageContainer from './PageContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Recipes from "./Recipes";
import Pagination from 'react-bootstrap/Pagination';
import { useState } from "react";
import RecipeInfo from './RecipeInfo';

function RecipeList(props) {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const totalPages = Math.ceil(Recipes.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentRecipeList = Recipes.slice(startIndex, endIndex);
  
  const groupedRecipes = [];
  for (let i = 0; i < currentRecipeList.length; i += 3) {
    groupedRecipes.push(currentRecipeList.slice(i, i + 3));
  }

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  {/* Show an offcanvas when you click a recipe */}
  const [showRecipe, setShowRecipe] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null)
  const hideRecipe = () => setShowRecipe(false); useState(null);

  const onRecipeClick = (recipe) => {
    setCurrentRecipe(recipe);
    setShowRecipe(true);
  }

  
 
  return (
    <PageContainer colorMode={props.colorMode}>
      
      <RecipeInfo colorMode={props.colorMode} show={showRecipe} hide={hideRecipe} recipe={currentRecipe} />

      {groupedRecipes.map((row, rowIndex) => (
        <Row key={rowIndex} className="mb-4">
          {row.map((recipe, index) => (
            <Col key={index} md={4}>
              <Card className={`card card-${props.colorMode}`} onClick={ () => onRecipeClick(recipe) }>
                <Card.Img className="card-img" variant="top" src={`./assets/${recipe.image}`} />
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Text>{recipe.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}

      {/* Pagination Controls */}
      <Pagination className="d-flex justify-content-center mt-4">
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />

        {/* Dynamically generate pagination items */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>

    </PageContainer>
  );
}

export default RecipeList;