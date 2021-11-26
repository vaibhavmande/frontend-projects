# Responsive Navigation bar

This is a responsive nav bar only which looks similar to the one [this](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) frontend mentor challenge.

## Problem Statement

- Build a responsive navbar as it appears in this frontend mentor challenge mentioned above.

- The goal is to match responsive designs provided and in process learn some modern CSS

## Finished product

### _link / screenshot to be updated_

## Installation

No special commands needed. Just download and open index.html in browser.

## Learnings

- **@supports**
  In the project I have used `backdrop-filter` to achieve the blurred background of the navigation. This property is not yet supported in all the browsers. Using `@supports` gives us an ability to defines our rules conditionally only if it's supported by the browser.
- **gap**
  This property simply defines gap between the flex items. either horizontal or vertical based on the flex direction. Before I was aware of this, I used to add `padding-left/right` to achieve the gap between the elements. It can be used as `gap: 2rem`
- **aspect-ratio**
  This simply makes it so easy to keep the height and width of an image in check. I have used handlebar image to open/close the menu on mobile devices. I have only used `width: 3rem` on the image and `aspect-ratio: 1` which automatically keeps it a square and adds the same height to the image.
- **clamp**
  Clamp is so useful to shrink/grow elements based on responsive screen or adapt to the screen width. Here I have used to define the `padding-inline` for menu on the mobile screen.
  `padding-inline: clamp(3rem, 3vw, 5rem)`
  This returns `3vw` as preferred value, it returns `3rem` only when `3rem` is less than `3vw`, and returns `5rem` only when `3vw` is less than `5rem`

**Acccessibility**

- **sr-only** utility class
  While creating the menu. The menu open and close with a hamburger icon. So normally the icon is visible and pretty self explanatory what it does but for assistive technologies it can be difficult to understand what the icon does. Hence we created a span having content Menu which should only be read out by assistive technologies but completely hidden from normal flow.
- **aria-controls**
  This applied on the button which opens the menu. The aria-controls contain the id of the element this button controls. Generally its not visible that the button opens and close the menu hence, we use this attribute to express what DOM is controlled by this button.

**I referred [this](https://www.youtube.com/watch?v=HbBMp6yUXO0&list=PL4-IK0AVhVjPxtv9SVKQZm_huHpDEgLz0&index=7) youtube video** to finish this challenge.
