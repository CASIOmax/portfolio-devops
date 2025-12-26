FROM node:18

WORKDIR /app

COPY backend ./backend
COPY frontend ./frontend

RUN cd backend && npm install

EXPOSE 3000

CMD ["node", "backend/server.js"]
