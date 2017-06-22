# HackerWall

For our group lab, we'll be building an application called HackerWall - it's just like HackerNews, but built by us - so better. Much better.

The core features of HackerWall are:
  - Anyone can post an article to HackerWall by filling in a form that takes: a link to an article or web page, a title, and a description
  - Every article appears on the HackerWall homepage in order that they are posted
  - Users can comment on each article

Bonus features for HackerWall include:
  - the ability to up-vote and down-vote posts
  - form validation (users can't submit comments or new posts with empty fields)

Checkout the real [HackerNews](https://news.ycombinator.com/news) and play around with it to get a feel for it's feature set.

# Domain Modeling

We need to spend some time thinking about what data our application will use and how it will use it.



What entities will our application have? (What things does our app deal with)

articles => {
  title: ??
  URL:
  author:
  description:
  comments (array of objects)   
}




database



components of the application
views for user posts
specific URL view with comments

database to store
model for the user to store their data
model for the article (to be able to manipulate this data)


What properties will that entity or those entities have?

article model: title, url, upvote/downvote, user-id, array of comments
comment data: user-id, time, upvote/downvote data


How will we need to work with our entity? (create new ones? edit them? delete them?)

create new article
edit an article
display the articles
view a single article and related data.

Users must be able to:
- submit (create) an aritlce

VIEWS:
- index (main page => / )
- add new link (/articles/new)
- specific article page (/articles/show)

Manage views by a resource! Anything that you can perform CRUD on, should dictate your application's structure.





The best practice is to think about each entity or object that your application will rely on and what properties those entities will have.

# Create a Project Plan

Now that we know what entities we will need to build out in our application, we need to get started! But, rather than just jump into the console and start coding, lets plan out what we'll need to build.

What steps can we piece out to get us through from start to finish?

1. build simple server
2. models + schema + db setup
3. build views
4. controller (router aka the routes in the server)


What are a couple of goal posts we can work towards, based on what entities and features we need to build out?

Which features should we build first and why?

# Coding!

Lets get going!
