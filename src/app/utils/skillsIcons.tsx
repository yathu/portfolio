export interface SkillIcon {
  name: string;
  url: string;
}

export interface SkillsIcons {
  javascript: SkillIcon;
  typescript: SkillIcon;
  react: SkillIcon;
  nodejs: SkillIcon;
  html5: SkillIcon;
  css3: SkillIcon;
  python: SkillIcon;
  git: SkillIcon;
  github: SkillIcon;
  docker: SkillIcon;
  tailwind: SkillIcon;
  redux: SkillIcon;
  gulp: SkillIcon;
  jekyll: SkillIcon;
  jquery: SkillIcon;
  flutter: SkillIcon;
  sqlite: SkillIcon;
}

export const skillsIcons: SkillsIcons = {
  javascript: {
    name: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  typescript: {
    name: "TypeScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  react: {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  tailwind: {
    name: "Tailwind",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  redux: {
    name: "Redux",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  nodejs: {
    name: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  html5: {
    name: "HTML5",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  css3: {
    name: "CSS3",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  python: {
    name: "Python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  git: {
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  github: {
    name: "GitHub",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  docker: {
    name: "Docker",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  gulp: {
    name: "Gulp",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg",
  },
  jekyll: {
    name: "Jekyll",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jekyll/jekyll-original.svg",
  },
  jquery: {
    name: "jQuery",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  },
  flutter: {
    name: "Flutter",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  sqlite: {
    name: "SQLite",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
};
