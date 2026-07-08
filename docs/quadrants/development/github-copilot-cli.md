---
ring: ALPHA
label: GitHub Copilot CLI
active: true
moved: 1
---

## Summary
GitHub Copilot CLI brings AI assistance to the command line, suggesting shell commands, explaining terminal output and helping with complex command construction.

## Why we're interested
Developers spend significant time in terminals. AI CLI assistance can accelerate scripting, reduce errors and make complex commands more accessible.

## Current status
Being evaluated by a small group of engineers. Early results are encouraging but the tooling is still maturing.

## Evidence & feedback
Useful for constructing complex git, docker and cloud CLI commands. Works best when the user provides clear context. Some hallucination risk on obscure or niche commands.

## Known risks / concerns
Generated commands should always be reviewed before execution, especially on production systems. Risk of executing incorrect or destructive commands if suggestions are accepted without scrutiny.

## Recommended audience
Engineers who regularly work in terminals and are comfortable critically reviewing suggested commands.

## Next steps
Expand the evaluation group. Gather structured feedback. Assess fit alongside other CLI tooling in the standard developer environment.

## Owner
Developer Experience Team
