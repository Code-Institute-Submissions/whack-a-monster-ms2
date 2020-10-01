

## Responsiveness
![alt text](wireframes/img1.jpg "Responsive sample")
I used mostly Dev tools and different screen sizes it provided to test my game
screen. When I used ["Am I responsive?"](http://ami.responsivedesign.is/#)
website it highlighted a whole new array of responsoveness issues.

1. First I started with the smallest size, so as you can see in the img above
the "start!" button is way to big for the screen and it covers, 2 clouds. 
Even though the button disapears once you hit "start!" and reapears only whn the timer is out.
This responsivesness issue did not apear on any of the Dev tools screens.
However, I could see the issue apearing when I tested on my Samsung Galaxy S8.
I've applied the media query of small screens targeting the start button.
It made teh button smaller but it didn't vhange it's position. Also it ws hard to test it
because this responsiveness issue did not appear on the Dev Tool in Google chrome,
I was pushing my code after nearly evry single change to check it how does it display on my phone.

 2. I've targetted the large screens and the missing Score. At first i've noticed that the media query
 that I've added was not efected because I've mispelled "min" for "mix".
 I've moved the score above the clouds using (top:13%; in the XXL screens media quierys) parameter which seemed to solve the issue, in the Dev Tools.

 



## Audio

1. Testing on Samsung Galaxy S8 game theme audio was 10seconds delayed 
when I pressed "Start!! and started playing the game. "Smack" sound worked from the start.

