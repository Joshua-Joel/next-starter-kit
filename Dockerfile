FROM node:18-alpine AS base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 3000
ARG BRAND=mrc
ENV BRAND=$BRAND

FROM base AS builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM base AS production
WORKDIR /app
ENV NODE_ENV=production
RUN npm ci

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

CMD ["npm", "run", "start"]

