# Gatsby test with React components

## Install Gatsby and Node

Make sure that you have the Gatsby installed and [Node](https://nodejs.org/en/download/)</a>:
```sh
npm install --global gatsby-cli
```

## Install Libraries
```sh
npm install
```

## Known Issues
### Permission Issue Installing Gatsby
If you have issues installing Gatsby, please use sudo in front.
```sh
sudo npm install --global gatsby-cli
```

### Image issue in In Basic Styling in CSS
You may get an error when you call the local image. The easiest solution is to put the image online using [CloudApp](http://getcloudapp.com).
```css
background: url('https://cl.ly/3k1F152x261C/download/wallpaper3.jpg');
```

Or, you can try installing this library.
```sh
npm install --save url-loader
```

Or, you can also put the images inside `/static/images` or `/public/images` instead of `/src/images`. Link the images like this:
```css
background: url('../../static/images/wallpaper3.jpg');
```

### GraphQL giving an error
Make sure to restart your local environment by doing **Control + C** in the Terminal, and then `gatsby develop`.
