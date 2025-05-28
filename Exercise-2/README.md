# A real component

we have learned that we can use the component like an HTML tag.

```jsx
<PrintHello />
```

Now let's create component (function) called `<Card />` that outputs the following HTML:

```jsx
<div className="card m-5">
  <img
    className="card-img-top"
    src="[simple-image like apsignals.png]"
    alt="Card image cap"
  />
  <div className="card-body">
    <h5 className="card-title">Bob Dylan</h5>
    <p className="card-text">
      Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American
      singer/songwriter, author, and artist who has been an influential figure
      in popular music and culture for more than five decades.
    </p>
    <a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">
      Go to wikipedia
    </a>
  </div>
</div>
```

## Instructions:

1. Please create a function called `Card` that returns the card code

## Hints:

- Remember to use the correct React syntax `className` instead of `class` when creating your card.
