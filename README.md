## 📌 **Project Overview**
---
This project focuses on the **automation testing** of the **Demo Web Shop** e-commerce platform using **Cypress**. The goal is to verify the core functionalities of the website, ensuring that critical features like **login**, **search**, **cart management**, **checkout**,**Social Media**  work as expected across multiple devices. The tests are built with an emphasis on **reusability** and **scalability** to allow easy extension as the application evolves.

---

## 🛠️ **Tools and Technologies Used**

![Cypress](https://img.shields.io/badge/Cypress-Testing-blue)  
![JavaScript](https://img.shields.io/badge/JavaScript-Language-yellow)  
![POM](https://img.shields.io/badge/Page_Object_Model-Framework-lightblue)


---

## 📂 **Features Tested**
---
1. **User Authentication:**
   - Verified the **login** and **registration** functionality with valid credentials.
   - Tested **password recovery** to ensure proper functionality for account recovery.

2. **Search Functionality:**
   - Ensured that **search results** match expected results based on queries.
   - Validated search filters like category, price, and brand.

3. **Cart and Wishlist Management:**
   - Validated the ability to **add**, **remove**, and **update** products in both the **cart** and **wishlist**.
   - Verified that the **cart** retains items across user sessions.

4. **Checkout Process:**
   - Fully tested the **checkout workflow**, including applying coupon codes, entering shipping details, and processing payments.
   - Ensured that the **order confirmation page** is correctly displayed after completing the purchase.
---

## 📄 **Artifacts Included**
---
This project includes various documentation and reports to ensure comprehensive coverage and traceability:

1. **Test Scripts:**
   - Modular **Cypress** test scripts following the **Page Object Model (POM)**, covering core features like login, search, register.
   - Each test case is structured to ensure reusability and maintainability, making the tests scalable.

2. **Mindmap:**
   - A **mindmap** outlining the testing strategy, covering major areas of testing like functional, non-functional, UI, and API testing.

3. **Test Plan:**
   - A comprehensive **Test Plan** document detailing the scope, objectives, testing types, strategy, resource requirements, and timelines.
   - The plan outlines the testing approach for both manual and automated tests.

4. **Manual Test Cases:**
   - **Manual test cases** covering performance, security, and usability tests.
   - These cases ensure the application can handle large user loads, is secure, and provides a good user experience.

5. **Test Summary Report:**
   - A summary of test execution results, including the number of test cases passed, failed, skipped, and details on any major defects found.
   - The report includes high-level recommendations based on the testing outcomes.

6. **Presentation Report:**
   - A **presentation report** summarizing key findings,test execution results, and suggestions for improvement. This report is aimed at stakeholders and developers to help them prioritize work.
## ✨ **Highlights**
---
- **Page Object Model (POM)**: Used for organizing the test code in a way that makes it easier to maintain and scale over time.
- **Comprehensive Test Coverage:** Includes functional, non-functional, UI, and regression testing for all major workflows.
- **Detailed Documentation:** The project includes essential documentation like the **Test Plan**, **Test Summary**, and **Bug Report** for transparency and traceability.

---

## 🌐 **Demo Web Shop URL**
[Demo Web Shop](https://demowebshop.tricentis.com/)

---

## 📝 **Conclusion**
---
This project successfully implemented **Cypress-based automation tests** for the **Demo Web Shop**. The tests cover key user functionalities and UI components, ensuring the website remains stable and user-friendly across various platforms. The use of **Page Object Model (POM)** made the test scripts modular, reducing code repetition and improving maintainability.

The identified bugs have been documented and shared with the development team to prioritize fixes. The comprehensive **Test Plan**and other artifacts ensure that the testing process was thorough and transparent.

---
 # ProjectDemoWebShop
|cypress
|
|---tests.cy.js
|
|
|
|--pages
    |--HomePage.js
    |--LoginPage.js
    |--RegisterPage.js
    |--SocialMedia.js

