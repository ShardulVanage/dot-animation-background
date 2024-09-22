# Animated Background Component

The Animated Background Component is a React component that creates an interactive, animated dot background. It responds to mouse movements, creating either a convex (magnifying lens) or concave (scattering) effect around the cursor.

## Features

- Interactive dot animation responding to mouse movements
- Two animation types: convex (magnifying lens) and concave (scattering)
- Customizable dot color and spacing
- Responsive design that adapts to window resizing
- Ability to wrap content within the animated background

## Props

The component accepts the following props:

- `className` (optional): Additional CSS classes to apply to the container
- `dotColor` (optional): Color of the dots (default: "currentColor")
- `children` (optional): React nodes to render on top of the animated background
- `animationType` (optional): Type of animation, either 'convex' or 'concave' (default: 'convex')

## Installation

To use this component in your React project, copy the `AnimatedBackground.tsx` file into your project's component directory.

## Usage

Import and use the component in your React application:

```jsx
import AnimatedBackground from './path/to/AnimatedBackground'

function App() {
  return (
    <AnimatedBackground
      className="min-h-screen bg-gray-100"
      dotColor="#3B82F6"
      animationType="convex"
    >
      <h1>Your Content Here</h1>
    </AnimatedBackground>
  )
}
```

## Examples

### Convex Animation (Magnifying Lens Effect)

```jsx
<AnimatedBackground
  className="min-h-screen bg-gray-100"
  dotColor="#3B82F6"
  animationType="convex"
>
  <div className="flex items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold">Convex Animation</h1>
  </div>
</AnimatedBackground>
```

### Concave Animation (Scattering Effect)

```jsx
<AnimatedBackground
  className="min-h-screen bg-white"
  dotColor="#10B981"
  animationType="concave"
>
  <div className="flex items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold">Concave Animation</h1>
  </div>
</AnimatedBackground>
```

## Dependencies

This component requires React and uses React hooks. It's designed to work with Tailwind CSS for styling, but you can modify the classes to work with other CSS frameworks or custom styles.

## Customization

You can customize the animation by modifying the following constants in the component:

- `DOT_SPACING`: Controls the spacing between dots
- `ANIMATION_RADIUS`: Determines the radius of the animation effect around the cursor
- `SCALE_FACTOR`: Adjusts the maximum scale of the dots during animation

## Performance Considerations

The component re-renders on every mouse move and window resize. For optimal performance, consider debouncing the resize event handler and using `React.memo` to wrap the component if it's used multiple times in your application.

## License

This component is provided under the MIT License. Feel free to use and modify it in your projects.
