from transformers import LayoutLMv3Processor, LayoutLMv3ForTokenClassification
import torch
from PIL import Image

# Load model and processor
processor = LayoutLMv3Processor.from_pretrained("microsoft/layoutlmv3-base")
model = LayoutLMv3ForTokenClassification.from_pretrained("microsoft/layoutlmv3-base")

def extract_text(image_path):
    image = Image.open(image_path).convert("RGB")
    encoding = processor(image, return_tensors="pt")

    with torch.no_grad():
        outputs = model(**encoding)
    
    # Process output
    predicted_tokens = torch.argmax(outputs.logits, dim=-1)
    words = processor.tokenizer.convert_ids_to_tokens(predicted_tokens[0])
    
    return " ".join(words)
