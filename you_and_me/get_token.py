import requests
import json

url = "http://127.0.0.1:8000/api/token/"
payload = {
    "username": "admin",
    "password": "1234"
}
headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, data=json.dumps(payload))

if response.status_code == 200:
    token = response.json().get("access")
    print(f"Токен: {token}")
else:
    print(f"Ошибка: {response.status_code}, {response.text}")
