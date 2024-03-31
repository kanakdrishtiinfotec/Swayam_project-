import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';


function ProductForm() {
    const { Formik } = formik;

  const schema = yup.object().shape({
    productName: yup.string().required(),
    details: yup.string().required(),
    description: yup.string().required(),
    category: yup.string().required(),
    price: yup.string().required(),
    file: yup.mixed().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        productName: '',
        details: '',
        description: '',
        category: '',
        price: '',
        file: null,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form className=' ' noValidate onSubmit={handleSubmit}>
          <Row className="" style={{marginBottom:"2rem"}}>
            <h3 className='mb-4 text-center'>Enter Details For Probuct</h3>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative "
            >
              <Form.Label>Product Name <sup style={{color:"red"}}>*</sup></Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="productName"
                value={values.productName}
                onChange={handleChange}
                isInvalid={!!errors.productName}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.productName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              className="position-relative "
            >
              <Form.Label>Details <sup style={{color:"red"}}>*</sup></Form.Label>
              <Form.Control
                type="text"
                name="details"
                value={values.details}
                onChange={handleChange}
                isInvalid={!!errors.details}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.details}
              </Form.Control.Feedback>
            </Form.Group>



            <Form.Group
              as={Col}
              md="6"
              className="position-relative "
            >
              <Form.Label>Description <sup style={{color:"red"}}>*</sup></Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="description"
                value={values.description}
                onChange={handleChange}
                isInvalid={!!errors.description}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>



            <Form.Group
              as={Col}
              md="6"
              className="position-relative "
            >
              <Form.Label>Category <sup style={{color:"red"}}>*</sup></Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={values.category}
                onChange={handleChange}
                isInvalid={!!errors.category}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.category}
              </Form.Control.Feedback>
            </Form.Group>



            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative "
            >
              <Form.Label>Price <sup style={{color:"red"}}>*</sup></Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="price"
                value={values.price}
                onChange={handleChange}
                isInvalid={!!errors.price}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.price}
              </Form.Control.Feedback>
            </Form.Group>




            <Form.Group   as={Col}
              md="6" className="position-relative">
            <Form.Label>File <sup style={{color:"red"}}>*</sup> </Form.Label>
            <Form.Control

              type="file"
              required
              name="file"
              onChange={handleChange}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group>
          </Row>
         
      
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  )
}

export default ProductForm