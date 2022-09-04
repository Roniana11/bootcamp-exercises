/* let userStorage = {
  darkMode: true,
  showSideNav: false,
  defaultResultCount: 9,
  latestMarks: {
      sectionA: 92,
      sectionB: 11
  },
  cart: [
      { id: 3112, count: 2 },
      { id: 812, count: 16 }
  ]
}


localStorage.setItem('userStorage',JSON.stringify(userStorage));

console.log(JSON.parse(localStorage.getItem('userStorage')).cart[1].count) */

const wisdomSaver = () => {
  let _wisdom = [];

  function initWisdoms() {
    _wisdom = JSON.parse(localStorage.getItem("wisdom") || "[]");
  }
  function getWisdoms() {
    return JSON.parse(JSON.stringify(_wisdom));
  }

  function addWisdom(text) {
    const id = Math.random().toString().split(".")[1];
    _wisdom.push({ id, text });
    if (_wisdom.length % 2 === 0) {
      localStorage.setItem("wisdom", JSON.stringify(_wisdom));
    }
  }

  function clearWisdom() {
    localStorage.removeItem("wisdom");
    _wisdom.length = 0;
  }

  function deleteSingleWisdom(id) {
    _wisdom = _wisdom.filter((wiz) => wiz.id !== id);
    localStorage.setItem('wisdom',JSON.stringify(_wisdom))
  }

  return { initWisdoms,getWisdoms, addWisdom, clearWisdom, deleteSingleWisdom };
};
