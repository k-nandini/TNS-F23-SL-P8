# Color Theory API Documentation

## Getting Started

To get started with the Color Theory API, you need to have a basic understanding of HTTP requests and responses. The API is RESTful and returns responses in JSON format.

## Endpoints

The API consists of the following endpoints:

### 1. Complementary Color

- **Endpoint:** `/api/color/:hex/complementary`
- **Method:** `GET`
- **Description:** Calculates the complementary color for a given HEX color.
- **URL Params:**
  - Required: `hex=[string]` (HEX color code without the `#` symbol)
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:** `{ original: "#hex", complementary: "#hex" }`
- **Error Response:**
  - **Code:** `400 BAD REQUEST`
  - **Content:** `{ error: "Invalid HEX color format" }`
- **Sample Call:**
  ```javascript
  fetch('/api/color/ff0000/complementary')
    .then(response => response.json())
    .then(data => console.log(data));
  ```
- **Notes:** The HEX color code should not include the `#` symbol.

### 2. Analogous Colors

- **Endpoint:** `/api/color/:hex/analogous`
- **Method:** `GET`
- **Description:** Fetches a pair of analogous colors for a given HEX color.
- **URL Params:**
  - Required: `hex=[string]`
- ... [similar structure as above]

### 3. Triadic Colors

- **Endpoint:** `/api/color/:hex/triadic`
- **Method:** `GET`
- **Description:** Calculates a set of triadic colors based on the input HEX color.
- ... [similar structure as above]

## Error Handling

**Error 1** 

If the input Hex code is not formated properly "#1223456" then it will give an error: 'Invalid HEX color format'.  

## Rate Limiting

This app is hosted on a cloud platform which is called Render. Being a third party app, they may have rules that may limit the requests sent to this app, and rate limiting may be required. 

## CORS (Cross-Origin Resource Sharing)

Express JS may not permit the API being called from resources outside of the app's root directory, if such an error persists, please contact me to help resolve this error and enable CORS for your APP. 

## App Not Found

Render's free tier disables the app after an idle period, which may hinder the usage of this API, please contact me if such a scenario occurs. 
