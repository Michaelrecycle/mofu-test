# GitHub Pages Markdown Site

A simple GitHub Pages repository for deploying Markdown-styled pages via API. The repository includes a GitHub Action that automatically updates the sitemap when new HTML pages are pushed.

## How It Works

1. HTML pages are stored in the `pages/` directory
2. The sitemap is automatically updated when new HTML pages are pushed to the repository
3. The index page (`index.html`) displays a sitemap of all available pages

## Deploying a New Page

To deploy a new page, simply push an HTML file to the `pages/` directory. The GitHub Action will automatically update the sitemap.

### HTML Page Format

For best results, HTML pages should have the following structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <!-- Styling as needed -->
</head>
<body>
    <h1>Page Title</h1>
    <!-- Content goes here -->
    <p><a href="../index.html">Return to homepage</a></p>
</body>
</html>
```

## Sitemap Structure

The sitemap is stored in `sitemap.json` and has the following structure:

```json
{
  "pages": [
    {
      "title": "Page Title",
      "url": "path/to/page.html",
      "description": "Optional page description"
    }
  ]
}
```

## GitHub Pages Setup

To use this repository with GitHub Pages:

1. Go to your repository's Settings
2. Navigate to Pages
3. Select your main branch as the source
4. Click Save

Your site will be published at `https://yourusername.github.io/repository-name/` 