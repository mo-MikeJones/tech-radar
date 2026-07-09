---
ring: ALPHA
label: AWS MCP Integration
active: true
moved: 1
---

## Summary
Integration of AWS services with AI agents via the Model Context Protocol, enabling AI to interact with S3, Lambda, DynamoDB and other AWS services in a structured, auditable way.

## Why we're interested
We run heavily on AWS. MCP-based AWS integration allows AI agents to interact with our cloud infrastructure with proper access controls and auditability.

## Current status
POC integrations built for S3 and Lambda. Evaluating security model and scope before broader rollout.

## Evidence & feedback
Early POC results are promising. AWS MCP server implementation is functional. IAM policy design is critical and requires careful least-privilege configuration.

## Known risks / concerns
AWS MCP integrations have direct access to production infrastructure. Misconfigured IAM policies could allow AI agents to make destructive changes. Strong guardrails are required.

## Recommended audience
Cloud platform engineers and AI integration specialists. Teams evaluating AI-driven cloud operations.

## Next steps
Complete security review of the IAM model. Define approved use cases. Publish integration guidelines and reference implementations.

## Owner
Cloud Platform Team
