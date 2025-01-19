from fastapi import FastAPI, WebSocket
from ultralytics import YOLO
import cv2
import base64
import asyncio

app = FastAPI()

# Load YOLO model
model_path = "best.pt"
model = YOLO(model_path)

# Class-to-label mapping (update this with your labels)
class_labels = {
    0: "Person",
    1: "Letter H",
    2: "Letter K",
    3: "Letter L",
    4: "Bicycle",
}

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    # Initialize video capture
    camera_index = 0
    cap = cv2.VideoCapture(camera_index)

    if not cap.isOpened():
        await websocket.send_text("Error: Unable to access the camera.")
        return

    try:
        while True:
            ret, frame = cap.read()
            if not ret:
                await websocket.send_text("Error: Failed to capture frame.")
                break

            # Perform object detection on the frame
            results = model.predict(frame, imgsz=640, show=False)
            boxes = results[0].boxes.data

            # Get label with the highest confidence
            if len(boxes) > 0:
                top_label = max(boxes, key=lambda x: x[4])  # Box with the highest confidence
                class_idx = int(top_label[5])  # Get class index
                class_name = class_labels.get(class_idx, "Unknown")  # Map to class name
                confidence = top_label[4]  # Confidence score
                label_text = f"{class_name} ({confidence:.2f})"
            else:
                label_text = "No detection"

            # Encode frame as Base64 for streaming to the frontend
            _, buffer = cv2.imencode('.jpg', frame)
            frame_data = base64.b64encode(buffer).decode('utf-8')

            # Send frame and label over WebSocket
            await websocket.send_json({"frame": frame_data, "label": label_text})

            # Limit frame rate to prevent overloading the frontend
            await asyncio.sleep(0.03)

    except Exception as e:
        print(f"Connection error: {e}")
    finally:
        cap.release()
