---
title: a year later - and a new design
date: 2021-04-04
description: don't you think it looks nice?
---

# {{ $frontmatter.title }}

As many times before, it's been a long time since I've posted here - this is the first post of 2021! (happy new year)

Following a spur of motivation to make my online presence :sparkles: shmexy :sparkles:, I decided to recode and redesign my [website](https://squeezebox.dev) and blog. For those interested in the technical mumbo-jumbo, I'll be talking about what is behind the scenes later in this article.

Before that, though, I feel obligated to talk about what I've been up to...

### Death to 2020
I posted a few times at the start of 2020, with my most recent post being in February. As I'm sure you can guess, a fair bit has changed since then. Much the same as many others, I'm now a professional at staying home for extremely long periods of time - no change there!

2020 was such a blur, it's honestly hard to remember anything significant that happened to write here. From scrolling through my Instagram, it's clear that I only went outside a few times!

I took part in my fair share of group video calls, and did most of the typical lockdown things. I found myself going on quite a few walks for the first few weeks, but that habit definitely didn't last. I spent quite a lot of time *developing* my coding skills, and that definitely paid off at work--

Over the course of 2020 I was given the opportunity to become a Software Developer at Shockbyte, and then later an Incident Manager. My extra freetime has allowed me to put a lot of time into work, and I've really enjoyed these new opportunities.

### So, 2021?
Despite spending the first three months in more lockdown, we're nearing business as usual again. I was back to school in March of this year, and I thankfully haven't been sent home to isolate since then. It's currently the Easter holidays, and I've been playing far too much Minecraft and revising far too little.

Following my return to school, life feels completely normal. My day-to-day activities are no different to any other year - despite the endless restrictions and guidelines in classrooms!

Oh, sixth form! I went through interviews for my post-16 education recently and have been offered places at two colleges in Cambridge. As long as I get the grades that I'm hoping for, I'll be off to Hills Road to study Drama, Computer Science and Psychology. I've been told that it's a good mix of subjects, but I just hope that the workload isn't too much :sweat_smile:
I'm really looking forward to the independence that comes along with post-16 education. Even in the guidance meetings that I attended for colleges, they made me feel like an actual person - feels a lot different to secondary! I hope I don't look back here in a few months and regret being so excited about sixth... it'll be the next two years of my life...

On the subject of grades, my school have *somewhat* decided what they want to assess us on for our GCSEs - albeit subject to change. After normal GCSE exams were scrapped for the second year in a row, we're now being given mini-assessments in classrooms. Following the Easter break we won't be taught any new content, and the main focus will be on gathering evidence for these assessments. In Physics, we had just started the (greatly anticipated) "Space" topic - sucks that we won't get to finish it :(

We've been told to revise over the Easter break, and I have to admit that I haven't done as much as is expected. I'm hoping that I'll be able to ramp this up next week though, as otherwise that Hills offer might not go the way I want!

Jumping around in time a little bit, I am proud to say that I have found many new obessions over the many lockdowns of 2020/21. I even received an epic Hamilton jumper for Christmas from Grandad, which is very cool. Not only have I become a diehard Hamilton fan (I know all the lyrics now, very impressive stuff), but more recently I've started listening to Taylor Swift. I started off by listening to her (then newest) album Folklore, catching on to her most recent release Evermore, and then going back and listening to some of her older albums. She'll be re-releasing her third album Fearless in a few days, which I'm looking forward to. I've mainly got Holly and Mitch to thank for getting me stuck into her music, and I don't regret it!

Hopefully, pretty soon, I'll be receiving my [A5 Suttner](http://suttnerconcertinas.com/projects-item/a5-anglo-concertina/) concertina. I've been looking forward to this for over a year, and I am very excited! Suttner concertinas are supposed to be the best in the game, so I'm very grateful to my Grandma for forking out the cash.

Coming up in 2021, I've (hopefully) got three gigs to attend. It was supposed to be four, but Steven Wilson unfortunately cancelled. They all fall in November, and if everything goes to plan I'll be seeing Talisk twice in 2 days, and Marillion too (for the first time)!

### Boring, technical stuff
As promised, I'll talk a little bit about the recode process and what's going on behind the scenes of the blog.

After previously using Jekyll with the Accent theme for my blog, I decided to recode using Vuepress. The main motivation for this was that the Accent theme didn't match the rest of my site, but another key motivation was that I'm being asked to work on more Vue projects at Shockbyte - I need the experience!

I started off with the base site using `create-vuepress-site`, and got going from there. I imported all of the styling from my old site, and worked to make it look shmexy.

One issue that I faced was listing all the posts on the homepage. For this, I ended up finding a component online that handled returning all the posts in a div, and then I just messed around with the CSS until it looked good.

Vuepress comes with a bunch of helpful features that meant I didn't have to do too much work to get the blog working. All I really needed to do was some basic configuration, and **lots** of styling. One of the great features is that I can include Vue components within blog posts, which will make for some crackin' coding posts - if I can grow enough braincells to manage that sort of thing.

Migrating my previous posts over wasn't too tricky, thankfully! Jekyll uses frontmatter for storing post metadata, and so that was all compatible already. I just had to change the date format, and fix a few broken image links. I might need to implement pagination for the home page, so that the list of blog posts doesn't become overwhelming...

Once I'd gotten everything looking nice locally, it was time to work on deploying the blog. I was able to find a pre-made GitHub workflow for deploying Vuepress blogs, which made life significantly easier. From there, I'm just using GitHub Pages to serve the generated files. Easy!

Many friends helped out with giving feedback and advice, so thanks to all them. You know who you are <3

### Thanks for reading!
This has been my chance to chat about all of the (quite boring) events of the past year. Hopefully, with this new blog design, I'll be more motivated to write more often!

I hope you found interest in what I had to say. If you've gotten to the end, congratulations - here's a cookie :cookie: