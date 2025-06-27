import { useEffect } from "react";
import "github-calendar/dist/github-calendar-responsive.css";

const GitHubStats = () => {
  useEffect(() => {
    import("github-calendar").then(({ default: GitHubCalendar }) => {
      GitHubCalendar(".calendar", "Ritik-Dethliya", {
        responsive: true,
        tooltips: true,
      });
    });
  }, []);

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>

    <h2 className="text-2xl font-bold mb-6">📊 GitHub Stats</h2>
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 my-3">
        <div className="flex-1 flex justify-center">
        <img
            src="https://github-readme-stats.vercel.app/api?username=Ritik-Dethliya&show_icons=true&theme=gruvbox"
            alt="GitHub Stats"
            className="w-full max-w-md object-contain"
        />
        </div>

        <div className="flex-1 flex justify-center">
        <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ritik-Dethliya&layout=compact&theme=gruvbox"
            alt="Top Languages"
            className="w-full max-w-md object-contain"
        />
        </div>
    </div>
  
      <h2 className="text-2xl font-bold mb-6">📆 GitHub Contribution Calendar</h2>
      <div className="calendar" style={{ maxWidth: "100%", overflowX: "auto" }}>
        Loading GitHub contributions...
      </div>
      
    </section>
  );
};

export default GitHubStats;

