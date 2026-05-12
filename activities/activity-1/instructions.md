# Activity 1 — Server with a Console

## Goal

Build a small HTTP server that returns the same response to every request, **plus** a terminal console (using `node:readline`) that lets you run commands while the server is running. The server and the console live in the same Node process.

## What you'll practice

- `node:http` — `createServer`, `res.end`, `server.listen`, `server.close`
- `node:readline` — `createInterface`, `.on('line', ...)`, `.prompt()`, `.close()`
- Plain JS — arithmetic, `Number()`, `switch`, template literals, string methods (`toUpperCase`, `split`, `reverse`, `join`)

## Setup

```
cd starter
npm start
```

You should see:

```
Server running at http://localhost:3000/
>
```

The `>` is your console prompt. You can type commands there while the server is up.

## Part 1 — the HTTP server

Every request returns the same response — there is **no routing**. The response body looks like this:

```
Hello, World! (served 1 requests)
```

The number is a running count of how many requests the server has handled since it started.

From another terminal:

```
curl http://localhost:3000/
curl http://localhost:3000/anything
curl http://localhost:3000/foo/bar
```

All three return the same body, and the count goes up by one each time.

## Part 2 — the console (`readline`)

While the server is running, the same process also listens for commands at the `>` prompt. Implement these commands:

| Command | What it does |
|---|---|
| `add <a> <b>` | Print `a + b` |
| `sub <a> <b>` | Print `a - b` |
| `mul <a> <b>` | Print `a * b` |
| `div <a> <b>` | Print `a / b`. If `b` is `0`, print an error message instead of dividing. |
| `upper <text>` | Print the text uppercased |
| `reverse <text>` | Print the text reversed |
| `count` | Print the current request count |
| `set <text>` | Change the server's greeting to `<text>` |
| `help` | List the available commands |
| `stop` | Close the server and exit the process |

Use a `switch` on the command word to decide which behavior runs.

### Example session

```
> add 4 5
9
> div 10 0
Cannot divide by zero
> upper hello world
HELLO WORLD
> reverse abcdef
fedcba
> set Bonjour!
ok
> count
3
> stop
```

After `set Bonjour!`, the next HTTP request returns `Bonjour! (served N requests)`.

## Acceptance criteria

- [ ] `npm start` boots the server and shows the `>` prompt.
- [ ] `curl http://localhost:3000/anything` returns the greeting with the current count, no matter what path you hit.
- [ ] `add`, `sub`, `mul`, `div` produce correct numeric results.
- [ ] `div <a> 0` prints an error and does not crash.
- [ ] `upper` and `reverse` work on multi-word input.
- [ ] `set <text>` changes what the server responds with on the next request.
- [ ] `count` matches the number of requests served so far.
- [ ] `stop` closes the server and exits without crashing.

## Stretch (optional)

- Add `mod <a> <b>` (remainder) and `pow <a> <b>` (exponent).
- Add `lower <text>` for lowercase.
- Add `random <min> <max>` using `Math.random()` and `Math.floor()`.
- Parse the request URL with `new URL(req.url, 'http://localhost')` and include the requested path in the response body.

## Hints

Parsing numbers from the command arguments:
```js
const a = Number(args[0]);
const b = Number(args[1]);
```

Joining the rest of the line back into one string:
```js
const text = args.join(' ');
```

Reversing a string:
```js
text.split('').reverse().join('')
```
