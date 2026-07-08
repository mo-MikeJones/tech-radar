---
ring: BETA
label: AI-generated Test Cases
active: true
moved: 1
---

## Summary
Automated generation of unit and integration test cases using AI tools, driven by existing code, documentation or natural language descriptions.

## Why we're interested
Test coverage is consistently under-resourced. AI-generated tests can rapidly increase coverage and surface edge cases that developers might miss.

## Current status
Actively trialled in several teams with promising results. Not yet standardised across all engineering teams.

## Evidence & feedback
Pilots show strong coverage for straightforward units. Generated tests often require refinement for domain-specific edge cases. Net positive on test quality when combined with human review.

## Known risks / concerns
AI may generate tests that pass trivially or test implementation details rather than behaviour. All generated tests must be reviewed before merging.

## Recommended audience
Engineers looking to improve test coverage quickly. Teams working on refactoring legacy code with low coverage.

## Next steps
Establish guidelines for reviewing AI-generated tests. Measure quality impact on teams currently trialling the approach.

## Owner
Quality Engineering
