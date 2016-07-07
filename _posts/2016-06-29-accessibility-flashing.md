---
layout: post
title:  "Flashing"
date:   2016-06-30 09:23:36 -0500
intro: "As flashing can cause several issues, from seizures to motion sickness, it strongly considered a very bad idea. If you absolutely must have a flashing element, there are a few critical things to consider."
section: accessibility
categories: accessibility
custom_js: flashing.js
---

## Testing

* Failure at any step constitutes a 508 compliance issue:

1. Check if you can determine the frequency of "flashing".
  * Note: Scrolling text is considered flashing for our purposes.
2. Check that the rate of flashing is less than 3hz (3 times per second), or scroll delay is set to >= 400.

## Examples

### Passes

<marquee scrolldelay = "400" style="border: 1px solid; padding: 8px">
  Here is a marquee, I bet you haven't seen this in a while, anyway, the scroll delay is set to 400.
</marquee>

> This is an example of marquee. The scrolldelay is set and it is equal to 400 meaning it is compliant.

### Fails

<button type="button" id="blinkbutton">Click to see <strong>non-compliant</strong> flashing</button>
<span class="blink" style="display:none;">This text is blinking</span>

> ___Failure:___ This blinking text fails because the rate of flashing can't be determined and its greater than 3hz.
