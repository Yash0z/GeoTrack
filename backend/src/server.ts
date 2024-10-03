/// <reference types="bun-types" />

const server = Bun.serve({
   port: 3000,
   fetch(req: { url: string | URL; }) {
     const url = new URL(req.url);
 
     if (url.pathname === "/") {
       return new Response("Hello from the root route!");
     } else if (url.pathname === "/api") {
       return new Response(JSON.stringify({ message: "Hello from API!" }), {
         headers: { "Content-Type": "application/json" },
       });
     } else {
       return new Response("Not Found", { status: 404 });
     }
   },
 });
 
 console.log(`Listening on http://localhost:${server.port} ...`);
 