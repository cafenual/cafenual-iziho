import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./style.css";
import coffee from "static/coffe.jpg";
import RecipeCategory from "components/Recipe/RecipeCategory";
import { withRouter } from "react-router-dom";

const RecipeDetail = ({ match }) => {
  const category = match.params.id;
  console.log(match);

  let fakeData = [
    {
      id: 1,
      name: "americano",
      category: "coffee",
    },
    {
      id: 2,
      name: "milk",
      category: "latte",
    },
    {
      id: 3,
      name: "orange",
      category: "juice",
    },
    {
      id: 1,
      name: "americano",
      category: "coffee",
    },
    {
      id: 2,
      name: "milk",
      category: "latte",
    },
    {
      id: 3,
      name: "orange",
      category: "juice",
    },
    {
      id: 1,
      name: "americano",
      category: "coffee",
    },
    {
      id: 2,
      name: "milk",
      category: "latte",
    },
    {
      id: 3,
      name: "orange",
      category: "juice",
    },
  ];

  const [fakeCategoryFilter, setFakeCategoryFileter] = useState([]);

  useEffect(() => {
    if (!category) {
      setFakeCategoryFileter(fakeData);
    } else {
      setFakeCategoryFileter(
        fakeData.filter((data) => data.category === category)
      );
    }
  }, [category]);

  return (
    <>
      <RecipeCategory />
      <div id="recipe-box">
        <CardGroup>
          {fakeCategoryFilter.map((item, index) => (
            <Card key={index}>
              <Card.Img className="pic" variant="top" src={coffee} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    1.홈플러스에서 산다.
                    <br />
                    2.뚜껑을 딴다.
                    <br />
                    3.컵에 따른다.
                    <br />
                    4.판다.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </div>
    </>
  );
};

export default withRouter(RecipeDetail);
