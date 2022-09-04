const renderer = () => {
  const renderWisdom = (wisdom) => {
    const list = $("#list");
    list.empty();
    wisdom.forEach((wis) => {
      const item = $(`<li data-id=${wis.id}><p>${wis.text}</p><button class="delete">x</button></li>`);
      list.append(item);
    });
  };

  return renderWisdom;
};
