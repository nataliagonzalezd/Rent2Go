import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/index.css";

import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
  Button,
} from "reactstrap";

export const ToRent = () => {
  const { actions } = useContext(Context);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  // const [products, setProducts] = useState([]);
  // const [productServer, setProductServer] = useState([]);

  function datas(e) {
    e.preventDefault();
    actions.addUser(productName, description, price);
    setProductName("");
    setDescription("");
    setPrice("");
  }

  // const handleClick = () => {
  //   if (productName.length === 0) {
  //     alert("Debe ingresar un producto");
  //   } else {
  //     setProducts([
  //       ...products,
  //       {
  //         id: 4,
  //         name: productName,
  //         sku: 122,
  //         description: "bici GT rodado 32",
  //         image: "bici.jpg",
  //         price: 233,
  //         costumer_id: null,
  //         category_id: null,
  //       },
  //     ]);
  //   }
  // };

  // useEffect(() => {
  //   getProducts();
  //   uptdateProducts();
  // }, [products]);

  // function getProducts() {
  //   fetch(
  //     `https://3001-nataliagonzalez-rent2go-zy0w7ts8dbi.ws-us85.gitpod.io/products`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setProductServer(data));
  // }

  // function uptdateProducts() {
  //   fetch(
  //     `https://3001-nataliagonzalez-rent2go-zy0w7ts8dbi.ws-us85.gitpod.io/products`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(products),
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(productServer));
  // }

  return (
    <div className="abs-center">
      <Form onSubmit={datas}>
        <FormGroup row>
          <Label for="exampleProduct" sm={2}>
            Nombre del producto
          </Label>
          <Col sm={10}>
            <Input
              id="exampleProduct"
              name="product"
              placeholder="Inserte nombre del producto"
              type="text"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Descripcion
          </Label>
          <Col sm={10}>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="inserte descripcion del producto"
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            Insertar Foto
          </Label>
          <Col sm={10}>
            <Input id="exampleFile" name="file" type="file" />
            <FormText>Por favor inserte foto del producto</FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Price
          </Label>
          <Col sm={10}>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="precio"
              type="number"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Categoria
          </Label>
          <Col sm={10}>
            <Input id="exampleSelect" name="select" type="select">
              <option>Electronica</option>
              <option>Jardineria</option>
              <option>Indumentaria</option>
              <option>Musica</option>
              <option>Lectura</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row tag="fieldset">
          <legend className="col-form-label col-sm-2">Estado</legend>
          <Col sm={10}>
            <FormGroup check>
              <Input name="radio2" type="radio" /> <Label check>Nuevo</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio2" type="radio" /> <Label check>Usado</Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button type="submit">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};
