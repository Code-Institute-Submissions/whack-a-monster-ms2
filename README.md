# Whack-a-Monster


![alt text](# "Responsive sample")

**[Live demo](https://dovi-k.github.io/whack-a-monster-ms2/.)**

---

<span id="top"></span>

## Index

- <a href="#context">Context</a>
- <a href="#ux">UX</a>
  - <a href="#ux-overview">Overview</a>
  - <a href="#ux-stories">User stories</a>
  - <a href="#ux-wireframes">Wireframes</a>
  - <a href="#ux-design">Design</a>
- <a href="#features">Features</a>
  - <a href="#features-current">Current</a>
  - <a href="#features-future">Future</a>
- <a href="#technologies">Technologies Used</a>
- <a href="#testing">Testing</a>
  - <a href="#testing-auto">Automated</a>
  - <a href="#testing-manual">Manual</a>
  - <a href="#testing-responsive">Responsiveness</a>
  - <a href="#testing-resolved">Resolved issues</a>
  - <a href="#testing-unresolved">Unresolved issues</a>
- <a href="#deployment">Deployment</a>
- <a href="#credits">Credits</a>

---

<span id="context"></span>

## Context

"Whack-a-Monster" is is inspired by arcade and fair game "Whack a Mole." In this game the mole is replaced with cute pink monster beautiful artwork from 
[Bevouliin](https://bevouliin.com/) and the action takes in space and the hoels are replaced with stardust clouds.


The game concept is simple:

- Hit as many pink monsters as you can in 30s using the right mouse click.
- You can multiclick on the  onsters for extra points.
- If you reach 35 points before the times runs out you get additional 15 seconds.


<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>
<span id="ux"></span>

## UX

<span id="ux-overview"></span>

### Overview

The game has been designed with no 'fluff' to distract players from having some fun. All design decisions have been made with the following goals in mind:

- Mobile-first
- Customisable code
- Simplicitys.
- Intuitive navigation
- Crisp controls
- Satisfying feedback
- Replayability

<span id="ux-stories"></span>

### User stories

#### As a player I want:

- As a player, I want easy controls
- As a player, I want to feel entertained
- As a player, I want to feel challenged
- As a player, I want to have satisfying audio and visuals
- As a player, I want to have a clear way how to start and restart a game when the game ends
- As a player, I want to see my progression in the game by keeping the score
- As a player, I want to feel motivated to keep playing 

#### As a developer/site owner I want:

- To be able to customise the look and feel of the game easily
- To keep players entertained and coming back to my website


<span id="ux-wireframes"></span>

### Wireframes

Wireframes for **mobile** and **desktop** can be accessed [here](wireframes/).

The wireframes were changing as the game ideas where shifting I started with the game idea of endless runner and the first wrireframe was created for that,
the second idea was FlappyBird i had a wireframe created for that, but as I went throuogh the process it tuned out to be the Whack a Mole type of game
so the game came first and the wireframes after in this case.

For the mobile responsiveness and smaller screens I tried to do the portrait view, but it to adjust responsiveness for that would have taken too much time
and vertical view proved itself to be estetically pleasing and practical for this game.


<span id="ux-design"></span>

### Design choices

#### Colours

It is a Space themed game. 
The colour palette is very simple I sticked to 2 main colors for styling and continuity.
The theme of the game is a blend of retro, cyber and neon, with the colour palatte intended to elicit thoughts of a futuristic cityscape at dusk. The background dominates most of the screen and is punctuated by fluorescent embers. Web-safe colours have been chosen for the core elements of the game (as far as possible), while more leeway has been given to the supporting colours.

##### Core

The colours used for the core game aspects are easy on the eyes when concentrating but give sufficient contrast for easily identifying the game pieces. The snake (Phlox) on the background (Cetacean Blue) is the most frequent combination and is highly evocative of the overall futuristic/neon theme. The pure white text is bright but not overpowering, and is further broken up by sparing use of Neon Carrot and Screamin' Green (used also in the sparks' palette) to differentiate desktop and mobile controls. The enigmatic "the messier things become" in Phlox matches the colour of the snake.

The border of the game area is Deep Carmine Pink if walls are enabled, or Wageningen Green if they are not. These colours intuitively suggests green for safe and red for danger. Without this distinction it would be difficult to immediately convey whether or not walls were enabled, so the colours are as close to primary as possible.

- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) #ff0000 (Red)
- ![#010124](https://via.placeholder.com/15/010124/000000?text=+) #010124 (Deep Blue)



#### Fonts

- [Bangers](https://fonts.google.com/specimen/Bangers#about) back up font "cursive".
- [Helvetica](https://fonts.google.com/specimen/Helvetica#about) back up font "sans-serif".

For consistency and simplicity this is the only font I used.

#### Audio

Audio I kept very simple uplifting and space related. I wanted a backgound music and a smack sound when you hit the monster. 

- Music starts playing when you hit the "Start!" button.
- Background music can be muted/unmuted using the sound button at the top of the game board.
- Game Theme song is taken from [Serpent Sound Studios](https://www.serpentsoundstudios.com/royalty-free-music/techno-electronic)
it is called Beat Three. It has Techno/Futuristic feel to it.
- Smack sound is taken from [Free Sound](https://freesound.org/people/Joecrazy3193/sounds/458648/) and was edited using 
[Wave Pad Audio Editing Software](https://wavepad.en.softonic.com/)


<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="features"></span>

## Features

<span id="features-current"></span>




<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="technologies"></span>

## Technologies Used

### Languages

- HTML
- CSS
- Javascript
 

### Project management

- [Balsamiq](https://balsamiq.com/wireframes/) - Wireframe creation tool
- [GitHub](https://github.com/) - Version control and deployment
- [GitPod](https://gitpod.io/) - IDE used to code the game


### Style and theme


- [Google Fonts](https://fonts.google.com/) - 
- [Colorswall](https://colorswall.com/palette/360/) for teh hex values

### Online resources

- [Am I Responsive?](http://ami.responsivedesign.is/) - to produce the README showcase image

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="testing"></span>

## Testing

<span id="testing-auto"></span>

### Automated testing

[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - audit summary for both desktop and mobile:



[W3C - HTML](https://validator.w3.org/) - 0 errors, 0 warnings - **PASS**

[W3C - CSS](https://jigsaw.w3.org/css-validator/) - 0 errors,  warnings - **PASS**

- 
- 

[CSS Lint](http://csslint.net/) - 0 errors,  warnings - **PASS**




[Unicorn revealer - overflow](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln/related) - no evidence of overflow - **PASS**

[JS Hint](https://jshint.com/) - 0 errors,  warnings - **PASS**


<span id="testing-manual"></span>

### Manual testing

**Summary**:

Many hours were spent testing Whack-a-Monster throughout its development. Over several thousand games, the following scenarios were successfully tested:



<span id="testing-responsive"></span>

### Responsiveness

The aim was to make a game which felt like a standalone app, but which would display in the browser and not force a particular orientation on the player. It was a challenge to achieve this without using some practices which are frowned upon in mobile web development, however they were necessary to achieve said goals.

To overcome the limitations of the mobile browser, a feature of HammerJS has been exploited via `prevent_default: true, touchAction: "none"` and used on `body` so that scrolling or clicking on DOM elements is not possible. Additionally, `pointer-events: none` is used on `game-container` to prevent accidental zooming in on elements when playing on mobile, which happens very frequently on iOS Safari.

`em` units have been used throughout the style sheet (apart from in the `glow` heading class), and incremented in media queries.

There may be some devices which cannot fit the content on screen and as a result push the menu buttons too close to the bottom, however no examples came up in real-world or dev-tools testing.

#### Browsers

Tested on:

- Chrome
- Edge
- Firefox
- Opera

#### Screen sizes

Tested with Chrome DevTools using profiles for:

- Moto G4
- Galaxy S5
- Pixel 2
- Pixel 2 XL
- iPhone 5 SE
- iPhone 6/7/8
- iPhone 6/7/8 Plus
- iPhone X
- iPad
- iPad Pro

... and also using the responsive profiles of:

- Mobile S (320px)
- Mobile M (375px)
- Mobile L (425px)
- Tablet (768px)
- Laptop (1024px)
- Laptop L (1440px)

Real world testing on:

- Samsung Galaxy S8
- HP 


### Issues and resolutions

<span id="testing-resolved"></span>

#### Resolved



#### Unresolved

-
<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="deployment"></span>

## Deployment

I was wokring on one branch (master) and the deployed version of this site is the most current version in the repository.


To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/Edb83/snake), I took the following steps:

1. From the menu items near the top of the page, select **Settings**
2. Scroll down to the **GitHub Pages** section
3. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
4. On selecting Master Branch the page will be automatically refreshed and the website is now deployed
5. Scroll back down to the **GitHub Pages** section in **Settings** to retrieve the link to the deployed website. It may take a short time to go live, but typically less than 60 seconds

### How to run locally

To clone this project from GitHub:

1. Under the repository name, click **Clone or download**
2. In the **Clone with HTTPs** section, copy the clone URL for the repository
3. In your local IDE open Git Bash
4. Change the current working directory to the location where you want the cloned directory to be made
5. Type `git clone`, and then paste the URL you copied in Step 2

```console
git clone https://github.com/dovi-k/whack-a-monster-ms2
```

6. Press Enter. Your local clone will be created

Further reading and troubleshooting on cloning a repository from GitHub can be found [here](https://help.github.com/en/articles/cloning-a-repository).

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>

<span id="credits"></span>

## Credits

#### Tutorials and inspiration

- [Youtube: Code The Snake Game Using JavaScript and HTML5](https://youtu.be/9TcU2C1AACw)
-
#### Code used/modified from other sources

(also referenced within code files)

- [Random number between (min, max)](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript)
- [Seconds to hours/minutes/seconds convertor](https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript/37096923)
- [Sorting arrays](https://www.javascripttutorial.net/javascript-array-sort/)


### Content

- All text within the game is original content



### Acknowledgements

- Precious Iljege (Code Institute Mentor) - for his reassurance, support and guidance



### Disclaimer

This game was developed for educational purposes.

<div align="right"><a style="text-align:right" href="#top">Go to index :arrow_double_up:</a></div>
