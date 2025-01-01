# ⚽ Players-Face-Recognition 

(It was three years ago 🥲🥰)
Players-Face-Recognition is a web application that leverages **computer vision** and **machine learning** to recognize famous soccer players in uploaded images. Built with **Django** and powered by **OpenCV's LBPHFaceRecognizer algorithm**, the app identifies players like **Cristiano Ronaldo**, **Lionel Messi**, **Neymar Jr.**, and others.

---

## 🌟 Features

- 📸 **Upload Images**: Upload images containing soccer players.
- 🧠 **Player Recognition**: Identify famous players in the uploaded images.
- 📊 **Results Display**: View player names and confidence levels for each recognition.
- 🖥️ **User-Friendly Interface**: Built with Django templates for a seamless experience.

---

## 🚀 Setup

### Prerequisites

Ensure you have the following installed:
- **Python** 3.7+
- **Django** 3.2+
- **OpenCV** 4.5+
- **NumPy**

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ElFilaliHamza/Players-Face-Recognition.git
   cd Players-Face-Recognition
   ```

2. **Create and Activate a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set Up the Database**:
   ```bash
   python manage.py migrate
   ```

5. **Run the Development Server**:
   ```bash
   python manage.py runserver
   ```

---

## 🖥️ Usage

1. Open your browser and navigate to: `http://localhost:8000`.
2. Click the **"Upload Image"** button and select an image containing soccer players.
3. Submit the image for recognition.
4. View the results, including recognized players' names and confidence levels.

---

## 🧑‍💻 Model Training

The face recognition model is trained using **OpenCV's LBPHFaceRecognizer algorithm**. Training code and dataset exploration are located in the `./api/Recognition` directory.

---

## 🛠️ Technologies Used

- **Django**: Backend web framework.
- **OpenCV**: Computer vision library for face recognition.
- **NumPy**: Numerical computing library.
- **HTML/CSS**: Frontend design.

---

## ⚠️ Limitations and Future Improvements

### Current Limitations:
- Limited to recognizing a predefined set of famous players.
- Accuracy may vary based on image quality and face angles.

### Future Enhancements:
- 🕒 **Real-Time Recognition**: Add webcam input for live recognition.
- 🧑‍🏫 **Custom Training**: Allow users to train the model on new players via the web interface.
- ⚡ **Performance Optimization**: Improve recognition speed and accuracy.
- 📚 **Expanded Database**: Include a larger dataset of players.

---

## 📂 Dataset

The dataset used for training is not included in this repository due to size constraints.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Submit **pull requests**.
- Open **issues** to discuss potential improvements.

---

## 📜 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## 📹 Demo

Check out the app in action!  
![Demo Video](Test-App.mp4)


---

### 🌐 Connect with the Developer

- GitHub: [ElFilaliHamza](https://github.com/ElFilaliHamza)
