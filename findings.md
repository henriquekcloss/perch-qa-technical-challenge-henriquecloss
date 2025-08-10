# Findings

## Bug: Price Filter Buttons Not Functioning Correctly

### Description
When clicking on the price filter buttons, both ascending and descending, the sorting does not work as expected. The products are not properly reordered according to the selected price filter.

### Steps to Reproduce
1. Go to the homepage.
2. Click on the price filter button for ascending order.
3. Observe that the product list does not sort correctly from lowest to highest price.
4. Click on the price filter button for descending order.
5. Observe that the product list does not sort correctly from highest to lowest price.

### Expected Result
The products should be displayed sorted by price in the selected order (ascending or descending).

### Actual Result
The sorting does not happen correctly, and products remain in an incorrect order.

---

## Bug: Incorrect Quantity and Subtotal Calculation in Cart

### Description
When clicking on a product's details page, changing the quantity (2, 3, 4, or 5), adding it to the cart, then returning to the previous page to select a new quantity and adding to the cart again, the cart shows an incorrect total quantity and subtotal price.

### Steps to Reproduce
1. Navigate to a product's details page.
2. Change the quantity to a number greater than 1 (e.g., 2).
3. Click "Add to Cart".
4. Go back to the previous page.
5. Change the quantity to another number (e.g., 3).
6. Click "Add to Cart" again.
7. Go to the cart and observe the quantity and subtotal.

### Expected Result
The cart should update to reflect the total correct quantity and calculate the subtotal price accordingly.

### Actual Result
The cart displays incorrect quantity and subtotal price, not reflecting the multiple additions with different quantities.

---

## Bug: Phone Field Allows Letters and Special Characters After 10 Digits

### Description
In the shipping address form, the Phone input field allows entering letters and special characters after typing 10 numeric digits. For example, a user can enter "1234567891!@#$#@". Without proper backend validation, this may result in inconsistent and invalid data being saved in the database.

### Steps to Reproduce
1. Navigate to the shipping address form.
2. Enter a valid 10-digit phone number.
3. Continue typing letters and special characters after the digits.
4. Submit the form.

### Expected Result
The phone field should restrict input to numeric digits only, or at least enforce proper validation to prevent invalid characters from being accepted.

### Actual Result
The phone field allows letters and special characters after 10 digits, potentially leading to invalid data storage.

---

## Bug: ZIP Code Validation Message is Ambiguous

### Description
In the shipping address form, the ZIP Code field displays a message informing the user that the ZIP Code must have between 4 to 5 digits. However, it does not specify that only numeric digits are allowed. This ambiguity may confuse users and lead to incorrect input.

### Steps to Reproduce
1. Go to the shipping address form.
2. Observe the validation message for the ZIP Code field.
3. Notice that the message only mentions the length (4 to 5 digits) but not that characters must be numeric.

### Expected Result
The validation message should clearly specify that only numeric digits are allowed, avoiding confusion.

### Actual Result
The message only mentions the length requirement without clarifying the numeric-only rule.

---

## Bug: CVV Field Validation Message is Ambiguous

### Description
On the Payment Information page, the CVV field displays a message informing the user about the expected input length or format. However, it does not clearly specify that only numeric digits are allowed. This lack of clarity may confuse users and result in invalid data entry.

### Steps to Reproduce
1. Navigate to the Payment Information page.
2. Focus on the CVV input field.
3. Observe the validation message or guidelines related to the CVV field.
4. Notice the message does not explicitly mention that only numeric digits are accepted.

### Expected Result
The validation message should explicitly state that only numeric digits are allowed for the CVV field to prevent confusion and incorrect input.

### Actual Result
The message only mentions length or format without clarifying the numeric-only requirement.

---

## Bug: Expiry Date Field Accepts Expired Dates

### Description
On the Payment Information page, the Expiry Date field allows users to enter past (expired) dates. This can lead to payment failures and a poor user experience, as expired cards should be rejected immediately.

### Steps to Reproduce
1. Navigate to the Payment Information page.
2. Enter an expired date (a date before the current month and year) in the Expiry Date field.
3. Attempt to proceed with the payment.
4. Observe that the system accepts the expired date without validation errors.

### Expected Result
The Expiry Date field should validate the input and reject any expired dates, preventing users from submitting invalid payment information.

### Actual Result
Expired dates are accepted, allowing users to proceed with invalid payment details.

---

# Improvement Suggestions

### Backend Validation and Business Logic Enforcement

The system currently lacks a robust backend layer responsible for enforcing validation rules and centralizing business logic. This absence can lead to multiple unhandled errors and inconsistent behaviors that directly affect the user experience. Implementing server-side validations would not only enhance data integrity and security but also ensure that critical rules—such as input validation for payment and shipping details—are consistently applied across all client interfaces.

### User Interface and User Experience Enhancements

There is significant room for UI/UX improvements to create a smoother and more intuitive shopping experience. For instance, when the shopping cart is empty, the interface displays two "Continue Shopping" buttons positioned in different areas of the page, both performing the same function. This redundancy can confuse users and clutter the interface. Consolidating these elements and providing clearer visual cues would streamline navigation.

Additionally, improving form validations with clear, user-friendly messages and input restrictions (e.g., disallowing invalid characters or expired dates) can reduce user errors and frustration. Thoughtful enhancements such as dynamic feedback, disabling irrelevant controls, and consistent styling will greatly improve overall usability and customer satisfaction.

Several error scenarios could have been implemented in the automation, such as attempting to make a purchase with empty address fields. However, the system still lacks backend validations.
