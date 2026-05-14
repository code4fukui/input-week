# input-week

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple, zero-dependency Web Component that provides a set of checkboxes for selecting days of the week (in Japanese).

## Demo

https://code4fukui.github.io/input-week/

## Features

-   Renders as a set of checkboxes for the Japanese days of the week (月, 火, 水, 木, 金, 土, 日).
-   Provides a `.value` property to programmatically get and set the selected days.
-   Dispatches a standard `change` event when the selection is modified.
-   Usable directly from a CDN with no build step required.

## Usage

```html
<!-- 1. Import the component -->
<script type="module" src="https://code4fukui.github.io/input-week/input-week.js"></script>

<!-- 2. Add the element to your HTML -->
<input-week id="week-selector"></input-week>

<!-- 3. Interact with it via JavaScript -->
<script type="module">
  const selector = document.getElementById('week-selector');

  // Listen for changes
  selector.addEventListener('change', () => {
    // Outputs a string like "月水金"
    console.log(selector.value);
  });

  // Programmatically set the selected days
  selector.value = "土日";
</script>
```

## API

### Properties

-   **`.value`**
    -   **Type**: `string`
    -   **Description**: Gets or sets the selected days of the week.
    -   **Getter**: Returns a concatenated string of the selected day characters (e.g., `"月水金"`). If no days are selected, it returns an empty string (`""`).
    -   **Setter**: Accepts a string of day characters to programmatically check the corresponding boxes (e.g., `element.value = "火木";`).

## License

MIT License — see [LICENSE](LICENSE).