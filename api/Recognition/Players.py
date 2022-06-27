import cv2
import os
import numpy as np
import matplotlib.pyplot as plt

subjects = ["", "Courtois", "Cristiano Ronaldo","Dybala", "Kross", "Lionel Messi", "Mohamed Salah", "Neymar","Pogba"]

try: 
    print("loading the model...")
    face_recognizer = cv2.face.LBPHFaceRecognizer_create()
    face_recognizer.read(r"C:\Users\secur\Desktop\testcode\VA_Test\PlayersRecognition\trainedmodel.yml")
    print("model is loaded")
except:
    print("There is No Module!!!")
    
# Train The Model
def detect_face(img):
    #convert the test image to gray image as opencv face detector expects gray images
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    #load OpenCV face detector, I am using LBP which is fast
    #there is also a more accurate but slow Haar classifier
    face_cascade = cv2.CascadeClassifier(r'C:\Users\secur\Desktop\testcode\VA_Test\PlayersRecognition\opencv-files\lbpcascade_frontalface.xml')
    # face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades+'haarcascade_frontalface_default.xml')
    #let's detect multiscale (some images may be closer to camera than others) images
    #result is a list of faces
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.2, minNeighbors=5);
    
    #if no faces are detected then return original img
    if (len(faces) == 0):
        return None, None
    
    #under the assumption that there will be only one face,
    #extract the face area
    (x, y, w, h) = faces[0]
    
    #return only the face part of the image
    return gray[y:y+w, x:x+h], faces[0]

    cv2.putText(img, text, (x, y), cv2.FONT_HERSHEY_PLAIN, 1.5, (0, 255, 0), 2)
def predict(img_path):
    #detect face from the image
    img = cv2.imread("D:/H/Coding/Snake/django Projects/Face Rcognition Web App"+img_path) #"D:\H\Coding\Snake\django Projects\Face Rcognition Web App\media\images\cristiano-ronaldo_133_MQIeBol.png"
    face, rect = detect_face(img)
    #predict the image using our face recognizer 
    try:
        label = face_recognizer.predict(face)
        # label2 = face_recognizer2.predict(face)
        # if label[1] > 50 :
        print(label)
        #get name of respective label returned by face recognizer
        label_text = subjects[label[0]]
        return label_text
    except:
        print("no face")
    return ""









