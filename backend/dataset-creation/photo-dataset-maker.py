import cv2
import time
import numpy as np
from datetime import datetime

def display_countdown_and_capture():
    # Initialize camera
    cap = cv2.VideoCapture(0)
    
    if not cap.isOpened():
        print("Error: Could not open camera")
        return

    # Letters to display
    letters = ['H', 'K', 'Y', 'D', 'L']
    
    # Initial countdown
    print("Starting in 3 seconds...")
    for i in range(3, 0, -1):
        ret, frame = cap.read()
        if not ret:
            print("Error: Could not read frame")
            return
            
        # Display countdown number
        cv2.putText(frame, str(i), (int(frame.shape[1]/2), int(frame.shape[0]/2)), 
                    cv2.FONT_HERSHEY_SIMPLEX, 4, (255, 255, 255), 4)
        cv2.imshow('Camera', frame)
        cv2.waitKey(1000)

    # Display letters and capture images
    for letter in letters:
        # Show "Press SPACE when ready" message
        while True:
            ret, frame = cap.read()
            if not ret:
                print("Error: Could not read frame")
                return
            
            # Create a white background rectangle for better visibility
            cv2.rectangle(frame, (50, int(frame.shape[0]-100)), (400, int(frame.shape[0]-50)), (255, 255, 255), -1)
            # Add black text on white background
            cv2.putText(frame, "Press SPACE when ready", (60, int(frame.shape[0]-70)),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 0), 2)
            cv2.imshow('Camera', frame)
            
            # Wait for space key
            key = cv2.waitKey(1) & 0xFF
            if key == ord(' '):
                break
        
        ret, frame = cap.read()
        if not ret:
            print("Error: Could not read frame")
            return
            
        # Display letter
        cv2.putText(frame, letter, (int(frame.shape[1]/2), int(frame.shape[0]/2)), 
                    cv2.FONT_HERSHEY_SIMPLEX, 4, (255, 255, 255), 4)
        cv2.imshow('Camera', frame)
        cv2.waitKey(1000)
        
        # Capture 10 images for each letter
        for i in range(10):
            ret, frame = cap.read()
            if not ret:
                print("Error: Could not read frame")
                return
                
            # Save image with timestamp and letter
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S_%f")
            filename = f"image_{letter}_{timestamp}_{i}.jpg"
            cv2.imwrite(filename, frame)
            time.sleep(0.1)  # Wait for 0.1 seconds between captures
            
            # Display the frame
            cv2.putText(frame, letter, (int(frame.shape[1]/2), int(frame.shape[0]/2)), 
                        cv2.FONT_HERSHEY_SIMPLEX, 4, (255, 255, 255), 4)
            cv2.imshow('Camera', frame)
            cv2.waitKey(1)

    # Clean up
    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    display_countdown_and_capture()
