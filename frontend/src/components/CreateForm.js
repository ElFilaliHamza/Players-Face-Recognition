import React, { useState } from "react";

// React-Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../API";

const CreateMyModel = () => {

    const [data, setData] = useState({
        image_url: ""
    });
    const [errors, setErrors] = useState({
        image_url: ""
    });


    const handleChange = ({ currentTarget: input }) => {
        let newData = { ...data };
        newData[input.name] = input.value;
        setData(newData);
    };

    const handleImageChange = (e) => {
        let newData = { ...data };
        newData["image_url"] = e.target.files[0];
        setData(newData);
    };

    const doSubmit = async (e) => {
        e.preventDefault();
        const response = await API.createMyModelEntry(data);
        if (response.status === 400) {
            setErrors(response.data);
            console.log(errors);
        }
    };

    return (

        <Form>
            <Row>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Player Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="image_url"
                        accept="image/jpeg,image/png,image/gif"
                        onChange={(e) => {
                            handleImageChange(e);
                        }}
                    />
                    {errors.image_url && (
                        <Form.Text className="alert-danger" tooltip>
                            {errors.image_url}
                        </Form.Text>
                    )}
                </Form.Group>
            </Row>
            <Button
                className="myBtn"
                variant="primary"
                
                type="submit"
                onClick={(e) => doSubmit(e)}
            >
                Submit
            </Button>
        </Form>
    );
};

export default CreateMyModel;



var formdata = new FormData();
formdata.append("image", fileInput.files[0], "/C:/Users/secur/Downloads/Capture.PNG");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/api/Upload", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));