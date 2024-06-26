1. Use Responsive Design with Bootstrap Fluid Containers

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

2. Make Images Mobile Responsive

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>
  <img
    class="img-responsive"
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
  />

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

3. Center Text with Bootstrap

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

4. Create a Bootstrap Button

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <button class="btn btn-default">Like</button>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

5. Create a Block Element Bootstrap Button

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <button class="btn btn-default btn-block">Like</button>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

6. Taste the Bootstrap Button Color Rainbow

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <button class="btn btn-primary btn-block">Like</button>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

7. Call out Optional Actions with btn-info

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <button class="btn btn-block btn-primary">Like</button>

  <button class="btn btn-block btn-info">Info</button>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

8. Warn Your Users of a Dangerous Action with btn-danger

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <button class="btn btn-block btn-primary">Like</button>
  <button class="btn btn-block btn-info">Info</button>
  <button class="btn btn-block btn-danger">Delete</button>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

9. Use Bootstrap Grid to Put Elements Side By Side

```html
<!-- Using the Bootstrap Grid to Put Elements Side By Side -->
<!-- Bootstrap has different column width attributes that it uses depending on how wide the user's screen is. For example, phones have narrow screens, and laptops have wider screens. -->
<!-- Take for example Bootstrap's col-md-* class. Here, md means medium(or xs means extra small), and * is a number specifying how many columns wide the element should be. In this case, the column width of an element on a medium-sized screen, such as a laptop, is being specified. -->
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

10. Ditch Custom CSS for Bootstrap

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <h2 class="text-primary">CatPhotoApp</h2>
  <a href="#"
    ><img
      class="img-responsive thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

11. Use Span to Target Inline Elements

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"
    ><img
      class="img-responsive thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love</span>:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

12. Create a Custom Heading

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>

<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>

    <a href="#"
      ><img
        class="img-responsive thick-green-border"
        src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
        alt="A cute orange cat lying on its back."
    /></a>

    <div class="col-xs-4">
      <img
        src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
        class="img-responsive"
        alt="Three kittens running towards the camera."
      />
    </div>
  </div>
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

13. Add Font Awesome Icons to our Buttons

```html
<!-- Font Awesome is a convenient library of icons. -->
<!-- The i element was originally used to make other elements italic, but is now commonly used for icons. -->

<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"> -->
<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"
        ><img
          class="img-responsive thick-green-border"
          src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
          alt="A cute orange cat lying on its back."
      /></a>
    </div>
  </div>
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">
        <i class="fas fa-thumbs-up"></i>
        Like
      </button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

14. Add Font Awesome Icons to all of our Buttons

```html
<!-- Using further icons  -->
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"
        ><img
          class="img-responsive thick-green-border"
          src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
          alt="A cute orange cat lying on its back."
      /></a>
    </div>
  </div>
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">
        <i class="fas fa-thumbs-up"></i> Like
      </button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">
        <i class="fas fa-info-circle"></i>Info
      </button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">
        <i class="fas fa-trash"></i>Delete
      </button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

15. Responsively Style Radio Buttons

```html
<!-- Responsively Style Radio Buttons -->
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"
        ><img
          class="img-responsive thick-green-border"
          src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
          alt="A cute orange cat lying on its back."
      /></a>
    </div>
  </div>
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">
        <i class="fa fa-thumbs-up"></i> Like
      </button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">
        <i class="fa fa-info-circle"></i> Info
      </button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">
        <i class="fa fa-trash"></i> Delete
      </button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <div class="row">
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
      </div>
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
      </div>
    </div>
    <label><input type="checkbox" name="personality" /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Crazy</label>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

16. Responsively Style Checkboxes

```html
<!-- Responsively Style Checkboxes -->

<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"
        ><img
          class="img-responsive thick-green-border"
          src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
          alt="A cute orange cat lying on its back."
      /></a>
    </div>
  </div>
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">
        <i class="fa fa-thumbs-up"></i> Like
      </button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">
        <i class="fa fa-info-circle"></i> Info
      </button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">
        <i class="fa fa-trash"></i> Delete
      </button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <div class="row">
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
      </div>
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality" /> Loving</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality" /> Lazy</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality" /> Crazy</label>
      </div>
    </div>
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</div>
```

