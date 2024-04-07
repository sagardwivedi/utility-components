<h1 align="center">
  Utility Components
</h1>

<p align="center">
  <b>A collection of reusable React components for common tasks</b>
</p>

## Installation

You can install the package via npm:

```bash
npm install @sagar/utility-components
```

Or via yarn:

```bash
yarn add @sagar/utility-components
```

Or via bun:

```bash
bun add @sagar/utility-components
```

After installation, you can import the components in your React application as follows:

```jsx
import { Each, Show } from "@sagar/utility-components";
```

## Components

### Each

The `Each` component is used for rendering each item in an array.

#### Usage

```jsx
<Each of={array} render={(item, index) => <Item key={index} item={item} />} />
```

#### Props

- `of` (`T[]`): The array of items to render.
- `render` (`(item: T, index: number) => React.ReactNode`): A function that takes an item from the array and returns its rendering.

### Show

The `Show` component is used for conditionally rendering its children based on a condition.

#### Usage

```jsx
<Show>
  <Show.When isTrue={condition}>
    <p>This is rendered when condition is true.</p>
  </Show.When>
  <Show.Else>
    <p>This is rendered otherwise.</p>
  </Show.Else>
</Show>
```

#### Props

- `children` (`ReactNode`): ReactNode to be conditionally rendered.

### Show.When

The `Show.When` component is used as a child of `Show` to render its children when a condition is true.

#### Usage

```jsx
<Show>
  <Show.When isTrue={condition}>
    <p>This is rendered when condition is true.</p>
  </Show.When>
</Show>
```

#### Props

- `isTrue` (`boolean`): Condition to be evaluated.

### Show.Else

The `Show.Else` component is used as a child of `Show` to render its children or a specified render prop if provided.

#### Usage

```jsx
<Show>
  <Show.When isTrue={condition}>
    <p>This is rendered when condition is true.</p>
  </Show.When>
  <Show.Else>
    <p>This is rendered otherwise.</p>
  </Show.Else>
</Show>
```

#### Props

- `children` (`ReactNode`): ReactNode to be rendered.
- `render` (`ReactNode`): Alternative ReactNode to be rendered if provided.
