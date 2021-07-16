import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./style.css";
import coffee from "static/coffe.jpg";
import RecipeCategory from "components/Recipe/RecipeCategory";
import { Link, Router, withRouter } from "react-router-dom";
import RecipeEditor from "components/Recipe/RecipeEditor/index";

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
      name: "milktea",
      category: "tea",
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
      <div className="recipe-box">
        <div className="title">공지사항</div>
        <RecipeCategory />

        <div id="recipe-box">
          <CardGroup>
            <div className="make-recipe">
              <Link to="/recipe/editer" className="fix-button">
                레시피 만들기
              </Link>
            </div>
            {fakeCategoryFilter.map((item, index) => (
              <Card key={index}>
                <Card.Img className="pic" variant="top" src={coffee} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className="flex">
                    <input type="button" className="fix-button" value="수정" />
                    <input type="button" className="fix-button" value="삭제" />
                  </div>
                </Card.Footer>
              </Card>
            ))}
          </CardGroup>
        </div>
      </div>
    </>
  );
};

export default withRouter(RecipeDetail);
