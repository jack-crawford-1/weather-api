import { Link } from 'react-router-dom'

function About() {
  const backgroundColor = 'bg-blue-400'
  // const backgroundImage = 'url(/images/a3.png)'
  const backgroundSize = 'contain'

  return (
    <>
      <div
        className={`${backgroundColor}  m-0 box-border h-screen bg-contain bg-top bg-no-repeat md:h-screen md:p-5`}
        style={{
          // backgroundImage: backgroundImage,
          backgroundSize: backgroundSize,
        }}
      >
        <div className="font-rubik font-bold text-white">
          <div>
            <h1 className="p-5 text-3xl">Weather App</h1>
            <h2 className="pt-5 text-xl">
              <strong className="m-10">Purpose</strong>
            </h2>
            <p className="m-5 p-5 text-left md:w-1/2">
              This full-stack weather application dedicated to delivering
              real-time weather data for my home town of Wellington. With a
              focus on usability and responsive design, it allows users to see
              accurate weather forecasts, including current conditions,
              temperature, and wind data, by harnessing the power of external
              weather APIs.
            </p>
          </div>
          <div>
            <h2 className="pl-10 text-xl">
              <strong>Technologies Used</strong>
            </h2>
            <div className="flex flex-row">
              <ul className="m-5 p-5">
                <li>React</li>
                <li>React Router DOM</li>
                <li>TailwindCSS</li>
                <li>Vite</li>
                <li>TypeScript</li>
                <li>Express.js</li>
              </ul>
              <ul className="m-5 p-5">
                <li>Node.js</li>
                <li>Superagent</li>
                <li>Vitest</li>
                <li>ESLint</li>
                <li>Prettier</li>
                <li>meteosource.com/api</li>
              </ul>
            </div>
            <div>
              <h2 className="pl-10 text-xl">
                <strong>Features</strong>
              </h2>
              <ul className="m-5 p-5">
                <li>
                  Real-time weather forecasts with an intuitive and adaptive
                  user interface.
                </li>
                <li>Dark mode feature to enhance visual comfort.</li>
                <li>
                  Comprehensive weather details, such as cloud cover, rain
                  forecasts, and wind conditions.
                </li>
              </ul>
              <Link
                to="/"
                className="bg-blue-400 font-rubik-mono text-2xl text-gray-200 hover:bg-blue-500 hover:text-white md:m-10"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

// Purpose:
// This is a sleek, full-stack weather application dedicated to delivering real-time weather data for regions across the globe. With a focus on usability and responsive design, it empowers users with accurate weather forecasts, including current conditions, temperature, and wind data, by harnessing the power of external weather APIs.

// Technologies Used:

// Frontend: Implemented with React for building a dynamic user interface and TailwindCSS for styling. React Router is used for page navigation without full page reloads.
// Backend: Express.js serves as the backend framework, facilitating API requests to external weather data providers.
// **API
// Consumption**: Uses superagent to perform server-side requests to third-party weather APIs, abstracting the complexities of direct client-side API calls and enhancing performance through server-side processing.

// Development & Building: Utilizes Vite for an optimized front-end build tool, esbuild for fast JavaScript bundling, and TypeScript for static type checking.
// Testing: Leverages Vitest for unit and integration testing to ensure code reliability and correct functionality.
// Code Quality: Adopts ESLint for static code analysis, Prettier for code formatting, and a suite of plugins to maintain high standards of code quality.
// Features:

// Real-time weather forecasts with an intuitive and adaptive user interface.
// Dark mode feature to enhance visual comfort depending on the user's preference or time of day.
// Comprehensive weather details, such as cloud cover, rain forecasts, and wind conditions.
// Challenges & Solutions:
// Integrating with external APIs required handling asynchronous operations and potential errors gracefully. This was achieved using modern JavaScript async/await syntax and robust error handling patterns to provide a smooth user experience even when external data sources are slow or temporarily unavailable.

// Future Scope:
// The application is structured for scalability, with the potential to include additional features like extended forecasts, weather warnings, and geographical expansion to include more regions and languages.
