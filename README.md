
## Link Card Challenge

Using the provided Sketch file, build Link Cards for the data provided in `HomeView.tsx`.

Spend an hour and a half working on this. Some things to keep in mind:

- Don't worry about matching the designs *exactly*. This exercise is intended to show how you develop APIs for new components and handle styling
- Just get as far as you can, don't worry about completing everything. It's not about seeing how much you can get done! If you want to spend a little extra time working on it, feel free.
- Use any styling method you would like
- Feel free to install any other dependencies
- Static assets (such as fonts and the Customize card image) are in `public/static`
- Follow the eslint rules as best as you can

### Setup

1. Fork this repository
2. `yarn install` the dependencies, then run `yarn start` to get to work!

### Goals

- [ ] Build out link cards for each document type. If you don't have time for all of the cards, focus on the Product card first.
   - As you plan this, imagine that in the future you would need to add more cards for different document types.
- [ ] Assign typescript types to the `Props` for your components.
- [ ] Build a card for the Customization Page that uses hard-coded data.
- [ ] Use `next/link` to link to the appropriate pages:
  - Products: `/products/[slug]`
  - Collections: `/collections/[slug]`
  - Pages: `/pages/[slug]`

*Extra Credit*

- [ ] Set up pages & views for Products, Collections, and Pages. These should just render the document's title and a "back to home" link.
- [ ] Deploy your project to Vercel

