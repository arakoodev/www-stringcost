---
sidebar_position: 4
title: Error Responses
description: API error codes and responses
---

# Error Responses

## 401 Unauthorized

```json
{
  "error": "Invalid or missing API key"
}
```

## 403 Forbidden

```json
{
  "error": "Session cost limit exceeded"
}
```

## 404 Not Found

```json
{
  "error": "Session not found or expired"
}
```

## 429 Too Many Requests

```json
{
  "error": "Max uses exceeded"
}
```
