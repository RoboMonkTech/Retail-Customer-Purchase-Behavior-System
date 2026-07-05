# 🛒 Retail Customer Purchase Behavior Classification System

A web-based Retail Customer Purchase Behavior Classification System developed using Machine Learning concepts and deployed as an interactive web application. The machine learning model was developed in Google Colab using a Random Forest Classifier, while the web application demonstrates customer purchase behavior prediction based on business intelligence data.

---

# 📌 Project Objective

The objective of this project is to classify customers based on their purchasing behavior using business intelligence data. The system helps retail businesses identify high-value customers and understand customer purchasing patterns for better marketing and sales strategies.

---

# 📂 Dataset Information

**Dataset Name:** Retail Customer Purchase Behavior Dataset

**Dataset Type:** CSV

**Domain:** Retail Business Intelligence

The dataset contains customer details such as:

- Customer Age
- Annual Income
- Spending Score
- Number of Purchases
- Membership Type
- Purchase Behavior Category

---

# ⚙️ Machine Learning Workflow

The machine learning model was developed using the following steps:

1. Import Required Libraries
2. Load the Dataset
3. Explore the Dataset
4. Handle Missing Values
5. Encode Categorical Features
6. Split Dataset into Training and Testing Sets
7. Train the Random Forest Classifier
8. Predict Customer Purchase Behavior
9. Evaluate Model Performance
10. Test the Model with New Customer Data

---

# 🤖 Algorithm Used

**Random Forest Classifier**

Random Forest is a supervised machine learning algorithm that combines multiple decision trees to improve prediction accuracy and reduce overfitting. It is highly effective for customer classification and business intelligence applications.

---

# 🌐 Web Application

The web application provides an interactive dashboard where users can enter customer information and receive an instant prediction of customer purchase behavior.

### Features

- Business Intelligence Dashboard
- Customer Information Form
- Purchase Behavior Prediction
- Confidence Percentage
- Customer Category
- Responsive Design

---

# 📊 Technologies Used

## Machine Learning

- Python
- Google Colab
- Pandas
- NumPy
- Matplotlib
- Scikit-learn

## Web Development

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

## Deployment

- GitHub
- Vercel

---

# 📝 Input Parameters

The web application accepts the following inputs:

- Customer Name
- Age
- Annual Income
- Spending Score
- Number of Purchases
- Membership Type

---

# 🧠 Prediction Logic (Web Demo)

The web application demonstrates customer classification using the following rules:

- Annual Income ≥ ₹60,000
- Spending Score ≥ 70
- Number of Purchases ≥ 10
- Membership Type = Premium

If these conditions are satisfied, the application predicts **High Purchase Customer**. Otherwise, it predicts **Low Purchase Customer**.

---

# 📈 Prediction Output

The application displays:

- High Purchase Customer / Low Purchase Customer
- Confidence Percentage
- Customer Category
- Personalized Customer Message

---

# 📂 Project Structure

```
Retail-Customer-Purchase-Behavior-System/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── Retail_Customer_Behavior.ipynb
├── customer_purchase_dataset.csv



---

# 🌐 Live Demo

https://retail-customer-purchase-behavior-s.vercel.app/


---

# 🚀 Future Enhancements

- Integrate the trained Machine Learning model with the web application.
- Develop a backend using Flask or FastAPI.
- Store customer information in a database.
- Add user authentication.
- Build an analytics dashboard for retail managers.
- Generate customer purchase reports.

---

⭐ This project demonstrates the implementation of a Retail Customer Purchase Behavior Classification System using Machine Learning concepts together with an interactive web interface.
