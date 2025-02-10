# Laravel Boilerplate

This is a boilerplate for a portal.

## Features
The portal has a **public area**, including pages like "About" and a **product listing**.  
Users can **register and log in**, leading to a **dashboard area**.  
The backend is managed with **Filament** (`admin.domainName.com`).  

The portal supports **multiple domains (tenants)**:  

- `domainName.com`  
- `domainName.it`  
- `domainName.ch`  

## User Registration & Product Management
- A user can **register on a specific portal** and can insert products **only** on the portal where they registered.
- To insert products on other tenant portals, they must upgrade to a **premium user**.
- **Product Approval**:  
  - **Normal users**: When adding a product, it must be **approved by an admin** before appearing on the portal.
  - **Premium users**: Can publish products instantly **without admin approval**.

## Product Visibility
- **Regular users** can only see products listed on the portal they are visiting (e.g., on `domainName.it`, only products added to that portal are visible).
- **Premium users** can view products from both their registered portal and all other portals (`domainName.it`, `domainName.ch`, etc.).
- `domainName.com` will **aggregate products from all tenant portals**. Clicking on a product will redirect the user to the respective tenant portal.

## Admin Panel (`admin.domainName.com`)
From the **Filament admin panel**, administrators can:  
- **Manage all tenants** and all products across every portal.  
- **Approve or reject** products submitted by normal users before they appear online.  
- Use a **dropdown filter** to switch between `domainName.it`, `domainName.ch`, etc., for easier management.  

---

## Technical Stack  

### **Portal**  
- **Laravel 11.x**  
- **Vue 3.x**  
- **Vue I18n**: Multi-language support   
- **Axios**: API requests  
- **Pinia**: State management  
- **Vuetify.js**: UI component library  
  - **Removed TailwindCSS** and replaced with Vuetify (using SASS)  

### **Authentication**  
- **Laravel Socialite**: Social login for registration and authentication  

### **Multi-Tenancy & Permissions**  
- **Spatie Multi-Tenancy**:  
  - **Three predefined tenants** with the ability to add more from the Filament backend.  
- **Spatie Roles & Permissions**:  
  - User role management, including premium features and product approval logic.  
