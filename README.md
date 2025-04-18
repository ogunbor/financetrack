💸 FinanceTrack
FinanceTrack is a modern personal finance tracker built with Next.js 15, TailwindCSS 4, and Drizzle ORM. It helps users track their expenses, visualize financial data, and maintain control over their spending habits with ease.

✨ Features
🔐 Authentication via Clerk

📅 Track expenses with date pickers

📊 Visualize trends using Recharts

💾 Cloud-native DB access via Neon Serverless and Drizzle ORM

🌘 Light/Dark mode with next-themes

📦 Flexible form handling with react-hook-form & Zod validation

🧠 Clean, accessible UI with Radix UI

⚙️ Smooth animations using tw-animate-css

🧱 Tech Stack

Category	Tools & Libraries
Framework	Next.js 15
Styling	Tailwind CSS 4
Forms & Validation	React Hook Form, Zod, @hookform/resolvers
DB & ORM	Neon Serverless, Drizzle ORM
Charts	Recharts
Auth	Clerk
UI Components	Radix UI, Lucide React
Utilities	clsx, date-fns, numeral, dotenv
🚀 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/financetrack.git
cd financetrack
2. Install dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Set up environment variables
Create a .env file and add the following (example format):

env
Copy
Edit
DATABASE_URL=your_neon_database_url
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
Make sure you have a Neon DB and Clerk project set up.

4. Run the development server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 to see it in action.

🛠 Scripts

Command	Description
npm run dev	Start dev server with Turbopack
npm run build	Build for production
npm start	Start production server
npm run lint	Run ESLint checks
🧪 Development Notes
Drizzle ORM config lives in drizzle.config.ts

Clerk is configured under middleware.ts and the auth/ directory

Recharts components are reusable and modular in components/charts/

UI is built with accessibility in mind using Radix UI
