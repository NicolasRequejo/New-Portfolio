import React from 'react'

export default function Li({skills}) {
  return (
    <div className="li_skills column is-3-tablet is-4-mobile ">
      <p className="p_skills">{skills.name}</p>
      <img className="img-skills" src={skills.img} alt={skills.alt} />
    </div>
  );
}
