'use client';

import * as React from 'react';
import Image from 'next/image';
import { faculty, type FacultyMember } from '@/data/faculty';
import { cn } from '@/lib/utils';

export function FacultyGrid() {
  const departments = React.useMemo(() => {
    const unique = Array.from(new Set(faculty.map((f) => f.department)));
    return ['All', ...unique];
  }, []);

  const [filter, setFilter] = React.useState<string>('All');

  const filtered = React.useMemo(() => {
    if (filter === 'All') return faculty;
    return faculty.filter((f) => f.department === filter);
  }, [filter]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        {departments.map((dept) => (
          <button
            key={dept}
            type="button"
            onClick={() => setFilter(dept)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              filter === dept
                ? 'bg-primary text-primary-foreground'
                : 'border border-border bg-card text-foreground/70 hover:bg-accent/10 hover:text-primary'
            )}
          >
            {dept}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-muted-foreground">
          No faculty members in this department.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((f) => (
            <FacultyCard key={f.name + f.department} member={f} />
          ))}
        </div>
      )}
    </>
  );
}

function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.designation}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg font-bold text-foreground">{member.name}</h3>
        <p className="text-sm font-medium text-accent">{member.designation}</p>
        <p className="mt-1 text-sm text-muted-foreground">{member.department}</p>
        <p className="mt-2 text-xs text-muted-foreground">{member.qualification}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">{member.bio}</p>
      </div>
    </div>
  );
}
