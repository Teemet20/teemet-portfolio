# Animated Rings Implementation Guide

## Overview
This guide explains how to implement the animated floating rings around a profile image in a React application using Tailwind CSS.

## Step 1: Set Up Tailwind Animations
First, we need to define our custom animations in the Tailwind configuration file (`tailwind.config.js`):

```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        'float-vertical': 'floatVertical 3s ease-in-out infinite',
        'float-horizontal': 'floatHorizontal 3s ease-in-out infinite',
      },
      keyframes: {
        floatVertical: {
          '0%, 100%': { transform: 'translate(-50%, -50%)' },
          '50%': { transform: 'translate(-50%, -60%)' },
        },
        floatHorizontal: {
          '0%, 100%': { transform: 'translate(-50%, -50%)' },
          '50%': { transform: 'translate(-60%, -50%)' },
        },
      },
    },
  },
}
```

## Step 2: Create the Container Structure
In your React component, create a container for the profile image and rings:

```jsx
<div className="relative inline-block">
  {/* Rings container */}
  <div className="absolute inset-0">
    {/* Rings will go here */}
  </div>
  
  {/* Profile image */}
  <img 
    src={profileImage} 
    className="h-36 w-36 mx-auto object-cover rounded-full border-4 border-white relative z-10" 
    alt="Profile" 
  />
</div>
```

## Step 3: Implement the Rings
Add the rings inside the rings container:

```jsx
{/* Outer ring - vertical movement */}
<div className="w-[180px] h-[180px] rounded-full border-4 border-white/30 animate-float-vertical absolute top-1/2 left-1/2"></div>

{/* Middle ring - horizontal movement */}
<div className="w-[160px] h-[160px] rounded-full border-4 border-white/40 animate-float-horizontal absolute top-1/2 left-1/2"></div>
```

## Key Implementation Details

### 1. Ring Sizing
- Outer ring: 180px × 180px
- Middle ring: 160px × 160px
- Profile image: 144px × 144px (h-36 w-36)

### 2. Positioning
- All rings are absolutely positioned
- Centered using `top-1/2 left-1/2`
- Transform is handled by the animation keyframes

### 3. Styling
- Border: 4px solid white with varying opacity
- Outer ring: 30% opacity
- Middle ring: 40% opacity
- Rounded using `rounded-full`

### 4. Animation Properties
- Duration: 3 seconds
- Timing: ease-in-out
- Infinite loop
- Vertical movement: 10% up and down
- Horizontal movement: 10% left and right

### 5. Z-index Management
- Profile image: z-10 to stay on top
- Rings: default z-index to stay behind the image

## CSS Classes Used
- `relative`: For container positioning
- `absolute`: For ring positioning
- `inset-0`: To fill the container
- `rounded-full`: For circular shape
- `border-4`: For ring thickness
- `border-white/30`: For semi-transparent white border
- `animate-float-vertical`: Custom vertical animation
- `animate-float-horizontal`: Custom horizontal animation

## Tips for Customization
1. Adjust ring sizes by modifying the width and height classes
2. Change animation speed by modifying the duration in the Tailwind config
3. Modify movement distance by adjusting the transform values in keyframes
4. Adjust opacity by changing the border color opacity values
5. Change border thickness by modifying the border-4 class

## Troubleshooting
- If rings appear misaligned, check the transform values in keyframes
- If animations are jerky, adjust the timing function
- If rings overlap incorrectly, adjust the z-index values
- If rings are too large/small, adjust the width and height classes 