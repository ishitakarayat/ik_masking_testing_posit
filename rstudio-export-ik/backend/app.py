from fastapi import FastAPI
from core import secret_logic # Will import from .so once compiled

app = FastAPI()

@app.get("/api/hello/{name}")
def read_item(name: str):
    return {"message": secret_logic(name)}
