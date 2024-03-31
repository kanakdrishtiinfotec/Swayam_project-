import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

function CategoryForm() {
    const { Formik } = formik;

  const schema = yup.object().shape({
    categoryName: yup.string().required(),
    city: yup.string().required(),
    file: yup.mixed().required(),
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        categoryName: '',
        file: null,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form className=' ' noValidate onSubmit={handleSubmit}>
          <Row className="" style={{marginBottom:"2rem"}}>
            <h3 className='mb-4 text-center'>Enter Details For Category</h3>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative "
            >
              <Form.Label>Category Name <sup style={{color:"red"}}>*</sup></Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="categoryName"
                value={values.categoryName}
                onChange={handleChange}
                isInvalid={!!errors.categoryName}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.categoryName}
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

export default CategoryForm