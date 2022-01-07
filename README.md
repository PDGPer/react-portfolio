# Personal portfolio made in React

### Goals
My previous portfolio was made when I had less code skills and was leaning more on my image and video knowledge. I liked the end result but it was way too heavy in terms  of all the files it used. This time I wanted to make the portfolio as lean as possible and focus more on code.

### Design
I tried to keep two principles in mind: "show, don't tell" and "know your audience". I assumed that the people who will be looking at a coder portfolio will know something of code themselves, so why not have some fun with that and show skills at the same time.
- The color scheme is based on my VSCode color scheme.
- The fonts are monospace fonts regularly used to display code.
- When the site is initially loaded, you actually see the code that corresponds to each block being "written" with the help of an NPM module. This brings the code that usually stays in the background to the foreground with a fun little effect.
- The text information is displayed in the form of variables holding objects, arrays, strings, etc. and the links as comments, once again bringing the background to the foreground.

### Making a leaner site
A lot of stuff was cut from my previous site that no longer had any reason to be present (no more video, for example), but I still wanted to explore more options in terms of reducing file sizes for images.
- Using SVGs instead of PNGs for flat color images like the portrait and the logos reduced their file size by 10x. Their code was assigned directly to variables in a SVG library, saving me the fuss of having multiple files in a folder. After deleting further useless code from these, the final JS file with all the images was 2/3 the size of all the individual files put together: 17.5kb.
- I looked into newer image formats to replace JPGs and after settling on AVIF, the file size was cut down to around 30% of an equivalent JPG file with the same compression level. In total and excluding the GIF, bitmap images use only 101kb.

The build version of the site is 991kb in total.
