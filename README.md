## About

Initially a parking lot of **content** to be distributed among various eventual FSA Design System and Playbook sites.

## Minimum Environment Requirements

1. Ruby 2.2.3 +
1. Node 0.12.0
1. NPM 1.4.13 +

## Building locally

Install local dependencies...

(WIP: to be simplified right soon.)

```sh
bundle install
```

...and then...

```sh
npm install
```

...and then...

```sh
grunt build
```

...and then...

```sh
npm start
```

...and then navigate to [http://localhost:4000/fsa-playbook-wip/](http://localhost:4000/fsa-playbook-wip/)

### Troubleshooting

If you're getting weird "Kramdown" error messaging...
```sh
gem install kramdown
```
...and then try this again...

```sh
npm start
```

...and then navigate to [http://localhost:4000/fsa-playbook-wip/](http://localhost:4000/fsa-playbook-wip/)

If it's something else, reach out to me.
