# Theme Specification for ex-next-1

This document defines the visual theme for the `ex-next-1` application. All UI development for this app should conform strictly to these specifications when using Tailwind CSS and Shadcn UI components.

## Branding

* **App Name**: MyNextNotes
* **Dark Mode**: Not supported

## Color Palette

| Purpose      | Tailwind Class |
| ------------ | -------------- |
| Primary      | `red-400`      |
| Accent       | `blue-600`     |
| Neutral Base | `gray`         |
| Text         | `black`        |

## Typography

* **Default Text Color**: `text-black`
* **Font Family**: Use Tailwind default sans-serif stack
* **Headings**: Use semantic HTML (`h1`, `h2`, etc.) and apply appropriate Tailwind font sizing classes (e.g., `text-2xl`, `text-xl`)

## Component Styling Guidelines

* All components should use the specified color palette.
* Avoid introducing new colors unless explicitly approved.
* Shadcn components must use variant props or class overrides to match the theme colors.
* Base button should use `variant="default"` and `className="bg-red-400 text-black"` if overriding.

## Layout Constraints

* Use light background by default (`bg-white` or `bg-gray-50`).
* Footer must have a dark background (`bg-gray-900`) with white text.

## Shadcn Configuration

Ensure Shadcn UI components are installed and configured according to:
[https://ui.shadcn.com/docs/installation/next](https://ui.shadcn.com/docs/installation/next)

Theme values should be customized in the Tailwind config or via CSS variables if required.

## Tailwind Configuration Notes

Extend `tailwind.config.ts` to reflect theme values if needed:

```ts
// Example
theme: {
  extend: {
    colors: {
      primary: theme("colors.red.400"),
      accent: theme("colors.blue.600"),
      neutral: theme("colors.gray"),
      text: theme("colors.black")
    }
  }
}
```

Do not enable dark mode (`darkMode: false` or omit the setting).

## Enforcement

All new components and pages must adhere to this theme. Visual regressions or deviations from these values will not be accepted without justification.
