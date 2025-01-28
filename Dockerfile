# Build
FROM node:latest AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Deploy
FROM node:latest

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD [ "npm", "run", "start" ]