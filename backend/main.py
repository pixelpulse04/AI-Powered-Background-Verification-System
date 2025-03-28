from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import cv2
import numpy as np
import base64
from PIL import Image, ImageChops, ImageEnhance
import io

app = FastAPI()

# ✅ Allow CORS for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set this to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def error_level_analysis(image: Image.Image, threshold: int = 15):
    """ Perform Error Level Analysis (ELA) to detect image manipulation. """
    temp = io.BytesIO()
    image.save(temp, format="JPEG", quality=90)
    temp.seek(0)
    compressed_image = Image.open(temp)

    ela_image = ImageChops.difference(image, compressed_image)

    extrema = ela_image.getextrema()
    max_difference = max([ex[1] for ex in extrema])
    scale = 255.0 / max_difference if max_difference > 0 else 1
    ela_image = ImageEnhance.Brightness(ela_image).enhance(scale)

    ela_array = np.array(ela_image)
    
    is_forged = max_difference > threshold

    return ela_array, is_forged

@app.post("/detect-forgery/")
async def detect_forgery(file: UploadFile = File(...)):
    try:
        image = Image.open(file.file).convert("RGB")
        ela_result, is_forged = error_level_analysis(image)

        _, buffer = cv2.imencode(".png", ela_result)
        ela_base64 = base64.b64encode(buffer).decode("utf-8")  # Convert to Base64

        return {
            "is_forged": is_forged,
            "message": "Forgery Detected" if is_forged else "Image is Authentic",
            "ela_image": ela_base64,  # Return Base64 string
        }
    except Exception as e:
        return {"error": str(e)}
