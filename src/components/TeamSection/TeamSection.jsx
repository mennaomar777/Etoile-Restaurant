import React, { useEffect, useState } from "react";
import { supabase } from "../../Helper/supabase-client";

export default function TeamSection() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTeam() {
    setLoading(true);
    try {
      const { data } = await supabase.from("team").select("*");
      setTeam(data || []);
    } catch (error) {
      console.error("Error fetching team:", error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTeam();
  }, []);

  if (loading)
    return <p className="text-center py-12 text-[#c8a97e]">Loading team...</p>;

  return (
    <section className="py-16 bg-[#faf9f6]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3E3B32] mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-[#C8A97E]"
              />
              <h3 className="text-lg font-semibold text-[#3E3B32] mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
