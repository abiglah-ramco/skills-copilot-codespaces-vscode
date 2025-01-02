function skillsMember(){
    var skills = [
      {
        "name": "John",
        "skills": ["Python", "JavaScript", "TypeScript"]
      },
      {
        "name": "Jane",
        "skills": ["C++", "Java", "Python"]
      },
      {
        "name": "Alice",
        "skills": ["Python", "Java", "C#"]
      },
      {
        "name": "Bob",
        "skills": ["Python", "Java", "C#"]
      },
    ];
    
    let skillSet = new Set();
    skills.map((skill) => {
      skill.skills.map((s) => skillSet.add(s));
    });
    
    console.log(skillSet);
    
    let skillArray = Array.from(skillSet);
    console.log(skillArray);
    
    let skillMap = new Map();
    skills.map((skill) => {
      skill.skills.map((s) => {
        if (!skillMap.has(s)) {
          skillMap.set(s, []);
        }
        skillMap.get(s).push(skill.name);
      });
    });
    
    console.log(skillMap);
    
    let skillArrayMap = Array.from(skillMap);
    console.log(skillArrayMap);
    
    let skillArrayMapSorted = skillArrayMap.sort((a, b) => b[1].length - a[1].length);
    console.log(skillArrayMapSorted);
  }