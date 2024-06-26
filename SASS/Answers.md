1. Store Data with SASS Variable

```html
<style type="text/scss">
  $text-color: red;

  .header {
    text-align: center;
  }
  .blog-post,
  h2 {
    color: $text-color;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```

2. Nest CSS with Sass

```html
<style type="text/sass">
  .blog-post {
    h1 {
      text-align: center;
      color: blue;
    }
    p {
      font-size: 20px;
    }
  }
</style>
```

3. Create Reusable CSS with Mixins

```html
<style type="text/scss">
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
```

4. Use @if and @else to Add Logic To Your Styles

```html
<style type="text/sass">
  @mixin border-stroke($val) {
    @if $val == light {
      border: 1px solid black;
    } @else if $val == medium {
      border: 3px solid black;
    } @else if $val == heavy {
      border: 6px solid black;
    } @else {
      border: none;
    }
  }

  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```

5. Use @for to Create a Sass Loop

```html
<style type="text/scss">
  @for $j from 1 through 5 {
    .text-#{$j} {
      font-size: 15px * $j;
    }
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

6. Use @each to Map Over Items in a List

```html
<style type="text/scss">
  @each $color in blue, black, red {
    .#{$color}-bg {
      background-color: $color;
    }
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

7. Apply a Style Until a Condition is Met with @while

```html
<!-- The @while directive is an option with similar functionality to the JavaScript while loop. It creates CSS rules until a condition is met. -->

<style type="text/scss">
  $i: 1;
  @while $i < 6 {
    .text-#{$i} {
      font-size: 15px * $i;
    }
    $i: $i + 1;
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

8. Split Your Styles into Smaller Chunks with Partials

```html
<!-- Partials in Sass are separate files that hold segments of CSS code. These are imported and used in other Sass files. This is a great way to group similar code into a module to keep it organized.  -->
<!-- @import 'variables' -->
<!-- Sass has a feature called extend that makes it easy to borrow the CSS rules from one element and build upon them in another. -->

<style type="text/scss">
  h3 {
    text-align: center;
  }
  .info {
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important {
    @extend .info;
    background-color: magenta;
  }
</style>
<h3>Posts</h3>
<div class="info-important">
  <p>
    This is an important post. It should extend the class ".info" and have its
    own CSS styles.
  </p>
</div>

<div class="info">
  <p>
    This is a simple post. It has basic styling and can be extended for other
    uses.
  </p>
</div>
```

9. Extend One Set of CSS Styles to Another Element

```html
<style type='text/sass'>
  h3 {
    text-align: center;
  }
  .info {
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important {
    @extend .info;
    background-color: magenta;
  }
</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>

</details>
```
