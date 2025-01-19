# Description

Wingterpreter is an interactive game that helps users practice American Sign Language (ASL) through a unique and engaging adaptation of Flappy Bird. The game leverages computer vision and machine learning to recognize hand gestures as input, allowing players to control the bird by signing ASL letters correctly.

## Features

- 🎮 Sign to Play – Control the bird’s movement by signing ASL letters.
- 🔍 Real-Time Gesture Recognition – Uses a machine learning model to detect hand signs via computer vision.
- 🔠 Randomized Letter Challenges – Players are presented with two randomly generated ASL letters, each corresponding to either an upward or downward movement.
- ✅ Accuracy-Based Movement – If the correct ASL letter is signed, the bird moves accordingly; otherwise, no movement occurs.
- 📈 Engaging Learning Experience – Reinforces ASL letter recognition through a gamified approach.

# Tech Stack

### Front-end
- HTML/CSS/JavaScript
- React
- Tailwindcss
- Chakra UI

### Back-end
- Python – Core game and machine learning logic
- Huggingface (for the model)
- Roboflow(data annotation)
- Google Colab/Local CPU (Training Model)
 
# How It Works

1. The game displays two random ASL letters on the screen.
2. One letter corresponds to moving up, the other to moving down.
3. The player signs the correct letter using their hand.
4. The computer vision model detects and verifies the sign.
5. If correct, the bird moves in the intended direction; if incorrect, the bird stays in place.

# Future Improvements

- 🎭 Support for dynamic ASL words and phrases
- 🏆 Scoring system to track progress
- 🖥️ Web-based or mobile app version for wider accessibility
