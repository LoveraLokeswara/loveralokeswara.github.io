#!/bin/bash

# Build the static site
echo "Building the static site..."
npm run build

# Add .nojekyll file
touch out/.nojekyll

# Deploy to gh-pages branch
echo "Deploying to GitHub Pages..."
npx gh-pages -d out

echo "Deployment complete! Your site will be available at:"
echo "https://loveralokeswara.github.io" 