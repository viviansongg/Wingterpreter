from ultralytics import YOLO
import cv2

# Load your fine-tuned YOLOv11 model
model_path = r"backend\dataset-creation\best-weights\best.pt"
model = YOLO(model_path)

# Set up video capture (default webcam)
camera_index = 0  # Change if you want to use a different camera
cap = cv2.VideoCapture(camera_index)

# Check if the camera opened successfully
if not cap.isOpened():
    print("Error: Unable to access the camera.")
    exit()

print("Press 'q' to exit.")

# Real-time inference loop
while True:
    ret, frame = cap.read()
    if not ret:
        print("Error: Failed to capture frame.")
        break

    # Perform object detection on the frame
    results = model.predict(frame, imgsz=640, show=False)

    # Annotate the frame with predictions
    annotated_frame = results[0].plot()  # Annotated frame from results

    # Display the live feed with detections
    cv2.imshow("YOLOv11 Live Detection", annotated_frame)

    # Press 'q' to quit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release resources
cap.release()
cv2.destroyAllWindows()
