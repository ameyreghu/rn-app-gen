# ⚛️ rn-app-gen

A lightweight Server-Driven UI (SDUI) engine built with **React Native** that dynamically renders full mobile applications based on a JSON configuration. This project lets you define routes, navigation, components, and state — all at runtime.

---

## 📸 Screenshots


| Dashboard | Listing | Form |
|-----------|---------|------|
| ![Dashboard](screenshots/dashboard.png) | ![Listing](screenshots/listing.png) | ![Form](screenshots/form.png) |

---

## 🧩 How It Works

This project uses a declarative JSON structure to:

- Define app-level metadata: name, version, theme
- Configure bottom navigation and screen routing
- Render screens like dashboards, forms, and listings
- Dynamically populate content from remote APIs
- Define UI styles and component layouts inline

The JSON is parsed at runtime, and components are rendered accordingly — **no need to hardcode screens**.

---

## 🛠 Example Features from Demo Config

- 📱 **Dashboard** with carousel, text, and card groups
- 🔍 **Listings** populated via external API calls (`jsonplaceholder.typicode.com`)
- 📝 **Dynamic Forms** for actions like opening a loan or fixed deposit
- 🚀 **Bottom Navigation** rendered from JSON
- 🎨 Theme configuration with primary color

---

## 🧾 Sample JSON Structure

```json
{
  "appName": "JDF POC1",
  "initialRoute": "home",
  "routes": ["home", "form1", "listing1"],
  "theme": { "primary": "#007BFF" },
  "screens": [
    {
      "type": "dashboard",
      "route": "home",
      "bottomNavigaton": [
        { "label": "Home", "icon": "home" },
        { "label": "Reports", "icon": "assessment" }
      ],
      "pages": [
        {
          "type": "base",
          "components": [
            { "type": "text", "text": "Welcome to JDF" },
            { "type": "carousel", "data": [ ... ] },
            { "type": "cardGroup", "cardData": { "data": [ ... ] } }
          ]
        }
      ]
    }
  ]
}
