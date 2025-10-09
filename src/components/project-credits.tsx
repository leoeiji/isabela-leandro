interface Team {
  name: string;
  members: string[];
}

interface ProjectCreditsProps {
  teams: Team[];
}

export function ProjectCredits({ teams }: ProjectCreditsProps) {
  return (
    <div className="w-full grid grid-cols-12">
      <div className="w-full flex flex-col gap-4 my-10 col-span-4 md:col-start-8">
        <p className="text-sm text-[#9E9E9E] font-medium">CREDITS</p>
        {teams.map((team, index) => (
          <div key={index}>
            <p className="font-bold mb-3.5">{team.name}</p>
            {team.members.map((member, idx) => (
              <p key={idx} className="text-md">
                {member}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
