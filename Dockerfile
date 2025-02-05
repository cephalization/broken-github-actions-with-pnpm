FROM node:22-slim AS frontend-builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm i -g corepack
RUN corepack enable
RUN corepack use pnpm
COPY ./package.json .
COPY index.ts .
RUN pnpm install
RUN pnpm run build

CMD ["pnpm", "start"]