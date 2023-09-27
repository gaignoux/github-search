# Github Search Interface

This project was done in partnership with [Featury](https://www.featury.io/), based on their challenge, this interface was built to search repositories using Graphql in a simpler way.

## Getting Started

Firstly, to run the project locally, you will need `Personal access tokens (classic)` from Github.
Accessible from `Settings > Developer Settings > Personal Access Tokens > Tokens (classic)`. This system does not need many permissions, so it can generate a token with just the `public_repo` permission.

Once that's done, you need to create a copy of the `.env.local.dist` file and paste the token you just generated like this:
```bash
GITHUB_API=https://api.github.com
GITHUB_ACCESS_TOKEN=your_token_here
```

After that, run the development server:

```bash
npm install
# and
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can also view it online using the `Vercel` link here:
[Github Search Interface on Vercel](https://github-search-three-eta.vercel.app/)

The project is open source, but if you want to contribute, please fork or send PR.
