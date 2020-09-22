import React, { Component } from "react";
import ItemSelector from "./item";
import ItemService from "./../services/itemService";
import "./catalog.css";
import "./category.css";

class Catalog extends Component {
  state = {
    items: [],
    categories: [],
    selectedCategory: "",
  };
  render() {
    let itemsToDisplay = this.state.items;

    if (this.state.selectedCategory) {
      itemsToDisplay = itemsToDisplay.filter(
        (item) => item.category === this.state.selectedCategory
      );
    }

    return (
      <div className="catalogPage">
        <div className="categories">
          <div
            className="category"
            key=""
            onClick={() => this.selectedCategory("")}
          >
            <h6>All Items</h6>
          </div>
          {this.state.categories.map((c) => (
            <div
              className={this.getCategoryClass(c)}
              key={c}
              onClick={() => this.selectedCategory(c)}
            >
              <h6>{c}</h6>
            </div>
          ))}
        </div>
        <h4 className="catTitle">Our Amazing Catalog </h4>

        <div className="products">
          {itemsToDisplay.map((i) => (
            <ItemSelector key={i.id} product={i}></ItemSelector>
          ))}
        </div>
      </div>
    );
  }

  getCategoryClass = (catName) => {
    let catClass = "category";
    if (catName === this.state.selectedCategory) {
      catClass += " active-cat";
    }
    return catClass;
  };
  selectedCategory = (catName) => {
    this.setState({ selectedCategory: catName });
    console.log(catName);
  };
  componentDidMount() {
    // perfect place to get data from server / database / AJAX - outside of the render
    let service = new ItemService();
    const data = service.getProducts();

    this.setState({ items: data });

    // identify the unique catagories from data
    let cats = [];
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      if (!cats.includes(item.category)) cats.push(item.category); //! means does not include
      this.setState({ categories: cats });
    }
    // create an array with those categories

    // set it to the state
  }
}

export default Catalog;
