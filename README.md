# JavaScript Code Projects

This folder contains 10 simple JavaScript projects. Each project helps you learn and practice different JavaScript concepts. Here is a summary of each project, what it does, and the main things used to build it.

---

## 1. Todo List

**What is it?**
- A simple app to add, edit, complete, and delete tasks.

**Main things used:**
- `localStorage` to save your tasks even after refreshing the page.
- `JSON.parse` and `JSON.stringify` to store and get tasks from localStorage.
- Event listeners for buttons (add, edit, complete, delete).
- Word count limit and clear button for input.

**How it works:**
- You type a task and add it to the list.
- You can mark tasks as complete, edit them, or delete them.
- The app remembers your tasks using localStorage.

---

## 2. Counter App

**What is it?**
- A number counter that you can increase, decrease, reset, or double.

**Main things used:**
- Event listeners for button clicks.
- If-else statements to check limits (min and max values).
- Disabling buttons when limits are reached.
- Changing color based on the value (positive, negative, zero).

**How it works:**
- Click buttons to change the number.
- The number can't go below -10 or above 10.
- The color changes based on the number.

---

## 3. Character Counter

**What is it?**
- An app that counts the number of characters or words you type.

**Main things used:**
- Event listeners for input changes.
- String methods like `.length` and `.split()` to count characters or words.
- Showing the count live as you type.
- Limiting the number of characters or words.

**How it works:**
- Type in the box and see the count update instantly.
- You can't type more than the set limit.

---

## 4. Color Flipper

**What is it?**
- An app that changes the background color to a random color when you click a button.

**Main things used:**
- Arrays to store color values or generating random colors.
- Math functions like `Math.random()` to pick a color.
- Event listeners for button clicks.
- DOM manipulation to change the background color.

**How it works:**
- Click a button and the background color changes to a new random color.
- You can see the color code displayed on the screen.

---

## 5. Accordion FAQ

**What is it?**
- An FAQ section where you can click on questions to show or hide the answers. Only one answer opens at a time, but you can also expand or collapse all with buttons.

**Main things used:**
- Event listeners for mouse clicks and keyboard keys (Enter/Space) for accessibility.
- Adding and removing CSS classes to show or hide answers.
- Functions to open all or close all items at once.
- Simple logic to make sure only one answer is open at a time (for better user experience).

**Why these are used:**
- Event listeners let you react to user actions (clicks and key presses).
- Toggling classes is an easy way to show/hide content using CSS.
- Keyboard support makes the FAQ usable for everyone, not just mouse users.
- The open/close all buttons help users quickly see or hide all answers.

**How it works:**
- Click a question or press Enter/Space to open its answer.
- Only one answer is open at a time, unless you use the expand/collapse all buttons.

---

## 6. Modal Popup

**What is it?**
- A system to show popup modals for messages, information, or loading screens. You can open different modals, close them, and see a loading animation.

**Main things used:**
- Event listeners for button clicks and keyboard (Escape key) to open/close modals.
- Functions to show a specific modal or hide all modals.
- Overlay to darken the background and focus on the popup.
- Simulated loading with setTimeout and a spinner animation.
- Accessibility: close modals with Escape key or by clicking outside the modal.

**Why these are used:**
- Event listeners make the modals interactive and easy to control.
- Overlay and modal logic help focus user attention and improve user experience.
- Loading simulation shows how to handle waiting for data or actions.
- Accessibility features make the popup system usable for everyone.

**How it works:**
- Click a button to open a modal popup.
- You can close the modal by clicking the close button, clicking outside, or pressing Escape.
- The loading modal shows a spinner for a few seconds, then closes automatically.

---

## 7. Image Carousel

**What is it?**
- An app to show a set of images that you can scroll through. It has navigation buttons, dots, thumbnails, auto-play, keyboard, and swipe support.

**Main things used:**
- Event listeners for button clicks, keyboard keys, mouse hover, and touch (swipe).
- Dynamic creation of dots and thumbnails for navigation.
- Functions to go to next, previous, or specific slide.
- Auto-play with `setInterval` to change slides automatically.
- CSS transitions for smooth sliding effect.

**Why these are used:**
- Event listeners make the carousel interactive for users on desktop and mobile.
- Dynamic elements (dots, thumbnails) help users see and control which image is shown.
- Auto-play keeps the carousel moving, but pauses on hover for better control.
- Keyboard and swipe support make it accessible and easy to use for everyone.

**Keywords explained:**
- `Event listener`: Lets you run code when something happens (like a click or key press).
- `setInterval`: Runs code repeatedly after a set time (used for auto-play).
- `transform`: Moves elements smoothly for sliding effect.
- `touchstart`/`touchend`: Used for mobile swipe detection.
- `querySelectorAll`: Selects multiple elements from the page.

**How it works:**
- Click arrows, dots, or thumbnails to change images.
- The carousel auto-plays, but stops when you hover.
- Use keyboard arrows or swipe on mobile to navigate.

---

