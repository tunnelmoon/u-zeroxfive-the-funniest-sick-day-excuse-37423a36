[![make.fun](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/tunnelmoon/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/rank.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/tunnelmoon/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/reward.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

# The Funniest Sick-Day Excuse

A make.fun bounty entry. One line under 200 characters that gets you out of work and gets a laugh.

## Entry

> I woke up allergic to my alarm clock. Doctor says avoid mornings until further notice.

## How it runs

`main.ts` (Node 22, stdlib only) validates the line against the bounty gate (1 to 200 characters, single line, not only whitespace) and writes it to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`, with a round-trip read-back check.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
