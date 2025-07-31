# Country Finder

A responsive data table component that displays and manages country information fetched from the GraphQL endpoint. The table provides comprehensive filtering, pagination, and search capabilities.

## Technical Stack

- React.js with TypeScript
- Vite as build tool
- Apollo GraphQL Client for data fetching
- Tailwind CSS for styling
- Formik (for form management)
- Recoil (for state management)

## Assumptions

### Pagination URL Updates

The specification was unclear regarding bi-directional URL synchronization. I implemented one-way URL updates that reflect the current pagination state without reading from URL parameters on page load.

### Filter Combination

The specification states "Filters should be combinable" but was ambiguous about scope. This branch does not clear state between search types, allowing filters to persist across different search types for more filtering capabilities.

### Country Name Search

The specification required "Country name (similarity/fuzzy search)" but was missing from the UX design. I was unsure if this was supposed to be tied with country code but assumed it was to be a separate search type. I implemented a case-insensitive substring search that matches country names containing the entered text.
