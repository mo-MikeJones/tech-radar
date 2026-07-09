---
ring: ALPHA
label: Local LLMs
active: true
moved: 1
---

## Summary
Running large language models locally on developer machines or internal infrastructure, eliminating external service dependencies and addressing data privacy requirements.

## Why we're interested
Local LLMs address data privacy requirements for sensitive codebases and enable AI assistance in environments where external API calls are restricted or prohibited.

## Current status
Being explored by a small group. Tooling such as Ollama is being evaluated. Performance still significantly below cloud-hosted models for complex code tasks.

## Evidence & feedback
Viable for basic completions and simple tasks. Significant performance gap for complex reasoning compared to state-of-the-art cloud models. High hardware requirements for capable models.

## Known risks / concerns
Performance limitations may frustrate developers. Significant compute requirements. Maintenance overhead for running and updating local models.

## Recommended audience
Engineers working on sensitive or restricted codebases where cloud AI services cannot be used.

## Next steps
Define specific use cases where local LLMs are appropriate. Evaluate hardware provisioning strategy. Revisit recommendation as model efficiency improves.

## Owner
Security & Privacy Engineering
