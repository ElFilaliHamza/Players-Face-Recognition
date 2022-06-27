import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios' ;
import ReactLoading from "react-loading";


export default class Form extends Component {
    constructor(props){
        super(props);
    }
    state = { selectedFile: null, predictedName: null, isUploading: false, imgSrc:null }
    
    fileChangedHandler = event => {
        const file = event.target.files[0]
        console.log(file)
        this.setState({ selectedFile: event.target.files[0] })
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            this.setState({
                imgSrc: [reader.result]
            })
            }.bind(this);
        this.setState({ predictedName:null })
        console.log(url) 
    }

    uploadHandler = () => {
        console.log(this.state.selectedFile)
        if (this.state.selectedFile){
            this.setState({ isUploading:true })
            var formdata = new FormData();
            formdata.append("image", this.state.selectedFile, this.state.selectedFile.name);
    
            var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
            };
    
            fetch("http://127.0.0.1:8000/api/Upload", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({ isUploading:false })
                if(result === '""') {
                    this.setState({ predictedName: "Please choose a good quality image, or make sur that the face is showing completly" })
                }else{
                    this.setState({ predictedName: "I think this is " + result })
                }
                console.log(result)    
            })
            .catch(error => {
                this.setState({ isUploading:false })
                this.setState({ predictedName:"Please, choose a good quality image" })
                console.log('error', error)
            });
        }
      }
    render(){
        if (this.state.isUploading ){
            return <div class="loading">
                <ReactLoading type="bars" color="#ffff"
        height={100} width={50} />
            </div>;
        }
        else{
        return <div class="my-form">
                    <div class="wrapper">
                        <div class="file-upload">
                            <input onChange={this.fileChangedHandler} className="myInput" name="file-upload-input" id="file-upload-input" type="file" />
                            <i class="fa fa-arrow-up fa-2x"></i>
                        </div>
                    </div>
                    <img className="myImage"src={this.state.imgSrc} />
                    <p>{this.state.predictedName}</p>
                    <button className="button" onClick={this.uploadHandler}><span>who is this player ?</span></button>
                </div>;
        }
    }
}




// <div class="file-upload-select">
//                         <div class="file-select-button" >Choose File</div>
//                     <div class="file-select-name">No file chosen...</div> 
//                     <input onChange={this.fileChangedHandler} type="file" className="myInput" name="file-upload-input" id="file-upload-input"/>
//                     </div>

