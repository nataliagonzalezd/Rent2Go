import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
  Button,
} from "reactstrap";

export const ToRent = () => (
  <>
    <head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      />
    </head>
    <body>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Nombre del producto
          </Label>
          <Col sm={10}>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="inserte nombre del producto"
              type="email"
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
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Descripcion
          </Label>
          <Col sm={10}>
            <Input id="exampleText" name="text" type="textarea" />
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
        <FormGroup row>
          <Label for="checkbox2" sm={2}>
            Checkbox
          </Label>
          <Col
            sm={{
              size: 10,
            }}
          ></Col>
        </FormGroup>
        <FormGroup check row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </body>
  </>
);