17. Style Text Inputs as Form Control

```html
Style Text Inputs as Form Controls
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"
        ><img
          class="img-responsive thick-green-border"
          src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
          alt="A cute orange cat lying on its back."
      /></a>
    </div>
  </div>
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">
        <i class="fa fa-thumbs-up"></i> Like
      </button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">
        <i class="fa fa-info-circle"></i> Info
      </button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">
        <i class="fa fa-trash"></i> Delete
      </button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <div class="row">
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
      </div>
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality" /> Loving</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality" /> Lazy</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality" /> Crazy</label>
      </div>
    </div>
    <input
      type="text"
      placeholder="cat photo URL"
      class="form-control"
      required
    />
    <button class="btn btn-primary" type="submit">
      <i class=" fa fa-paper-plane "></i>Submit
    </button>
  </form>
</div>
```

18. Line up Form Elements Responsively with Bootstrap

```html
<!-- Line up Form Elements Responsively with Bootstrap -->
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"
        ><img
          class="img-responsive thick-green-border"
          src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
          alt="A cute orange cat lying on its back."
      /></a>
    </div>
  </div>
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
    class="img-responsive"
    alt="Three kittens running towards the camera."
  />
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">
        <i class="fa fa-thumbs-up"></i> Like
      </button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">
        <i class="fa fa-info-circle"></i> Info
      </button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">
        <i class="fa fa-trash"></i> Delete
      </button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <div class="row">
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor" /> Indoor</label>
      </div>
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor" /> Outdoor</label>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality" /> Loving</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality" /> Lazy</label>
      </div>
      <div class="col-xs-4">
        <label><input type="checkbox" name="personality" /> Crazy</label>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-7">
        <input
          type="text"
          class="form-control"
          placeholder="cat photo URL"
          required
        />
      </div>
      <div class="col-xs-5">
        <button type="submit" class="btn btn-primary">
          <i class="fa fa-paper-plane"></i> Submit
        </button>
      </div>
    </div>
  </form>
</div>
```

19. Create a Bootstrap Headline

```html
<!-- Create a Bootstrap Headline -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h3 class="text-primary text-center">jQuery Playground</h3>
  </body>
</html>
```

20. House our page within a Bootstrap container-fluid div

```html
<!-- House our page within a Bootstrap container-fluid div and Split Your Bootstrap Row and making  division with class well  -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
  </div>
</div>
```

21. Create a Bootstrap Row

```html
<!-- Apply the Default Bootstrap Button Style and giving extra class target -->
<!-- giving well division id -->
<!-- giving each well a text and each button inside the well a text -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

22. Split Your Bootstrap Row

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6"></div>
    <div class="col-xs-6"></div>
  </div>
</div>
```

23. Create Bootstrap Wells

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
  </div>
</div>
```

24. Add Elements within Your Bootstrap Wells

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button type="button" class="btn btn-primary">Button 1</button>
        <button type="button" class="btn btn-primary">Button 2</button>
        <button type="button" class="btn btn-primary">Button 3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button type="button" class="btn btn-primary">Button 4</button>
        <button type="button" class="btn btn-primary">Button 5</button>
        <button type="button" class="btn btn-primary">Button 6</button>
      </div>
    </div>
  </div>
</div>
```

25. Apply the Default Bootstrap Button Style

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
  </div>
</div>
```

26. Create a Class to Target with jQuery Selectors

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```

27. Add id Attributes to Bootstrap Elements

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```

28. Label Bootstrap Wells

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```

29. Give Each Element a Unique id

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1"></button>
        <button class="btn btn-default target" id="target2"></button>
        <button class="btn btn-default target" id="target3"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4"></button>
        <button class="btn btn-default target" id="target5"></button>
        <button class="btn btn-default target" id="target6"></button>
      </div>
    </div>
  </div>
</div>
```

30. Label Bootstrap Buttons

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

31. Use Comments to Clarify Code

```html
<!-- Mari didhi bas comment pikina -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```
