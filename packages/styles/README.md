## color spectrum explanation

### Choosing our lightness levels

Yes, there is such a thing as too much contrast! Uncomfortable and jarring 21.0 contrast white on black text is a common problem (looking at you, brutalism UI's). The most comfortable contrast for reading body text is actually between 8 and 10 for a light themed UI with dark text, and between 10 and 16 for a dark themed UI with light text. You can and should test this out for yourself.

It's important to get your lightness levels right for grey above all other colors. Grey is the most important and most common color in a UI. The creators of TailwindCSS Adam Wathan and Steve Schoger talk about the importance of designing UI's in greyscale first in their book: [Refactoring UI](https://www.refactoringui.com/).

- `98.5%`: highest lightness that is clearly distinguishable from white
- `13.0%`: lowest lightness that is clearly distinguishable from black

There's really no need to have colors outside of these lightness levels because they would be too close to white or black to be meaningful. So they should mark the lightest and darkest shades in our spectrum.

These are quite harsh colors though, so you may not want to use them for large areas of your UI. We need to find more comfortable lightness levels for our backgrounds and surfaces so that we don't over-expose our retinas and so that our text, icons, and other elements can have a comfortable contrast against them.

- `96.5%`: a comfortable lightness for a light background
- `16.0%`: a comfortable lightness for a dark background

These colors also leave plenty of room either side to add layered surfaces which add depth and create an effect of raised or sunken elements against the background.

Now lets find lightness levels that have a comfortable contrast against these backgrounds that we can use for body text, icons, and other elements.

- `86.0%`: ~12 contrast against our dark background
- `38.0%`: ~9 contrast against our light background

Other lightness levels that we need to consider are the lightness levels that result in a contrast of at least 4.5 against black and white (with some buffer so that when we eventually expand our color spectrum to include other hues, we can be sure that they will still have the minimum contrast for accessibility of 4.5).

- `62.0%`: lowest lightness that results in contrast of at least 4.5 against black for any given hue
- `51.0%`: highest lightness that results in contrast of at least 4.5 against white for any given hue

Any lightness levels above `61.0%` are always accessible against black, and any lightness levels below `51.0%` are always accessible against white. These colors will be very useful because they are also colors that typically support the highest chroma values for the majority of hues, giving us vibrant colors that we can use for primary action buttons or similar.

These lightness levels form the foundation of our color spectrum. We can begin build up our spectrum by adding more lightness levels in between these.

- `0100 98.5%`: lightest color
- `0200 96.5%`: light background
- `0300 93.0%`: gap filler
- `0400 86.0%`: light body text
- `0500 73.0%`: weaker contrast for de-emphasized light text
- `0600 62.0%`: all colors above are accessible against black
- `0700 51.0%`: all colors below are accessible against white
- `0800 44.0%`: weaker contrast for de-emphasized dark text
- `0900 38.0%`: dark body text
- `1000 27.0%`: gap filler
- `1100 20.0%`: gap filler
- `1200 16.0%`: dark background
- `1300 13.0%`: darkest color
