

## Responsiveness
![alt text](wireframes/img1.jpg "Responsive sample")
I used mostly Dev tools and different screen sizes it provided to test my game
screen. When I used ["Am I responsive?"](http://ami.responsivedesign.is/#)
website it highlighted a whole new array of responsoveness issues. Which fixing and adjusting I am attempting to document bellow.


1. First I started with the smallest size, so as you can see in the img above
the "start!" button is way to big for the screen and it covers, 2 clouds. 
Even though the button disapears once you hit "start!" and reapears only whn the timer is out.
This responsivesness issue did not apear on any of the Dev tools screens.
However, I could see the issue apearing when I tested on my Samsung Galaxy S8.
I've applied the media query of small screens targeting the start button.
It made teh button smaller but it didn't vhange it's position. Also it ws hard to test it
because this responsiveness issue did not appear on the Dev Tool in Google chrome,
I was pushing my code after nearly evry single change to check it how does it display on my phone.
 
 **Issue not fixed** So with all the adjustments and deciding to stay with top:90% parameter
the start button looks much better. However it is still covering one second row middle 
 cloud, lower side of it and on the "am I responsive?" website part of the button is covered,
 behind the game area border.

 2. I've targetted the large screens and the missing Score. At first i've noticed that the media query
 that I've added was not efected because I've mispelled "min" for "mix".
 I've moved the score above the clouds using (top:13%; in the XXL screens media quierys) parameter which seemed to solve the issue, in the Dev Tools.

 **Issue fixed** for XXL screens the score is moved up and working.

 For medium-large screens the score is slightly covered behind the cloud. As we can see n the responsiveness img above.

3. I've spend the most time trying to adjust the header part. As you can see in the picture above on the smaller sizes tablets,
as well as my Samsung Galaxy S8 the h1 is hidden behind the board game and it's too big to fit.
I've applied (font-size: 6.5vw;) to the small screens and that seemed to fixed the overflowing of the header
but on the Dev Tool screens, the header was slightly off to the side. 

**Issue fixed** So with bootstrap after a long exploration of position
I came to notice that putting h1 in a row on it's own and giving col-12 centers it and makes it more responsive, to different screens.


4. Audio and Instructions buttons was another big challenge in responsiveness I that I was fased with.
At first I tried to position them independently but that, they weren't responsive and there was no alignment. Then al of the elements
in the header area I wraped into div and gave them classes, it didn't work well. I decided to use boostrap
grid system to position these elements. Once I've put h1 in a seoarate row, and the 2 buttons in the second row
the buttons, stacked slighty on top of each other in the right corner.


## Audio

1. Testing on Samsung Galaxy S8 game theme audio was 10seconds delayed 
when I pressed "Start!! and started playing the game. "Smack" sound worked from the start.

## Testing User Stories

1. As a user, I want easy controls
   - Simple layout of the game board
   - I can play clicking one mouse button
   - I can turn off/on sound with one clicking
   - Instructions are on click away

2. As a user, I want to feel entertained
   - The game is faced paced and there is no break to take once it's running, so it's funny, easy and takes
   your ind from overthinking.

3. As a user, I want to feel challenged
   - The pace of the monsters poping out keeps you focused and on point

4. As a user, I want to have satisfying audio and visuals
  - When you fisrt enter the site you are preseted with with the deep blue 
  space image. All the colours nicely contrast. Most of the things alighn.

5.  As a user, I want to have a clear way how to start and restart a game when the game ends
 -There is a big 
6. As a user, I want to see my progression in the game by keeping the score
- For every successful hit or additional hits you make you get extra points. 
-
7. As a user, I want to feel motivated to keep playing 
Thre is an adrenaline rush that gets you speeding through the game and wanting to keep this going and to test your metal.

#### As a developer/site owner I want:

1. To be able to customise the look and feel of the game easily
  - The game functionality and layout is easy to maintain
2. To keep players entertained and coming back to my website
  - It is an easy game for perfect when you just want to turn off your thinking mind and 
  enjoy a game whee you dont need to overthink. 