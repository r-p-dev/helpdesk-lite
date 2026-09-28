# HelpDesk Lite — Customer Support Ticket Dashboard

A lightweight support desk for tracking customer issues: log tickets, filter the queue, update status and keep support notes. Built with **React**, **TypeScript**, **Vite** and **Tailwind CSS**.

## Features

- **REST API integration** — customers are loaded from the public [DummyJSON](https://dummyjson.com) `/users` endpoint. If the API is unreachable, the app switches to local sample customers and tells the user.
- **Ticket queue** — search by ticket ID, subject or customer; filter by status and priority.
- **Clickable queue summary** — Open, In progress, Resolved and Urgent counts that also act as filters.
- **Ticket details** — customer contact card, one-click status updates and a timeline of support notes.
- **New ticket form** — with field-level validation and clear error messages.
- **Saved in the browser** — tickets persist in `localStorage`, so work survives a page refresh.
- **Responsive and accessible** — list and detail side by side on desktop, one at a time on mobile; keyboard focus styles, ARIA labels and `aria-pressed` states.

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 18 with hooks (`useState`, `useEffect`, `useMemo`) |
| Language | TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Data | DummyJSON REST API, browser `localStorage` |

## Project structure

```
src/
  App.tsx                    # Layout, filtering, ticket state
  components/
    TicketDetail.tsx         # Customer card, status control, notes
    NewTicketForm.tsx        # Create-ticket dialog with validation
    Pills.tsx                # Status and priority indicators
  lib/
    api.ts                   # Customer API request + offline fallback
    storage.ts               # localStorage persistence and sample tickets
    types.ts                 # Shared TypeScript types
```

## Run locally

```bash
npm install
npm run dev
```

Open the address Vite prints (usually http://localhost:5173). Build for production with `npm run build`.

## Possible next steps

- Backend with authentication and assignment of tickets to support agents
- Email notifications when a ticket status changes
- Response-time tracking and simple reports

## Author

Rabi Prasad Devkota — rabiprasaddevkota@gmail.com
