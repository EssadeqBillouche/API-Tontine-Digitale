# 💰 Rotating Contribution Group API

## 🧭 Project Overview

This project provides a **secure and transparent API** for managing rotating savings and contribution groups.  
The system allows users to **register, create and join groups, organize contribution rounds, manage fund distribution**, and track all payments.  

It also integrates an **internal reliability score** that rewards punctual and consistent members — influencing their **turn order** and **eligibility** for future groups.  

---

## 🚀 Key Features

### 👤 User Management
- User registration with full profile data.
- Secure JWT-based authentication.
- Role-based access control (**User** and **Admin**).

### 👥 Group Management
- Creation and management of contribution groups.
- Agreement on contribution amount and frequency.
- Tracking of group activity and payment history.
- Transparent management of beneficiaries and funds.

### 💸 Contribution & Fund Distribution
- Organization of contribution rounds.
- Automated or manual fund distribution.
- Tracking and validation of each transaction.
- Historical view accessible to all group members.

### 🔔 Notifications
- Automatic reminders for upcoming or missed payments.
- In-app and email notifications for group events and updates.

### ⭐ Reliability Score
- Each member has a **Reliability Score** based on:
  - Regularity and punctuality in payments.
  - Consistency in participation.
- The score directly affects:
  - Turn order during fund distribution.
  - Eligibility for joining new groups.

---

## 🧾 Security & Compliance

### 🧩 KYC (Know Your Customer)
A **custom and robust KYC verification system** ensures identity validation before granting access to sensitive actions.

#### Verification Steps
1. Validation of personal data (name, surname, national ID number).
2. Upload and validation of **national ID image**.
3. **Facial verification** by comparing:
   - ID photo, and
   - Live photo/video of the user (future integration).

#### Data Security
- All images are **locally encrypted** or stored via a **secure third-party service**.
- KYC can be:
  - **Automatic**, via `face-api` or an LLM-based verification model.
  - **Manual**, by an administrator.

> ⚠️ No sensitive operation (e.g., group creation, contribution, fund transfer) is allowed without prior KYC verification.

---

## 🛡️ Authentication & Authorization

- **JWT-based authentication** for all endpoints.  
- Role management:
  - **User (Particulier):** can join or create groups, manage their own contributions, and open tickets.
  - **Admin:** full supervision, communication with users, manual KYC approval, and dispute resolution.

---

## 💬 Communication & Traceability

- Each group supports **text and audio messaging** between members.
- Every financial operation is **logged and traceable**, ensuring:
  - Transparent audits,
  - Quick issue resolution,
  - Clear accountability.

---

## 🧠 Technical Stack

| Layer | Technology |
|-------|-------------|
| Language | Node.js (ES Modules) |
| Framework | Express.js |
| Database | MongoDB (Mongoose) |
| Authentication | JWT (JSON Web Token) |
| File Storage | Local or third-party (e.g., AWS S3, Cloudinary) |
| Future AI Integration | face-api.js or custom LLM model for facial recognition |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/rotating-contribution-api.git
cd rotating-contribution-api
