# frontend-chatbot-V2

A lightweight chatbot frontend application built with Node.js.

## Prerequisites

- **Node.js**: v20.17.0
- **npm**: v11.2.0
- **Yarn**: v1.22.22

## Installation

1. Clone the repository:

    ```bash
    git clone <repo-url> frontend-chatbot-V2
    cd frontend-chatbot-V2
    ```

2. Install dependencies:

    ```bash
    yarn install
    ```

## Environment Variables

Copy the example file and update the values:

```bash
cp .env.example .env
# then open .env and fill in your configuration
```

## Build & Run

- **Build** the project:

    ```bash
    yarn build
    ```

- **Run** in development mode:

    ```bash
    yarn dev
    ```

## Linting & Formatting

- **Check** for ESLint errors and warnings:

    ```bash
    yarn check
    ```

- **Fix** lint errors and format code:

    ```bash
    yarn prettier
    ```

---

## 🚀 Environments Overview

### ✅ Production

- **Branch**: `main`
- **URL**: [mc-chatbot.inloya.com](https://mc-chatbot.inloya.com)

---

### 🛠️ Development

- **Branch**: `dev`

---

### 🧪 Concierge Testing

- **Branch**: `concierge`
- **Purpose**: Testing environment for Concierge

---

### 💾 Backup

- **Branch**: `backup`
- **Purpose**: Backup before concierge deployment
