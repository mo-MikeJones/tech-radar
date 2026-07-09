---
ring: RETIRED
label: AI-generated Code Without Human Review
active: true
moved: 1
---

## Summary
The practice of accepting and deploying AI-generated code directly without any human review step.

## Why we're interested
While AI code generation is highly valuable, the practice of bypassing human review introduces unacceptable quality and security risks at scale.

## Current status
Not recommended. All AI-generated code must be reviewed by a human engineer before merging or deployment.

## Evidence & feedback
Several incidents linked to unreviewed AI-generated code, including security vulnerabilities and incorrect business logic. Human review remains an essential quality gate.

## Known risks / concerns
Unreviewed AI code may introduce security vulnerabilities, subtle bugs and logic errors. AI models have no understanding of business context or production constraints.

## Recommended audience
This practice is not recommended for any audience. AI-assisted development is encouraged — unreviewed AI deployment is not.

## Next steps
Enforce code review requirements in all CI/CD pipelines. Include AI code review responsibilities in engineering onboarding.

## Owner
Engineering Platform Team
