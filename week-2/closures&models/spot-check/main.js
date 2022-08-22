const family = () => {
  const members = [];
  const birthday = (name) => {
    members.push(name);
    console.log(members);
  };

  return birthday;
};

const giveBirth = family();
giveBirth("michal");
giveBirth("zion");
giveBirth("ravid");
giveBirth("roni");
