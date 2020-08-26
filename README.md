# PES Innovation Lab (formerly Microsoft Innovation Lab)

<img src="toPort/imagesToPort/images/mlab/mlab_logo_black.png" alt="logo" width="100px" height="90px"><br/>

 We are a student community dedicated to cultivating the spirit of research and innovation in budding engineers.<br/>

## Contributing

We use a rebase-oriented workflow. We do not use merge commits. This means to get your local branch up-to-date with the upstream, you would use
```
git pull --rebase upstream master
```
instead of regular `git pull`. It’s best to write your commits prefacing the file you changed, but if you don’t, you can always fix your history using `git rebase -i`. An example of a good commit would be
```
index: Fix UI layout in mobile view.
```

## Reviewing other PR's :
Reviewing other PR's is good practice. Easy-to-use scripts in `tools/` have been provided to fetch PR's . Here's how you make use of them :
```
./tools/fetch-pull-request 123
```
(*where `123` is the PR number*).

Contact
-----
email : pes.mlab@gmail.com <br/>
Website : https://pes-innovation-lab.github.io/web/ <br/>

----