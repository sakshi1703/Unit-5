Next.js Blog Application
This is a blof application built using Naext.js 13+ with the App router . It provides different rendering techniques, API routes, authentication middlewares, error handling, ad UI enhancement

Features:
- App router(app/directory) for file-based routing
- API Routes(app/api/posts/) for fetching blog posts.
- Middleware fot authnetication before accessing API routes
- Dynamic Routing for individual blog pages (app/post/[id])
- Custom 404 pages (not-found.js) for handling missing pages and error etc.
- Loading Indicatiors (loadig.js) for better user experience
- Error handling to manage API error

  Installation & SetUp

  1) clone the Repository:
    git clone https://github.com/sakshi1703/Unit-5/edit/main/Evaluation
    cd evel

  2)Install dependencies:
    npm i or npm install

  3) start the development server:
     npm run dev

  4)open in your Browser:

  http://localhost:3000

 Folder Structure

 evel
 |---app/
 | |---page.js
 | |---post/[id]/page.js
 | |---about/page.js
 | |---api/
 |     |---posts/route.js
 |     |---posts/[id]/route.js
 | |---not-found.js   
 | |---loading.js
 |---middleware
 |---package.json
 |README.md



 
