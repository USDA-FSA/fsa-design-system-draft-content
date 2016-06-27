---
layout: post
title:  "Checklist"
date:   2016-06-21 10:23:36 -0500
intro: "This checklist helps developers identify potential accessibility issues affecting their websites or applications. It's broken down into three sections of decreasing importance: <strong>A</strong>, <strong>B</strong> and <strong>C</strong>. Please check and address these issues in the order in which they appear."
section: accessibility
categories: accessibility
---

For more detail on accessibilty standards, please see [WCAG2.0 AA](https://www.w3.org/TR/WCAG20/)

 * **A** - Critical issues that will cause serious problems and/or stop most users of assitive technology from using the site
 * **B** - Issues that may cause problems or increased frustration for certain users
 * **C** - Minor issues that will cause problems or frustration for a small number of users

It is important to note, while B and C are noted as less critical, they are still required to be truly 508 compliant. This checklist should be used as a reference for development and is not a substitute for compliance checks by a section 508 coordinator.

##  A - Critical

1. [Site is keyboard accessible](keyboard.html)
 * All interactions can be accessed with a keyboard
2. [Site is free of keyboard traps](keyboard.html)
 * The keyboard focus is never trapped in a loop
4. [All `form` inputs have explicit labels](forms.html)
6. [All relevant images use an `img` tag](images.html)
5. [All images have `alt` attributes](images.html)
6. [Multimedia is tagged](multimedia.html)
 * All multimedia has appropriate captioning and audio description
7. [Text has sufficient color contrast](color.html)
 * All text has a contrast ratio of 4.5:1 with the background

## B - Less Critical

1. [Site never loses focus](keyboard.html)
 * Focus is always visible when moving through the page with the keyboard
2. [Tab order is logical](keyboard.html)
3. [Form instructions are associated with inputs](forms.html)
4. [Site doesn't timeout unexpectedly](timeouts.html)
 * Identify elements that may "timeout" and verify that the user can request more time
5. [Tables are coded properly](tables.html)
 * Tables have proper headers and column attributes
6. [Headings are nested properly](headings.html)
 * Heading elements are nested in a logical way

## C - Minor
1. [Frames are named](frames.html)
 * All frames have a name element
2. [Flashing elements are compliant](flashing.html)
 * Elements that flash on screen do so at a rate of less than 3hz
3. [Language is set](properties.html)
 * The language for the page is set
 * The language for sections on the page that differ from the site language are set
4. [CSS is not required to use the page](css.html)
 * The page makes sense with or without CSS
5. [Links are unique and contextual](links.html)
 * All links can be understood taken alone, i.e 'Read more - about 508'
6. [Page titles are descriptive](pagetitles.html)
7. [Required plugins are linked on the page](plugins.html)
