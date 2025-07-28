
## Cypress Automation Test for BUILDAS - README

This project covers UI testing using:  
**Cypress** – for browser-based UI testing

---

## 🛠️ Prerequisites

Before you begin, ensure the following tools are installed on your system:

1. **Node.js** v18 or above  
2. **VS Code** (Latest version)

---

## 🚀 Getting Started

### 1. Open Visual Studio Code

- Launch Visual Studio Code on your system.  
- Navigate to the folder you want to download the project in, e.g.:  
  ```bash
  cd user/documents
  ```  
- Open a new terminal in VS Code (`Ctrl + ~` or go to **Terminal > New Terminal**).

### 2. Clone the Repository

In the terminal, run the following commands to clone the project and navigate into the folder:

```bash
git clone https://github.com/Darmolyna/googleBuildas
cd googleBuildas
```

### 3. Install All Dependencies

Install all required dependencies (like Cypress) listed in `package.json`:

```bash
npm install
```

---

## ✅ Running Cypress Tests

### Option 1: Run Cypress in Interactive Mode (UI)

```bash
npx cypress open
```

This opens the Cypress Test Runner for manual test execution.

### Option 2: Run Cypress Tests in CLI (Headless)

```bash
npx cypress run
```