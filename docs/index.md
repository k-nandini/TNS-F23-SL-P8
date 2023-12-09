# Color Theory API Documentation

## Getting Started

To get started with the Color Theory API, you need to have a basic understanding of HTTP requests and responses. The API returns responses in JSON format.

## API

The API consists of the following endpoints:

### 1. Complementary Color

- **Endpoint:** `/api/color/:hex`
- **Method:** 'GET'
- **Description:** Calculates the complementary color, analogous colors and triadic colors for a given HEX color.
- **URL Params:**
  - Required: `hex=[string]` (HEX color code without the `#` symbol)
- **Sample Call:**
  ```javascript
  fetch('URL/api/color/ff0000')
    .then(response => response.json())
    .then(data => console.log(data));
  ```
- **Notes:** 
  - The HEX color code should not include the `#` symbol. 
  - Replace 'URL' in the sample call with the full URL prefix.

## Error Handling

- **Success Response:**
  - **Code:** `200 OK`
  - **Content:** `{ original: "#hex", complementary: "#hex" }`
- **Error Response:**
  - **Code:** `400 BAD REQUEST`
  - **Content:** `{ error: "Invalid HEX color format" }`

## Rate Limiting

- **Warning:** This app is hosted on a cloud platform called Render. Being a third party app, Render may have rules that may limit the requests sent to this app.

## CORS (Cross-Origin Resource Sharing)

- **External API Users:** Express JS may not permit the API being called from resources outside of the app's root directory, if such an error persists in the browser's console log, please contact me to help resolve this error and enable CORS for your APP. 

- **Note:** 
  - CORS is enabled by default for all endpoints of this app for ease of use.

## App Not Found

- **Note:** 
  - Render's free tier disables the app after an idle period, which may hinder the usage of this API, please contact me if such a scenario occurs. 
